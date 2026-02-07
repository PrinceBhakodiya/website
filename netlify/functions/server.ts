import { Handler } from '@netlify/functions'
import app from '../../dist/index.js'

export const handler: Handler = async (event, context) => {
  try {
    const request = new Request(event.rawUrl, {
      method: event.httpMethod,
      headers: new Headers(event.headers as Record<string, string>),
      body: event.body || undefined,
    })

    // Create a mock environment for Netlify
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

    // Add env to context
    const ctx = {
      env,
      executionCtx: {
        waitUntil: () => {},
        passThroughOnException: () => {},
      },
    }

    const response = await app.fetch(request, env, ctx)

    return {
      statusCode: response.status,
      headers: Object.fromEntries(response.headers.entries()),
      body: await response.text(),
    }
  } catch (error) {
    console.error('Function error:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    }
  }
}
