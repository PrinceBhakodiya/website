import { Handler } from '@netlify/functions'
import app from './app.js'

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
      SMTP_FROM: process.env.SMTP_FROM,
      ADMIN_EMAIL: process.env.ADMIN_EMAIL,
      EMAIL_FROM_NAME: process.env.EMAIL_FROM_NAME,
      EMAIL_FROM_ADDRESS: process.env.EMAIL_FROM_ADDRESS,
    }

    // Add execution context
    const ctx = {
      env,
      executionCtx: {
        waitUntil: (promise: Promise<any>) => promise,
        passThroughOnException: () => {},
      },
    }

    const response = await app.default.fetch(request, env, ctx)

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
