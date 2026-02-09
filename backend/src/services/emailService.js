import nodemailer from 'nodemailer'

/**
 * Email Service using Nodemailer
 * Supports SMTP, Gmail, and other email providers
 */
export class EmailService {
  constructor(config) {
    this.config = config

    this.transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure, // true for 465, false for other ports
      auth: {
        user: config.auth.user,
        pass: config.auth.pass,
      },
    })
  }

  /**
   * Send a single email with timeout
   */
  async sendEmail(options, timeoutMs = 10000) {
    try {
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Email timeout')), timeoutMs)
      })

      const info = await Promise.race([
        this.transporter.sendMail({
          from: `"${this.config.from.name}" <${this.config.from.email}>`,
          to: options.to,
          subject: options.subject,
          html: options.html,
          text: options.text || '',
        }),
        timeoutPromise,
      ])

      console.log('📧 Email sent:', info.messageId)
      return true
    } catch (error) {
      console.error('❌ Email sending failed:', error)
      return false
    }
  }

  /**
   * Send multiple emails (with delay to avoid rate limiting)
   */
  async sendBulkEmails(emails, delayMs = 100) {
    let success = 0
    let failed = 0

    for (const email of emails) {
      const result = await this.sendEmail(email)
      if (result) success++
      else failed++

      if (delayMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, delayMs))
      }
    }

    return { success, failed }
  }

  /**
   * Verify SMTP connection
   */
  async verifyConnection() {
    try {
      await this.transporter.verify()
      console.log('✅ SMTP connection verified')
      return true
    } catch (error) {
      console.error('❌ SMTP verification failed:', error)
      return false
    }
  }

  /**
   * Close transporter
   */
  close() {
    this.transporter.close()
  }
}

/**
 * Factory function to create EmailService from env vars
 */
export function createEmailService(env) {
  const config = {
    host: env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(env.SMTP_PORT || 587),
    secure: env.SMTP_SECURE === 'true', // true for 465
    auth: {
      user: env.SMTP_USER || '',
      pass: env.SMTP_PASS || '',
    },
    from: {
      name: env.EMAIL_FROM_NAME || 'X4ET Platform',
      email: env.EMAIL_FROM_ADDRESS || 'noreply@x4et.com',
    },
  }

  return new EmailService(config)
}

/**
 * Quick send helper (fire-and-forget friendly)
 */
export async function sendEmail(to, subject, html, env) {
  const emailService = createEmailService(env)
  const result = await emailService.sendEmail({ to, subject, html })
  emailService.close()
  return result
}
