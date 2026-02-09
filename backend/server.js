import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import { cors } from 'hono/cors'
import { sendEmail } from './src/services/emailService.js'
import {
  getBuyerThankYouEmail,
  getProviderThankYouEmail,
  getAdminNotificationEmail,
} from './src/templates/emailTemplates.js'

const app = new Hono()

// Enable CORS for frontend
app.use('/*', cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}))

// Health check endpoint
app.get('/health', (c) => {
  return c.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// API endpoint for form submissions
app.post('/api/submit-form', async (c) => {
  try {
    const body = await c.req.json()
    const { formType, data } = body

    if (!formType || !data) {
      return c.json({ success: false, error: 'Missing required fields' }, 400)
    }

    // Log the submission immediately
    console.log(`📝 New ${formType} registration:`, {
      name: data.name,
      email: data.email,
      company: data.company,
      timestamp: new Date().toISOString()
    })

    // Get environment variables
    const env = {
      SMTP_HOST: process.env.SMTP_HOST,
      SMTP_PORT: process.env.SMTP_PORT,
      SMTP_SECURE: process.env.SMTP_SECURE,
      SMTP_USER: process.env.SMTP_USER,
      SMTP_PASS: process.env.SMTP_PASS,
      ADMIN_EMAIL: process.env.ADMIN_EMAIL,
      EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
      EMAIL_FROM_ADDRESS: process.env.EMAIL_FROM_ADDRESS,
    }

    // Check if SMTP is configured
    const isEmailConfigured = env.SMTP_USER && env.SMTP_PASS && env.SMTP_HOST

    if (!isEmailConfigured) {
      console.warn('⚠️  Email not configured. Skipping email sending.')
      console.log('💡 To enable emails, configure SMTP settings in environment variables')

      return c.json({
        success: true,
        message: 'Form submitted successfully (emails not configured)',
        emailsSkipped: true,
        data: {
          formType,
          name: data.name,
          email: data.email,
          company: data.company
        }
      })
    }

    // Send emails in background (non-blocking with timeout)
    const adminEmail = env.ADMIN_EMAIL || 'admin@x4et.com'

    // Fire and forget - don't wait for emails to complete
    const emailPromises = []

    if (formType === 'buyer') {
      emailPromises.push(
        sendEmail(
          data.email,
          'Welcome to X4ET - Your Registration is Confirmed',
          getBuyerThankYouEmail(data),
          env
        ).catch(err => {
          console.error('User email failed:', err)
          return false
        })
      )
    } else if (formType === 'provider') {
      emailPromises.push(
        sendEmail(
          data.email,
          'Welcome to X4ET Provider Network',
          getProviderThankYouEmail(data),
          env
        ).catch(err => {
          console.error('User email failed:', err)
          return false
        })
      )
    }

    emailPromises.push(
      sendEmail(
        adminEmail,
        `New ${formType === 'buyer' ? 'Buyer' : 'Provider'} Registration - ${data.name} (${data.company})`,
        getAdminNotificationEmail(formType, data),
        env
      ).catch(err => {
        console.error('Admin email failed:', err)
        return false
      })
    )

    // Send emails in background - don't wait
    Promise.all(emailPromises).then(results => {
      console.log(`✉️  Email results: User=${results[0]}, Admin=${results[1]}`)
    })

    // Return immediately without waiting for emails
    return c.json({
      success: true,
      message: 'Form submitted successfully. Emails are being sent.',
      emailsQueued: true,
      data: {
        formType,
        name: data.name,
        email: data.email,
        company: data.company
      }
    })
  } catch (error) {
    console.error('Form submission error:', error)
    return c.json({ success: false, error: 'Internal server error' }, 500)
  }
})

const port = parseInt(process.env.PORT || '3001')
console.log(`🚀 Backend server starting on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
