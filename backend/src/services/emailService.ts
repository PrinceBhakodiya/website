import nodemailer from 'nodemailer'

// Email configuration interface
export interface EmailConfig {
  host: string
  port: number
  secure: boolean
  auth: {
    user: string
    pass: string
  }
  from: {
    name: string
    email: string
  }
}

// Email sending options interface
export interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
}

/**
 * Email Service using Nodemailer
 * Supports SMTP, Gmail, and other email providers
 */
export class EmailService {
  private transporter: nodemailer.Transporter
  private config: EmailConfig

  constructor(config: EmailConfig) {
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
  async sendEmail(options: EmailOptions, timeoutMs: number = 10000): Promise<boolean> {
    try {
      // Create timeout promise
      const timeoutPromise = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error('Email timeout')), timeoutMs)
      })

      // Race between email send and timeout
      const info = await Promise.race([
        this.transporter.sendMail({
          from: `"${this.config.from.name}" <${this.config.from.email}>`,
          to: options.to,
          subject: options.subject,
          html: options.html,
          text: options.text || '', // Plain text fallback
        }),
        timeoutPromise
      ])

      console.log('Email sent successfully:', info.messageId)
      return true
    } catch (error) {
      console.error('Email sending failed:', error)
      return false
    }
  }

  /**
   * Send multiple emails (with delay to avoid rate limiting)
   */
  async sendBulkEmails(
    emails: EmailOptions[],
    delayMs: number = 100
  ): Promise<{ success: number; failed: number }> {
    let success = 0
    let failed = 0

    for (const email of emails) {
      const result = await this.sendEmail(email)
      if (result) {
        success++
      } else {
        failed++
      }
      // Small delay between emails to avoid rate limiting
      if (delayMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, delayMs))
      }
    }

    return { success, failed }
  }

  /**
   * Verify SMTP connection
   */
  async verifyConnection(): Promise<boolean> {
    try {
      await this.transporter.verify()
      console.log('SMTP connection verified successfully')
      return true
    } catch (error) {
      console.error('SMTP connection verification failed:', error)
      return false
    }
  }

  /**
   * Close the transporter connection
   */
  close(): void {
    this.transporter.close()
  }
}

/**
 * Factory function to create EmailService with environment variables
 */
export function createEmailService(env: any): EmailService {
  const config: EmailConfig = {
    host: env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(env.SMTP_PORT || '587', 10),
    secure: env.SMTP_SECURE === 'true', // true for 465, false for 587
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
 * Quick send function for simple use cases
 */
export async function sendEmail(
  to: string,
  subject: string,
  html: string,
  env: any
): Promise<boolean> {
  const emailService = createEmailService(env)
  const result = await emailService.sendEmail({ to, subject, html })
  emailService.close()
  return result
}
