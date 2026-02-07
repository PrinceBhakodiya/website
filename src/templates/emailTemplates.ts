/**
 * Email Templates for X4ET Platform
 * Separated from business logic for better maintainability
 */

// Buyer registration confirmation email
export function getBuyerThankYouEmail(data: any): string {
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

          <p class="message">
            In the meantime, feel free to explore our platform and learn more about our 1000+ verified technology providers across 14 categories.
          </p>

          <center>
            <a href="https://x4et.com" class="cta-button">Explore Solutions</a>
          </center>

          <p class="message" style="margin-top: 30px;">
            Questions? Reply to this email or contact us at <a href="mailto:support@x4et.com" style="color: #3b82f6;">support@x4et.com</a>
          </p>
        </div>
        <div class="footer">
          <p><strong>X4ET - Exchange for Emerging Technologies</strong></p>
          <p>Connecting enterprises with verified AI, IoT, robotics, and automation providers</p>
          <p style="margin-top: 15px;">
            <a href="https://x4et.com">Website</a> |
            <a href="https://x4et.com/about">About</a> |
            <a href="https://x4et.com/contact">Contact</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Provider registration confirmation email
export function getProviderThankYouEmail(data: any): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; background: #f9fafb; margin: 0; padding: 0; }
        .container { max-width: 600px; margin: 40px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%); padding: 40px 30px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 28px; font-weight: 700; }
        .content { padding: 40px 30px; }
        .greeting { font-size: 20px; font-weight: 600; color: #1f2937; margin-bottom: 20px; }
        .message { color: #4b5563; margin-bottom: 30px; line-height: 1.8; }
        .info-box { background: #faf5ff; border-left: 4px solid #8b5cf6; padding: 20px; margin: 30px 0; border-radius: 8px; }
        .info-box h3 { margin-top: 0; color: #6b21a8; font-size: 16px; }
        .info-box p { margin: 8px 0; color: #1f2937; }
        .next-steps { background: #f9fafb; padding: 25px; border-radius: 8px; margin: 30px 0; }
        .next-steps h3 { margin-top: 0; color: #1f2937; font-size: 18px; }
        .next-steps ul { margin: 10px 0; padding-left: 20px; }
        .next-steps li { margin: 10px 0; color: #4b5563; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%); color: white; padding: 14px 32px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
        .footer { background: #1f2937; color: #9ca3af; padding: 30px; text-align: center; font-size: 14px; }
        .footer a { color: #c084fc; text-decoration: none; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🎉 Welcome to X4ET Network</h1>
        </div>
        <div class="content">
          <p class="greeting">Hi ${data.name},</p>
          <p class="message">
            Welcome aboard! Thank you for joining X4ET as a <strong>Technology Provider</strong>. We're thrilled to help you connect with enterprise buyers actively seeking innovative solutions like yours.
          </p>

          <div class="info-box">
            <h3>🏢 Your Company Profile</h3>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Provider Type:</strong> ${data.type}</p>
            <p><strong>Technology Category:</strong> ${data.category}</p>
            <p><strong>Target Industries:</strong> ${data.industries}</p>
            <p><strong>Geographic Coverage:</strong> ${data.region}</p>
          </div>

          <div class="next-steps">
            <h3>Your Onboarding Journey</h3>
            <ul>
              <li><strong>Step 1 (24 hours):</strong> Our verification team will review your company profile and credentials.</li>
              <li><strong>Step 2 (48 hours):</strong> You'll receive access to our provider portal with current buyer opportunities.</li>
              <li><strong>Step 3 (Week 1):</strong> Schedule your onboarding call to discuss GTM strategy and marketing support.</li>
              <li><strong>Ongoing:</strong> Get matched with qualified leads based on your solutions and expertise.</li>
            </ul>
          </div>

          <p class="message">
            Our network includes Fortune 500 companies and government buyers from oil & gas, mining, power generation, and manufacturing sectors actively looking for solutions like yours.
          </p>

          <center>
            <a href="https://x4et.com/provider-portal" class="cta-button">Access Provider Portal</a>
          </center>

          <p class="message" style="margin-top: 30px;">
            Questions about the onboarding process? Contact your partner success manager at <a href="mailto:partners@x4et.com" style="color: #8b5cf6;">partners@x4et.com</a>
          </p>
        </div>
        <div class="footer">
          <p><strong>X4ET - Exchange for Emerging Technologies</strong></p>
          <p>Your gateway to enterprise buyers seeking cutting-edge industrial technologies</p>
          <p style="margin-top: 15px;">
            <a href="https://x4et.com">Website</a> |
            <a href="https://x4et.com/provider-resources">Resources</a> |
            <a href="https://x4et.com/partner-support">Support</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Admin notification email
export function getAdminNotificationEmail(formType: string, data: any): string {
  const isBuyer = formType === 'buyer'
  const summaryFields = isBuyer ? `
    <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Company:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.company}</td></tr>
    <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Industry:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.industry}</td></tr>
    <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Technology:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.technology}</td></tr>
    <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Budget:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.budget}</td></tr>
    <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Stage:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.stage}</td></tr>
    <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Description:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.description}</td></tr>
  ` : `
    <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Company:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.company}</td></tr>
    <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Website:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><a href="${data.website}">${data.website}</a></td></tr>
    <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Provider Type:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.type}</td></tr>
    <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Category:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.category}</td></tr>
    <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Industries:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.industries}</td></tr>
    <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Region:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.region}</td></tr>
    <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Services:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.services}</td></tr>
  `

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #1f2937; background: #f9fafb; margin: 0; padding: 0; }
        .container { max-width: 700px; margin: 40px auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .header { background: linear-gradient(135deg, #10b981 0%, #059669 100%); padding: 30px; text-align: center; }
        .header h1 { color: white; margin: 0; font-size: 24px; font-weight: 700; }
        .badge { display: inline-block; background: rgba(255,255,255,0.2); color: white; padding: 6px 12px; border-radius: 20px; font-size: 12px; margin-top: 10px; }
        .content { padding: 40px 30px; }
        .alert { background: #fef3c7; border-left: 4px solid #f59e0b; padding: 15px; margin-bottom: 25px; border-radius: 8px; }
        .alert strong { color: #92400e; }
        .data-table { width: 100%; border-collapse: collapse; margin: 25px 0; background: #f9fafb; border-radius: 8px; overflow: hidden; }
        .data-table td { padding: 10px; border-bottom: 1px solid #e5e7eb; }
        .footer { background: #1f2937; color: #9ca3af; padding: 20px 30px; text-align: center; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>📥 New ${isBuyer ? 'Buyer' : 'Provider'} Registration</h1>
          <span class="badge">Action Required</span>
        </div>
        <div class="content">
          <div class="alert">
            <strong>⚡ New submission received!</strong> Please review and follow up within 24 hours.
          </div>

          <h2 style="color: #1f2937; margin-bottom: 20px;">Contact Information</h2>
          <table class="data-table">
            <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Name:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.name}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Phone:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.phone}</td></tr>
            <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Job Title:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.title || 'Not provided'}</td></tr>
          </table>

          <h2 style="color: #1f2937; margin: 30px 0 20px 0;">${isBuyer ? 'Project' : 'Company'} Details</h2>
          <table class="data-table">
            ${summaryFields}
          </table>

          <div style="margin-top: 30px; padding: 20px; background: #eff6ff; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #1e40af;">Recommended Actions:</h3>
            <ul style="color: #1f2937; margin: 10px 0;">
              <li>Review the ${isBuyer ? 'buyer' : 'provider'} information for completeness and quality</li>
              <li>Add to CRM and assign to appropriate team member</li>
              <li>Schedule follow-up call within 24-48 hours</li>
              ${isBuyer ? '<li>Prepare customized solution recommendations</li>' : '<li>Initiate verification and onboarding process</li>'}
            </ul>
          </div>

          <p style="margin-top: 25px; color: #6b7280; font-size: 14px;">
            <strong>Timestamp:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'UTC' })} UTC
          </p>
        </div>
        <div class="footer">
          <p><strong>X4ET Admin Dashboard</strong></p>
          <p>This is an automated notification from your registration system</p>
        </div>
      </div>
    </body>
    </html>
  `
}
