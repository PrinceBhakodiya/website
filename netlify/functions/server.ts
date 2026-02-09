import { Handler } from '@netlify/functions'
import { Hono } from 'hono'
import { sendEmail } from '../../src/services/emailService.js'
import {
  getBuyerThankYouEmail,
  getProviderThankYouEmail,
  getAdminNotificationEmail,
} from '../../src/templates/emailTemplates.js'
import { renderer } from '../../src/renderer.js'

// Create Hono app instance
const app = new Hono()

app.use(renderer)

// API endpoint for form submissions
app.post('/api/submit-form', async (c) => {
  try {
    const body = await c.req.json()
    const { formType, data } = body

    if (!formType || !data) {
      return c.json({ success: false, error: 'Missing required fields' }, 400)
    }

    console.log(`📝 New ${formType} registration:`, {
      name: data.name,
      email: data.email,
      company: data.company,
      timestamp: new Date().toISOString()
    })

    const env = c.env as any

    const isEmailConfigured = env.SMTP_USER && env.SMTP_PASS && env.SMTP_HOST

    if (!isEmailConfigured) {
      console.warn('⚠️  Email not configured. Skipping email sending.')
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

    const adminEmail = env.ADMIN_EMAIL || 'admin@x4et.com'
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

    Promise.all(emailPromises).then(results => {
      console.log(`✉️  Email results: User=${results[0]}, Admin=${results[1]}`)
    })

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

app.get('*', (c) => {
  // Return the main HTML page
  return c.render(<div>Main content here</div>)
})

export const handler: Handler = async (event, context) => {
  try {
    const url = event.rawUrl || `https://${event.headers.host}${event.path}`

    const request = new Request(url, {
      method: event.httpMethod,
      headers: new Headers(event.headers as Record<string, string>),
      body: event.body ? (event.isBase64Encoded ? Buffer.from(event.body, 'base64').toString() : event.body) : undefined,
    })

    // Create environment object for Netlify
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

    const response = await app.fetch(request, env)

    // Convert Headers to plain object
    const headers: Record<string, string> = {}
    response.headers.forEach((value, key) => {
      headers[key] = value
    })

    return {
      statusCode: response.status,
      headers,
      body: await response.text(),
    }
  } catch (error) {
    console.error('Function error:', error)
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        error: 'Internal Server Error',
        message: error instanceof Error ? error.message : 'Unknown error'
      }),
    }
  }
}
