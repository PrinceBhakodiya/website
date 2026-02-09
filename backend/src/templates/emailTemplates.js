
/**
 * Email Templates for X4ET Platform
 * Separated from business logic for better maintainability
 */

// Buyer registration confirmation email
export function getBuyerThankYouEmail(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; background: #f9fafb; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); padding: 40px 30px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 28px; font-weight: 700; }
        .content { padding: 40px 30px; }
        .greeting { font-size: 20px; font-weight: 600; color: #1f2937; margin-bottom: 20px; }
        .message { color: #4b5563; margin-bottom: 30px; line-height: 1.8; }
        .info-box { background: #f0f9ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 30px 0; border-radius: 8px; }
        .info-box h3 { margin-top: 0; color: #1e40af; font-size: 16px; }
        .info-box p { margin: 8px 0; color: #1f2937; }
        .next-steps { background: #f9fafb; padding: 25px; border-radius: 8px; margin: 30px 0; }
        .next-steps h3 { margin-top: 0; color: #1f2937; font-size: 18px; }
        .next-steps ul { margin: 10px 0; padding-left: 20px; }
        .next-steps li { margin: 10px 0; color: #4b5563; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
        .footer { background: #1f2937; color: #9ca3af; padding: 30px; text-align: center; font-size: 14px; }
        .footer a { color: #60a5fa; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 Welcome to X4ET</h1>
        </div>
        <div class="content">
          <p class="greeting">Hi ${data.name},</p>
          <p class="message">
            Thank you for registering with X4ET as a <strong>Technology Buyer</strong>! We're excited to help you discover and implement cutting-edge industrial technologies.
          </p>

          <div class="info-box">
            <h3>📋 Your Registration Details</h3>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Industry:</strong> ${data.industry}</p>
            <p><strong>Technology Interest:</strong> ${data.technology}</p>
            <p><strong>Project Stage:</strong> ${data.stage}</p>
            <p><strong>Budget Range:</strong> ${data.budget}</p>
          </div>

          <div class="next-steps">
            <h3>What Happens Next?</h3>
            <ul>
              <li><strong>Within 24 hours:</strong> Our team will review your requirements and prepare a customized list of verified technology providers.</li>
              <li><strong>Within 48 hours:</strong> You'll receive a detailed proposal with recommended solutions tailored to your needs.</li>
              <li><strong>Ongoing:</strong> Your dedicated account manager will reach out to schedule a consultation call.</li>
            </ul>
          </div>

          <center>
            <a href="https://x4et.com" class="cta-button">Explore Solutions</a>
          </center>
        </div>
      </div>
    </body>
    </html>
  `
}

// Provider registration confirmation email
export function getProviderThankYouEmail(data) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
      </style>
    </head>
    <body>
      <h2>Welcome to X4ET, ${data.name}!</h2>
      <p>Thank you for joining as a Technology Provider.</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Category:</strong> ${data.category}</p>
    </body>
    </html>
  `
}

// Admin notification email
export function getAdminNotificationEmail(formType, data) {
  const isBuyer = formType === 'buyer'

  return `
    <!DOCTYPE html>
    <html>
    <body>
      <h2>New ${isBuyer ? 'Buyer' : 'Provider'} Registration</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Company:</strong> ${data.company}</p>
      <p><strong>Submitted at:</strong> ${new Date().toISOString()}</p>
    </body>
    </html>
  `
}
