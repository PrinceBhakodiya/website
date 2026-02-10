import express from 'express'
import http from 'http'
import cors from 'cors'
import dotenv from 'dotenv'

import { sendMail } from './src/services/emailService.js'
import {
  getBuyerThankYouEmail,
  getProviderThankYouEmail,
  getAdminNotificationEmail,
} from './src/templates/emailTemplates.js'

dotenv.config()

const app = express()

/* -------------------- Middleware -------------------- */
app.use(express.json())

const allowedOrigin = process.env.FRONTEND_URL

console.log(`🌐 CORS allowed origin: ${allowedOrigin || 'localhost (dev)'}`)

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin) return callback(null, true)
      if (allowedOrigin) return callback(null, allowedOrigin)
      if (
        origin.startsWith('http://localhost') ||
        origin.startsWith('http://127.0.0.1')
      ) {
        return callback(null, true)
      }
      callback(null, false)
    },
    credentials: true,
  })
)

/* -------------------- Health -------------------- */
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

/* -------------------- API Info -------------------- */
app.get('/api', (_req, res) => {
  res.json({
    message: 'X4ET Backend API',
    endpoints: {
      'POST /api/submit-form': 'Generic form submit',
      'POST /api/registrations/buyer': 'Buyer registration',
      'POST /api/registrations/provider': 'Provider registration',
    },
  })
})

/* -------------------- Helper -------------------- */
async function handleFormSubmission(res, formType, data) {
  try {
    if (!data) {
      return res.status(400).json({ success: false, error: 'Missing request body' })
    }

    const requiredFields =
      formType === 'buyer'
        ? ['name', 'email', 'phone', 'company', 'industry', 'technology', 'budget', 'stage', 'description']
        : ['name', 'email', 'phone', 'company', 'website', 'type', 'category', 'industries', 'services', 'region']

    const missing = requiredFields.filter((f) => !data[f])
    if (missing.length) {
      return res
        .status(400)
        .json({ success: false, error: `Missing fields: ${missing.join(', ')}` })
    }

    console.log(`📝 New ${formType} registration`, {
      name: data.name,
      email: data.email,
      company: data.company,
    })

    const adminEmail = process.env.ADMIN_EMAIL || 'admin@x4et.com'

    /* -------- Fire & Forget Emails -------- */
    setImmediate(async () => {
      try {
        if (formType === 'buyer') {
          await sendMail({
            to: data.email,
            subject: 'Welcome to X4ET – Registration Confirmed',
            html: getBuyerThankYouEmail(data),
          })
        } else {
          await sendMail({
            to: data.email,
            subject: 'Welcome to X4ET Provider Network',
            html: getProviderThankYouEmail(data),
          })
        }

        await sendMail({
          to: adminEmail,
          subject: `New ${formType.toUpperCase()} Registration – ${data.name}`,
          html: getAdminNotificationEmail(formType, data),
        })

        console.log('✉️ Emails sent successfully')
      } catch (err) {
        console.error('❌ Email sending failed:', err.message)
      }
    })

    return res.json({
      success: true,
      message: 'Form submitted successfully. Emails queued.',
      data: {
        formType,
        name: data.name,
        email: data.email,
        company: data.company,
      },
    })
  } catch (error) {
    console.error('Form error:', error)
    return res.status(500).json({ success: false, error: 'Internal server error' })
  }
}

/* -------------------- Routes -------------------- */
app.post('/api/registrations/buyer', (req, res) =>
  handleFormSubmission(res, 'buyer', req.body)
)

app.post('/api/registrations/provider', (req, res) =>
  handleFormSubmission(res, 'provider', req.body)
)

app.post('/api/submit-form', (req, res) => {
  const { formType, data } = req.body
  if (!formType || !data) {
    return res.status(400).json({ success: false, error: 'formType and data required' })
  }
  handleFormSubmission(res, formType, data)
})

/* -------------------- Start Server -------------------- */
const port = Number(process.env.PORT || 3002)
const server = http.createServer(app)

server.listen(port, () => {
  console.log(`🚀 Backend running on http://localhost:${port}`)
})
