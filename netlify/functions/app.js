var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
import { jsxs, jsx } from "hono/jsx/jsx-runtime";
import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { serveStatic } from "hono/cloudflare-workers";
import nodemailer from "nodemailer";
const renderer = jsxRenderer(({ children }) => {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charset: "UTF-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "X4ET - Exchange for Emerging Technologies. Connect with 1000+ verified industrial AI, IoT, and automation providers." }),
      /* @__PURE__ */ jsx("title", { children: "X4ET - Exchange for Emerging Technologies" }),
      /* @__PURE__ */ jsx("script", { src: "https://cdn.tailwindcss.com" }),
      /* @__PURE__ */ jsx("link", { href: "https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css", rel: "stylesheet" }),
      /* @__PURE__ */ jsx("link", { href: "/static/style.css", rel: "stylesheet" }),
      /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
      /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }),
      /* @__PURE__ */ jsx("link", { href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap", rel: "stylesheet" })
    ] }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx("nav", { className: "nav", id: "navbar", children: /* @__PURE__ */ jsxs("div", { className: "nav-container", children: [
        /* @__PURE__ */ jsxs("a", { href: "#home", className: "nav-logo", children: [
          /* @__PURE__ */ jsx("span", { className: "logo-icon", children: "⚡" }),
          /* @__PURE__ */ jsx("span", { className: "logo-text", children: "X4ET" })
        ] }),
        /* @__PURE__ */ jsxs("ul", { className: "nav-menu", children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#home", className: "nav-link", children: "Home" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#challenge", className: "nav-link", children: "Challenge" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#solutions", className: "nav-link", children: "Solutions" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#categories", className: "nav-link", children: "Categories" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#signup", className: "btn btn-nav", children: "Get Started" }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("main", { children }),
      /* @__PURE__ */ jsx("footer", { className: "footer", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsxs("div", { className: "footer-grid", children: [
          /* @__PURE__ */ jsxs("div", { className: "footer-col", children: [
            /* @__PURE__ */ jsxs("h4", { className: "footer-title", children: [
              /* @__PURE__ */ jsx("span", { className: "logo-icon", children: "⚡" }),
              " X4ET"
            ] }),
            /* @__PURE__ */ jsx("p", { className: "footer-text", children: "The leading marketplace for industrial AI, IoT, robotics, and automation solutions." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "footer-col", children: [
            /* @__PURE__ */ jsx("h4", { className: "footer-heading", children: "Solutions" }),
            /* @__PURE__ */ jsxs("ul", { className: "footer-links", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#buyers", children: "For Buyers" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#providers", children: "For Providers" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#categories", children: "Categories" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#use-cases", children: "Use Cases" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "footer-col", children: [
            /* @__PURE__ */ jsx("h4", { className: "footer-heading", children: "Company" }),
            /* @__PURE__ */ jsxs("ul", { className: "footer-links", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#about", children: "About Us" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#contact", children: "Contact" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#careers", children: "Careers" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#blog", children: "Blog" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "footer-col", children: [
            /* @__PURE__ */ jsx("h4", { className: "footer-heading", children: "Resources" }),
            /* @__PURE__ */ jsxs("ul", { className: "footer-links", children: [
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#docs", children: "Documentation" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#support", children: "Support" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#privacy", children: "Privacy Policy" }) }),
              /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "#terms", children: "Terms of Service" }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "footer-bottom", children: /* @__PURE__ */ jsx("p", { children: "© 2026 X4ET. All rights reserved." }) })
      ] }) }),
      /* @__PURE__ */ jsx("script", { src: "/static/app.js" })
    ] })
  ] });
});
class EmailService {
  constructor(config) {
    __publicField(this, "transporter");
    __publicField(this, "config");
    this.config = config;
    this.transporter = nodemailer.createTransport({
      host: config.host,
      port: config.port,
      secure: config.secure,
      // true for 465, false for other ports
      auth: {
        user: config.auth.user,
        pass: config.auth.pass
      }
    });
  }
  /**
   * Send a single email with timeout
   */
  async sendEmail(options, timeoutMs = 1e4) {
    try {
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Email timeout")), timeoutMs);
      });
      const info = await Promise.race([
        this.transporter.sendMail({
          from: `"${this.config.from.name}" <${this.config.from.email}>`,
          to: options.to,
          subject: options.subject,
          html: options.html,
          text: options.text || ""
          // Plain text fallback
        }),
        timeoutPromise
      ]);
      console.log("Email sent successfully:", info.messageId);
      return true;
    } catch (error) {
      console.error("Email sending failed:", error);
      return false;
    }
  }
  /**
   * Send multiple emails (with delay to avoid rate limiting)
   */
  async sendBulkEmails(emails, delayMs = 100) {
    let success = 0;
    let failed = 0;
    for (const email of emails) {
      const result = await this.sendEmail(email);
      if (result) {
        success++;
      } else {
        failed++;
      }
      if (delayMs > 0) {
        await new Promise((resolve) => setTimeout(resolve, delayMs));
      }
    }
    return { success, failed };
  }
  /**
   * Verify SMTP connection
   */
  async verifyConnection() {
    try {
      await this.transporter.verify();
      console.log("SMTP connection verified successfully");
      return true;
    } catch (error) {
      console.error("SMTP connection verification failed:", error);
      return false;
    }
  }
  /**
   * Close the transporter connection
   */
  close() {
    this.transporter.close();
  }
}
function createEmailService(env) {
  const config = {
    host: env.SMTP_HOST || "smtp.gmail.com",
    port: parseInt(env.SMTP_PORT || "587", 10),
    secure: env.SMTP_SECURE === "true",
    // true for 465, false for 587
    auth: {
      user: env.SMTP_USER || "",
      pass: env.SMTP_PASS || ""
    },
    from: {
      name: env.EMAIL_FROM_NAME || "X4ET Platform",
      email: env.EMAIL_FROM_ADDRESS || "noreply@x4et.com"
    }
  };
  return new EmailService(config);
}
async function sendEmail(to, subject, html, env) {
  const emailService = createEmailService(env);
  const result = await emailService.sendEmail({ to, subject, html });
  emailService.close();
  return result;
}
function getBuyerThankYouEmail(data) {
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
  `;
}
function getProviderThankYouEmail(data) {
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
  `;
}
function getAdminNotificationEmail(formType, data) {
  const isBuyer = formType === "buyer";
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
  `;
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
          <h1>📥 New ${isBuyer ? "Buyer" : "Provider"} Registration</h1>
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
            <tr><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;"><strong>Job Title:</strong></td><td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${data.title || "Not provided"}</td></tr>
          </table>

          <h2 style="color: #1f2937; margin: 30px 0 20px 0;">${isBuyer ? "Project" : "Company"} Details</h2>
          <table class="data-table">
            ${summaryFields}
          </table>

          <div style="margin-top: 30px; padding: 20px; background: #eff6ff; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #1e40af;">Recommended Actions:</h3>
            <ul style="color: #1f2937; margin: 10px 0;">
              <li>Review the ${isBuyer ? "buyer" : "provider"} information for completeness and quality</li>
              <li>Add to CRM and assign to appropriate team member</li>
              <li>Schedule follow-up call within 24-48 hours</li>
              ${isBuyer ? "<li>Prepare customized solution recommendations</li>" : "<li>Initiate verification and onboarding process</li>"}
            </ul>
          </div>

          <p style="margin-top: 25px; color: #6b7280; font-size: 14px;">
            <strong>Timestamp:</strong> ${(/* @__PURE__ */ new Date()).toLocaleString("en-US", { timeZone: "UTC" })} UTC
          </p>
        </div>
        <div class="footer">
          <p><strong>X4ET Admin Dashboard</strong></p>
          <p>This is an automated notification from your registration system</p>
        </div>
      </div>
    </body>
    </html>
  `;
}
const app = new Hono();
app.use("/static/*", serveStatic({ root: "./public" }));
app.use(renderer);
app.post("/api/submit-form", async (c) => {
  try {
    const body = await c.req.json();
    const { formType, data } = body;
    if (!formType || !data) {
      return c.json({ success: false, error: "Missing required fields" }, 400);
    }
    console.log(`📝 New ${formType} registration:`, {
      name: data.name,
      email: data.email,
      company: data.company,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
    const env = c.env;
    const isEmailConfigured = env.SMTP_USER && env.SMTP_PASS && env.SMTP_HOST;
    if (!isEmailConfigured) {
      console.warn("⚠️  Email not configured. Skipping email sending.");
      console.log("💡 To enable emails, configure SMTP settings in .env file");
      return c.json({
        success: true,
        message: "Form submitted successfully (emails not configured)",
        emailsSkipped: true,
        data: {
          formType,
          name: data.name,
          email: data.email,
          company: data.company
        }
      });
    }
    const adminEmail = env.ADMIN_EMAIL || "admin@x4et.com";
    const emailPromises = [];
    if (formType === "buyer") {
      emailPromises.push(
        sendEmail(
          data.email,
          "Welcome to X4ET - Your Registration is Confirmed",
          getBuyerThankYouEmail(data),
          env
        ).catch((err) => {
          console.error("User email failed:", err);
          return false;
        })
      );
    } else if (formType === "provider") {
      emailPromises.push(
        sendEmail(
          data.email,
          "Welcome to X4ET Provider Network",
          getProviderThankYouEmail(data),
          env
        ).catch((err) => {
          console.error("User email failed:", err);
          return false;
        })
      );
    }
    emailPromises.push(
      sendEmail(
        adminEmail,
        `New ${formType === "buyer" ? "Buyer" : "Provider"} Registration - ${data.name} (${data.company})`,
        getAdminNotificationEmail(formType, data),
        env
      ).catch((err) => {
        console.error("Admin email failed:", err);
        return false;
      })
    );
    Promise.all(emailPromises).then((results) => {
      console.log(`✉️  Email results: User=${results[0]}, Admin=${results[1]}`);
    });
    return c.json({
      success: true,
      message: "Form submitted successfully. Emails are being sent.",
      emailsQueued: true,
      data: {
        formType,
        name: data.name,
        email: data.email,
        company: data.company
      }
    });
  } catch (error) {
    console.error("Form submission error:", error);
    return c.json({ success: false, error: "Internal server error" }, 500);
  }
});
app.get("/", (c) => {
  return c.render(
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsxs("section", { id: "home", className: "hero-section", children: [
        /* @__PURE__ */ jsx("div", { className: "hero-bg" }),
        /* @__PURE__ */ jsxs("div", { className: "hero-content", children: [
          /* @__PURE__ */ jsx("div", { className: "hero-badge", children: /* @__PURE__ */ jsx("span", { className: "badge-text", children: "🚀 Trusted by 1000+ Enterprises" }) }),
          /* @__PURE__ */ jsxs("h1", { className: "hero-title", children: [
            "THE INDUSTRIAL WORLD",
            /* @__PURE__ */ jsx("br", {}),
            /* @__PURE__ */ jsx("span", { className: "gradient-text", children: "IS TRANSFORMING" })
          ] }),
          /* @__PURE__ */ jsx("p", { className: "hero-subtitle", children: "Access the world's most comprehensive marketplace for industrial AI, IoT, robotics, and automation solutions. Verified providers. Proven results. Zero guesswork." }),
          /* @__PURE__ */ jsxs("div", { className: "hero-cta", children: [
            /* @__PURE__ */ jsx("a", { href: "#signup", className: "btn btn-primary", children: "Find Solutions Now" }),
            /* @__PURE__ */ jsx("a", { href: "#about", className: "btn btn-secondary", children: "Learn More" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "hero-stats", children: [
            /* @__PURE__ */ jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ jsx("div", { className: "stat-number", children: "14+" }),
              /* @__PURE__ */ jsx("div", { className: "stat-label", children: "Technology Domains" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ jsx("div", { className: "stat-number", children: "116+" }),
              /* @__PURE__ */ jsx("div", { className: "stat-label", children: "Solution Categories" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "stat-item", children: [
              /* @__PURE__ */ jsx("div", { className: "stat-number", children: "1000+" }),
              /* @__PURE__ */ jsx("div", { className: "stat-label", children: "Verified Providers" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx("section", { className: "trust-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("p", { className: "trust-title", children: "Trusted by industry leaders in Oil & Gas, Mining, Power & Manufacturing" }),
        /* @__PURE__ */ jsxs("div", { className: "trust-logos", children: [
          /* @__PURE__ */ jsx("div", { className: "trust-logo", children: "Shell" }),
          /* @__PURE__ */ jsx("div", { className: "trust-logo", children: "BP" }),
          /* @__PURE__ */ jsx("div", { className: "trust-logo", children: "Rio Tinto" }),
          /* @__PURE__ */ jsx("div", { className: "trust-logo", children: "GE Power" }),
          /* @__PURE__ */ jsx("div", { className: "trust-logo", children: "Siemens" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "challenge", className: "problem-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("h2", { className: "section-title", children: "Why Technology Adoption Stalls" }),
        /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "The cost of getting it wrong is too high—and the traditional procurement process isn't built for emerging tech" }),
        /* @__PURE__ */ jsxs("div", { className: "problem-grid", children: [
          /* @__PURE__ */ jsxs("div", { className: "problem-card", children: [
            /* @__PURE__ */ jsx("div", { className: "problem-stat", children: "70%" }),
            /* @__PURE__ */ jsx("h3", { className: "problem-title", children: "Projects Fail" }),
            /* @__PURE__ */ jsx("p", { className: "problem-text", children: "AI/IoT projects fail due to poor vendor selection and unclear requirements" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "problem-card", children: [
            /* @__PURE__ */ jsx("div", { className: "problem-stat", children: "12-18" }),
            /* @__PURE__ */ jsx("h3", { className: "problem-title", children: "Months Wasted" }),
            /* @__PURE__ */ jsx("p", { className: "problem-text", children: "Average procurement cycle while competitors pull ahead with faster decisions" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "problem-card", children: [
            /* @__PURE__ */ jsx("div", { className: "problem-stat", children: "$2.4M" }),
            /* @__PURE__ */ jsx("h3", { className: "problem-title", children: "Average Loss" }),
            /* @__PURE__ */ jsx("p", { className: "problem-text", children: "Cost of failed pilots that drain budgets and erode executive confidence" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "problem-card", children: [
            /* @__PURE__ */ jsx("div", { className: "problem-stat", children: "90%" }),
            /* @__PURE__ */ jsx("h3", { className: "problem-title", children: "Can't Find Vendors" }),
            /* @__PURE__ */ jsx("p", { className: "problem-text", children: "Enterprises struggle to find verified providers with industry expertise" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "testimonials-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("h2", { className: "section-title", children: "What Our Customers Say" }),
        /* @__PURE__ */ jsxs("div", { className: "testimonials-grid", children: [
          /* @__PURE__ */ jsxs("div", { className: "testimonial-card", children: [
            /* @__PURE__ */ jsx("div", { className: "testimonial-content", children: /* @__PURE__ */ jsx("p", { className: "testimonial-text", children: '"X4ET helped us find the perfect AI vision system in just 2 weeks. Previously, this would have taken us 6 months. The pre-vetted providers saved us countless evaluation hours."' }) }),
            /* @__PURE__ */ jsx("div", { className: "testimonial-author", children: /* @__PURE__ */ jsxs("div", { className: "author-info", children: [
              /* @__PURE__ */ jsx("div", { className: "author-name", children: "Sarah Chen" }),
              /* @__PURE__ */ jsx("div", { className: "author-title", children: "VP of Innovation, Shell Energy" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "testimonial-card", children: [
            /* @__PURE__ */ jsx("div", { className: "testimonial-content", children: /* @__PURE__ */ jsx("p", { className: "testimonial-text", children: '"The platform understood our requirements the first time. No endless back-and-forth. We deployed predictive maintenance across 12 sites and saw 40% reduction in downtime."' }) }),
            /* @__PURE__ */ jsx("div", { className: "testimonial-author", children: /* @__PURE__ */ jsxs("div", { className: "author-info", children: [
              /* @__PURE__ */ jsx("div", { className: "author-name", children: "Michael Torres" }),
              /* @__PURE__ */ jsx("div", { className: "author-title", children: "Operations Director, Rio Tinto" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "testimonial-card", children: [
            /* @__PURE__ */ jsx("div", { className: "testimonial-content", children: /* @__PURE__ */ jsx("p", { className: "testimonial-text", children: '"X4ET connected us with Fortune 500 buyers actively looking for our solutions. We closed 3 deals in our first quarter—this platform changed our GTM strategy."' }) }),
            /* @__PURE__ */ jsx("div", { className: "testimonial-author", children: /* @__PURE__ */ jsxs("div", { className: "author-info", children: [
              /* @__PURE__ */ jsx("div", { className: "author-name", children: "David Kumar" }),
              /* @__PURE__ */ jsx("div", { className: "author-title", children: "CEO, VisionTech AI" })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "testimonial-card", children: [
            /* @__PURE__ */ jsx("div", { className: "testimonial-content", children: /* @__PURE__ */ jsx("p", { className: "testimonial-text", children: '"From pilot to production in 90 days. The expert consultation and implementation support made all the difference. Felt like having an experienced partner, not just a marketplace."' }) }),
            /* @__PURE__ */ jsx("div", { className: "testimonial-author", children: /* @__PURE__ */ jsxs("div", { className: "author-info", children: [
              /* @__PURE__ */ jsx("div", { className: "author-name", children: "Lisa Anderson" }),
              /* @__PURE__ */ jsx("div", { className: "author-title", children: "CTO, Manufacturing Corp" })
            ] }) })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "solutions", className: "solutions-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("h2", { className: "section-title", children: "There's a Better Way" }),
        /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "X4ET eliminates the guesswork and accelerates your success" }),
        /* @__PURE__ */ jsxs("div", { className: "solutions-grid", children: [
          /* @__PURE__ */ jsxs("div", { className: "solution-card", children: [
            /* @__PURE__ */ jsx("div", { className: "solution-icon", children: "🔍" }),
            /* @__PURE__ */ jsx("h3", { className: "solution-title", children: "FOR TECHNOLOGY BUYERS" }),
            /* @__PURE__ */ jsx("p", { className: "solution-text", children: "Access the world's most comprehensive catalog of industrial AI, IoT, robotics, and automation solutions. Vetted providers. Proven results. Zero guesswork." }),
            /* @__PURE__ */ jsxs("ul", { className: "solution-features", children: [
              /* @__PURE__ */ jsx("li", { children: "✓ Instant access to 1000+ verified technology providers" }),
              /* @__PURE__ */ jsx("li", { children: "✓ AI-powered matching for your specific requirements" }),
              /* @__PURE__ */ jsx("li", { children: "✓ Industry-specific solutions for oil & gas, mining, power, and manufacturing" }),
              /* @__PURE__ */ jsx("li", { children: "✓ Expert consultation and implementation support" })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "#signup", className: "btn btn-primary", children: "Find Solutions Now" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "solution-card", children: [
            /* @__PURE__ */ jsx("div", { className: "solution-icon", children: "🚀" }),
            /* @__PURE__ */ jsx("h3", { className: "solution-title", children: "FOR TECHNOLOGY PROVIDERS" }),
            /* @__PURE__ */ jsx("p", { className: "solution-text", children: "Connect with enterprise buyers actively seeking your solutions. Accelerate your market entry. Scale your impact globally." }),
            /* @__PURE__ */ jsxs("ul", { className: "solution-features", children: [
              /* @__PURE__ */ jsx("li", { children: "✓ Direct access to Fortune 500 and government buyers" }),
              /* @__PURE__ */ jsx("li", { children: "✓ Comprehensive GTM strategy and sales enablement" }),
              /* @__PURE__ */ jsx("li", { children: "✓ Marketing and positioning support to stand out" }),
              /* @__PURE__ */ jsx("li", { children: "✓ Partnership opportunities and ecosystem integration" })
            ] }),
            /* @__PURE__ */ jsx("a", { href: "#signup", className: "btn btn-secondary", children: "Join as Provider" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { className: "features-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("h2", { className: "section-title", children: "THE X4ET ADVANTAGE" }),
        /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "Three core services that transform how enterprises adopt emerging technologies" }),
        /* @__PURE__ */ jsxs("div", { className: "features-grid", children: [
          /* @__PURE__ */ jsxs("div", { className: "feature-card", children: [
            /* @__PURE__ */ jsx("div", { className: "feature-number", children: "01" }),
            /* @__PURE__ */ jsx("h3", { className: "feature-title", children: "DEMAND DISCOVERY" }),
            /* @__PURE__ */ jsx("p", { className: "feature-text", children: "We identify your technology needs, operational pain points, and innovation opportunities through deep industry analysis and stakeholder engagement." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "feature-card", children: [
            /* @__PURE__ */ jsx("div", { className: "feature-number", children: "02" }),
            /* @__PURE__ */ jsx("h3", { className: "feature-title", children: "SOLUTION MATCHING" }),
            /* @__PURE__ */ jsx("p", { className: "feature-text", children: "Our AI-powered platform connects you with the perfect-fit solutions from our network of 1000+ verified providers, saving months of evaluation time." })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "feature-card", children: [
            /* @__PURE__ */ jsx("div", { className: "feature-number", children: "03" }),
            /* @__PURE__ */ jsx("h3", { className: "feature-title", children: "GTM SUPPORT" }),
            /* @__PURE__ */ jsx("p", { className: "feature-text", children: "For technology providers, we deliver comprehensive go-to-market strategy, sales enablement, and partnership development to accelerate your growth." })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "categories", className: "categories-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsx("h2", { className: "section-title", children: "14 TECHNOLOGY CATEGORIES" }),
        /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "Comprehensive marketplace covering 116+ sub-categories across the entire industrial AI and emerging technology spectrum" }),
        /* @__PURE__ */ jsxs("div", { className: "categories-grid", children: [
          /* @__PURE__ */ jsxs("div", { className: "category-card", children: [
            /* @__PURE__ */ jsx("div", { className: "category-icon", children: "🤖" }),
            /* @__PURE__ */ jsx("h3", { className: "category-title", children: "AI Software" }),
            /* @__PURE__ */ jsx("p", { className: "category-desc", children: "Computer Vision, NLP, GenAI, Predictive Analytics" }),
            /* @__PURE__ */ jsx("div", { className: "category-count", children: "8 Sub-Categories" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "category-card", children: [
            /* @__PURE__ */ jsx("div", { className: "category-icon", children: "🔧" }),
            /* @__PURE__ */ jsx("h3", { className: "category-title", children: "AI Hardware" }),
            /* @__PURE__ */ jsx("p", { className: "category-desc", children: "AI Cameras, Edge Gateways, GPU Accelerators" }),
            /* @__PURE__ */ jsx("div", { className: "category-count", children: "5 Sub-Categories" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "category-card", children: [
            /* @__PURE__ */ jsx("div", { className: "category-icon", children: "📡" }),
            /* @__PURE__ */ jsx("h3", { className: "category-title", children: "IoT Devices & Sensors" }),
            /* @__PURE__ */ jsx("p", { className: "category-desc", children: "Temperature, Pressure, Vibration, Environmental" }),
            /* @__PURE__ */ jsx("div", { className: "category-count", children: "9 Sub-Categories" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "category-card", children: [
            /* @__PURE__ */ jsx("div", { className: "category-icon", children: "📹" }),
            /* @__PURE__ */ jsx("h3", { className: "category-title", children: "Video Analytics" }),
            /* @__PURE__ */ jsx("p", { className: "category-desc", children: "Surveillance, Quality Control, Safety Monitoring" }),
            /* @__PURE__ */ jsx("div", { className: "category-count", children: "10 Sub-Categories" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "category-card", children: [
            /* @__PURE__ */ jsx("div", { className: "category-icon", children: "🦾" }),
            /* @__PURE__ */ jsx("h3", { className: "category-title", children: "Robotics & Automation" }),
            /* @__PURE__ */ jsx("p", { className: "category-desc", children: "Industrial Robots, AGVs, Collaborative Robots" }),
            /* @__PURE__ */ jsx("div", { className: "category-count", children: "10 Sub-Categories" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "category-card", children: [
            /* @__PURE__ */ jsx("div", { className: "category-icon", children: "🚁" }),
            /* @__PURE__ */ jsx("h3", { className: "category-title", children: "Drones" }),
            /* @__PURE__ */ jsx("p", { className: "category-desc", children: "Aerial Inspection, Mapping, Security Systems" }),
            /* @__PURE__ */ jsx("div", { className: "category-count", children: "9 Sub-Categories" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "category-card", children: [
            /* @__PURE__ */ jsx("div", { className: "category-icon", children: "⚡" }),
            /* @__PURE__ */ jsx("h3", { className: "category-title", children: "Edge Computing" }),
            /* @__PURE__ */ jsx("p", { className: "category-desc", children: "Low-latency Processing, Offline AI, Edge Servers" }),
            /* @__PURE__ */ jsx("div", { className: "category-count", children: "8 Sub-Categories" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "category-card", children: [
            /* @__PURE__ */ jsx("div", { className: "category-icon", children: "👥" }),
            /* @__PURE__ */ jsx("h3", { className: "category-title", children: "Digital Twins" }),
            /* @__PURE__ */ jsx("p", { className: "category-desc", children: "Asset Replicas, Process Optimization, Testing" }),
            /* @__PURE__ */ jsx("div", { className: "category-count", children: "7 Sub-Categories" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx("section", { id: "signup", className: "signup-section", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsxs("div", { className: "signup-header", children: [
          /* @__PURE__ */ jsx("h2", { className: "section-title", children: "START YOUR JOURNEY" }),
          /* @__PURE__ */ jsx("p", { className: "section-subtitle", children: "Join 1000+ enterprises and technology providers transforming industrial operations. Get matched with the perfect solutions or connect with qualified buyers." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "form-tabs", children: [
          /* @__PURE__ */ jsxs("button", { className: "tab-button active", "data-tab": "buyer", children: [
            /* @__PURE__ */ jsx("span", { className: "tab-icon", children: "🔍" }),
            /* @__PURE__ */ jsx("span", { className: "tab-label", children: "Technology Buyer" })
          ] }),
          /* @__PURE__ */ jsxs("button", { className: "tab-button", "data-tab": "provider", children: [
            /* @__PURE__ */ jsx("span", { className: "tab-icon", children: "🚀" }),
            /* @__PURE__ */ jsx("span", { className: "tab-label", children: "Technology Provider" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "forms-container", children: [
          /* @__PURE__ */ jsx("div", { className: "form-content active", id: "buyer-content", children: /* @__PURE__ */ jsxs("form", { className: "registration-form", id: "buyer-form", children: [
            /* @__PURE__ */ jsxs("div", { className: "form-columns", children: [
              /* @__PURE__ */ jsxs("div", { className: "form-column", children: [
                /* @__PURE__ */ jsxs("div", { className: "form-section", children: [
                  /* @__PURE__ */ jsx("h4", { className: "section-heading", children: "Contact Information" }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "buyer-name", children: "Full Name *" }),
                    /* @__PURE__ */ jsx("input", { type: "text", id: "buyer-name", name: "name", required: true, placeholder: "John Doe" })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "buyer-email", children: "Email *" }),
                    /* @__PURE__ */ jsx("input", { type: "email", id: "buyer-email", name: "email", required: true, placeholder: "john@company.com" })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "buyer-phone", children: "Phone *" }),
                    /* @__PURE__ */ jsx("input", { type: "tel", id: "buyer-phone", name: "phone", required: true, placeholder: "+1 (555) 123-4567" })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "buyer-company", children: "Company Name *" }),
                    /* @__PURE__ */ jsx("input", { type: "text", id: "buyer-company", name: "company", required: true, placeholder: "Acme Corporation" })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "buyer-title", children: "Job Title" }),
                    /* @__PURE__ */ jsx("input", { type: "text", id: "buyer-title", name: "title", placeholder: "VP of Operations" })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "form-section", children: [
                  /* @__PURE__ */ jsx("h4", { className: "section-heading", children: "Organization Details" }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "buyer-org-type", children: "Organization Type *" }),
                    /* @__PURE__ */ jsxs("select", { id: "buyer-org-type", name: "orgType", required: true, children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Type" }),
                      /* @__PURE__ */ jsx("option", { value: "enterprise", children: "Enterprise (1000+ employees)" }),
                      /* @__PURE__ */ jsx("option", { value: "midsize", children: "Mid-size Company (100-999)" }),
                      /* @__PURE__ */ jsx("option", { value: "small", children: "Small Business (1-99)" }),
                      /* @__PURE__ */ jsx("option", { value: "government", children: "Government / Public Sector" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "buyer-industry", children: "Industry Sector *" }),
                    /* @__PURE__ */ jsxs("select", { id: "buyer-industry", name: "industry", required: true, children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Industry" }),
                      /* @__PURE__ */ jsx("option", { value: "oil-gas", children: "Oil & Gas" }),
                      /* @__PURE__ */ jsx("option", { value: "mining", children: "Mining" }),
                      /* @__PURE__ */ jsx("option", { value: "power", children: "Power Generation" }),
                      /* @__PURE__ */ jsx("option", { value: "manufacturing", children: "Manufacturing" }),
                      /* @__PURE__ */ jsx("option", { value: "utilities", children: "Utilities" }),
                      /* @__PURE__ */ jsx("option", { value: "other", children: "Other" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "buyer-size", children: "Company Size" }),
                    /* @__PURE__ */ jsxs("select", { id: "buyer-size", name: "size", children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Size" }),
                      /* @__PURE__ */ jsx("option", { value: "1-50", children: "1-50 employees" }),
                      /* @__PURE__ */ jsx("option", { value: "51-200", children: "51-200 employees" }),
                      /* @__PURE__ */ jsx("option", { value: "201-1000", children: "201-1000 employees" }),
                      /* @__PURE__ */ jsx("option", { value: "1001-5000", children: "1001-5000 employees" }),
                      /* @__PURE__ */ jsx("option", { value: "5000+", children: "5000+ employees" })
                    ] })
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-column", children: [
                /* @__PURE__ */ jsxs("div", { className: "form-section", children: [
                  /* @__PURE__ */ jsx("h4", { className: "section-heading", children: "Project Information" }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "buyer-stage", children: "Project Stage *" }),
                    /* @__PURE__ */ jsxs("select", { id: "buyer-stage", name: "stage", required: true, children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Stage" }),
                      /* @__PURE__ */ jsx("option", { value: "idea", children: "Idea / Concept" }),
                      /* @__PURE__ */ jsx("option", { value: "research", children: "Research Phase" }),
                      /* @__PURE__ */ jsx("option", { value: "rfp", children: "RFP / Procurement" }),
                      /* @__PURE__ */ jsx("option", { value: "pilot", children: "Pilot / POC" }),
                      /* @__PURE__ */ jsx("option", { value: "deployment", children: "Ready for Deployment" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "buyer-budget", children: "Budget Range *" }),
                    /* @__PURE__ */ jsxs("select", { id: "buyer-budget", name: "budget", required: true, children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Budget" }),
                      /* @__PURE__ */ jsx("option", { value: "under-50k", children: "Under $50K" }),
                      /* @__PURE__ */ jsx("option", { value: "50k-100k", children: "$50K - $100K" }),
                      /* @__PURE__ */ jsx("option", { value: "100k-500k", children: "$100K - $500K" }),
                      /* @__PURE__ */ jsx("option", { value: "500k-1m", children: "$500K - $1M" }),
                      /* @__PURE__ */ jsx("option", { value: "1m+", children: "$1M+" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "buyer-timeline", children: "Project Timeline" }),
                    /* @__PURE__ */ jsxs("select", { id: "buyer-timeline", name: "timeline", children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Timeline" }),
                      /* @__PURE__ */ jsx("option", { value: "immediate", children: "Immediate (1-3 months)" }),
                      /* @__PURE__ */ jsx("option", { value: "short", children: "Short term (3-6 months)" }),
                      /* @__PURE__ */ jsx("option", { value: "medium", children: "Medium term (6-12 months)" }),
                      /* @__PURE__ */ jsx("option", { value: "long", children: "Long term (12+ months)" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "buyer-technology", children: "Technology Interest * (Select primary interest)" }),
                    /* @__PURE__ */ jsxs("select", { id: "buyer-technology", name: "technology", required: true, children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Technology" }),
                      /* @__PURE__ */ jsx("option", { value: "ai-software", children: "AI Software" }),
                      /* @__PURE__ */ jsx("option", { value: "ai-hardware", children: "AI Hardware" }),
                      /* @__PURE__ */ jsx("option", { value: "iot", children: "IoT Devices & Sensors" }),
                      /* @__PURE__ */ jsx("option", { value: "video-analytics", children: "Video Analytics" }),
                      /* @__PURE__ */ jsx("option", { value: "robotics", children: "Robotics & Automation" }),
                      /* @__PURE__ */ jsx("option", { value: "drones", children: "Drones & Counter-Drone" }),
                      /* @__PURE__ */ jsx("option", { value: "edge", children: "Edge Computing" }),
                      /* @__PURE__ */ jsx("option", { value: "digital-twins", children: "Digital Twins" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "buyer-deployment", children: "Deployment Preference" }),
                    /* @__PURE__ */ jsxs("select", { id: "buyer-deployment", name: "deployment", children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Preference" }),
                      /* @__PURE__ */ jsx("option", { value: "cloud", children: "Cloud-based" }),
                      /* @__PURE__ */ jsx("option", { value: "on-premise", children: "On-premise" }),
                      /* @__PURE__ */ jsx("option", { value: "hybrid", children: "Hybrid" }),
                      /* @__PURE__ */ jsx("option", { value: "flexible", children: "Flexible" })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "form-section", children: [
                  /* @__PURE__ */ jsx("h4", { className: "section-heading", children: "Requirements" }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "buyer-description", children: "Project Description *" }),
                    /* @__PURE__ */ jsx("textarea", { id: "buyer-description", name: "description", required: true, rows: 4, placeholder: "Describe your project requirements and goals" }),
                    /* @__PURE__ */ jsx("span", { className: "field-hint", children: "Max 500 characters" })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "buyer-requirements", children: "Specific Requirements" }),
                    /* @__PURE__ */ jsx("textarea", { id: "buyer-requirements", name: "requirements", rows: 4, placeholder: "Any specific technical requirements, constraints, or preferences" })
                  ] }) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "form-actions", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-primary btn-large", children: "Submit Buyer Registration" }) })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "form-content", id: "provider-content", children: /* @__PURE__ */ jsxs("form", { className: "registration-form", id: "provider-form", children: [
            /* @__PURE__ */ jsxs("div", { className: "form-columns", children: [
              /* @__PURE__ */ jsxs("div", { className: "form-column", children: [
                /* @__PURE__ */ jsxs("div", { className: "form-section", children: [
                  /* @__PURE__ */ jsx("h4", { className: "section-heading", children: "Contact Information" }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-name", children: "Full Name *" }),
                    /* @__PURE__ */ jsx("input", { type: "text", id: "provider-name", name: "name", required: true, placeholder: "Jane Smith" })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-email", children: "Email *" }),
                    /* @__PURE__ */ jsx("input", { type: "email", id: "provider-email", name: "email", required: true, placeholder: "jane@techprovider.com" })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-phone", children: "Phone *" }),
                    /* @__PURE__ */ jsx("input", { type: "tel", id: "provider-phone", name: "phone", required: true, placeholder: "+1 (555) 987-6543" })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-company", children: "Company Name *" }),
                    /* @__PURE__ */ jsx("input", { type: "text", id: "provider-company", name: "company", required: true, placeholder: "TechSolutions Inc." })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-website", children: "Company Website *" }),
                    /* @__PURE__ */ jsx("input", { type: "url", id: "provider-website", name: "website", required: true, placeholder: "https://techsolutions.com" })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-title", children: "Job Title" }),
                    /* @__PURE__ */ jsx("input", { type: "text", id: "provider-title", name: "title", placeholder: "CEO / Sales Director" })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "form-section", children: [
                  /* @__PURE__ */ jsx("h4", { className: "section-heading", children: "Company Details" }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-type", children: "Seller Type * (Commission rates vary)" }),
                    /* @__PURE__ */ jsxs("select", { id: "provider-type", name: "type", required: true, children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Type" }),
                      /* @__PURE__ */ jsx("option", { value: "manufacturer", children: "Technology Manufacturer" }),
                      /* @__PURE__ */ jsx("option", { value: "vendor", children: "Solution Vendor" }),
                      /* @__PURE__ */ jsx("option", { value: "integrator", children: "System Integrator" }),
                      /* @__PURE__ */ jsx("option", { value: "consultant", children: "Consulting Firm" }),
                      /* @__PURE__ */ jsx("option", { value: "service", children: "Managed Service Provider" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-size", children: "Company Size *" }),
                    /* @__PURE__ */ jsxs("select", { id: "provider-size", name: "size", required: true, children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Size" }),
                      /* @__PURE__ */ jsx("option", { value: "1-10", children: "1-10 employees" }),
                      /* @__PURE__ */ jsx("option", { value: "11-50", children: "11-50 employees" }),
                      /* @__PURE__ */ jsx("option", { value: "51-200", children: "51-200 employees" }),
                      /* @__PURE__ */ jsx("option", { value: "201-500", children: "201-500 employees" }),
                      /* @__PURE__ */ jsx("option", { value: "500+", children: "500+ employees" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-established", children: "Year Established *" }),
                    /* @__PURE__ */ jsx("input", { type: "number", id: "provider-established", name: "established", required: true, min: "1900", max: "2026", placeholder: "2020" })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-region", children: "Geographic Coverage * (Primary region)" }),
                    /* @__PURE__ */ jsxs("select", { id: "provider-region", name: "region", required: true, children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Region" }),
                      /* @__PURE__ */ jsx("option", { value: "north-america", children: "North America" }),
                      /* @__PURE__ */ jsx("option", { value: "europe", children: "Europe" }),
                      /* @__PURE__ */ jsx("option", { value: "asia-pacific", children: "Asia Pacific" }),
                      /* @__PURE__ */ jsx("option", { value: "middle-east", children: "Middle East" }),
                      /* @__PURE__ */ jsx("option", { value: "africa", children: "Africa" }),
                      /* @__PURE__ */ jsx("option", { value: "global", children: "Global" })
                    ] })
                  ] }) })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "form-column", children: [
                /* @__PURE__ */ jsxs("div", { className: "form-section", children: [
                  /* @__PURE__ */ jsx("h4", { className: "section-heading", children: "Offerings" }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-category", children: "Primary Technology Category *" }),
                    /* @__PURE__ */ jsxs("select", { id: "provider-category", name: "category", required: true, children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Category" }),
                      /* @__PURE__ */ jsx("option", { value: "ai-software", children: "AI Software" }),
                      /* @__PURE__ */ jsx("option", { value: "ai-hardware", children: "AI Hardware" }),
                      /* @__PURE__ */ jsx("option", { value: "iot", children: "IoT Devices & Sensors" }),
                      /* @__PURE__ */ jsx("option", { value: "video-analytics", children: "Video Analytics & Vision AI" }),
                      /* @__PURE__ */ jsx("option", { value: "robotics", children: "Robotics & Automation" }),
                      /* @__PURE__ */ jsx("option", { value: "drones", children: "Drones & Counter-Drone" }),
                      /* @__PURE__ */ jsx("option", { value: "edge", children: "Edge Computing" }),
                      /* @__PURE__ */ jsx("option", { value: "digital-twins", children: "Digital Twins & Simulation" }),
                      /* @__PURE__ */ jsx("option", { value: "ar-vr", children: "AR / VR / MR" }),
                      /* @__PURE__ */ jsx("option", { value: "cybersecurity", children: "Cybersecurity (OT + AI)" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-deployment-models", children: "Deployment Models Offered * (Select primary)" }),
                    /* @__PURE__ */ jsxs("select", { id: "provider-deployment-models", name: "deploymentModels", children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Model" }),
                      /* @__PURE__ */ jsx("option", { value: "cloud", children: "Cloud / SaaS" }),
                      /* @__PURE__ */ jsx("option", { value: "on-premise", children: "On-premise" }),
                      /* @__PURE__ */ jsx("option", { value: "hybrid", children: "Hybrid" }),
                      /* @__PURE__ */ jsx("option", { value: "all", children: "All Models" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-industries", children: "Target Industries * (Select primary)" }),
                    /* @__PURE__ */ jsxs("select", { id: "provider-industries", name: "industries", required: true, children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Industry" }),
                      /* @__PURE__ */ jsx("option", { value: "oil-gas", children: "Oil & Gas" }),
                      /* @__PURE__ */ jsx("option", { value: "mining", children: "Mining" }),
                      /* @__PURE__ */ jsx("option", { value: "power", children: "Power Generation" }),
                      /* @__PURE__ */ jsx("option", { value: "manufacturing", children: "Manufacturing" }),
                      /* @__PURE__ */ jsx("option", { value: "utilities", children: "Utilities" }),
                      /* @__PURE__ */ jsx("option", { value: "all", children: "All Industries" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-services", children: "Key Products / Services *" }),
                    /* @__PURE__ */ jsx("textarea", { id: "provider-services", name: "services", required: true, rows: 4, placeholder: "Describe your main products, services, and unique value proposition" }),
                    /* @__PURE__ */ jsx("span", { className: "field-hint", children: "Max 500 characters" })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "form-section", children: [
                  /* @__PURE__ */ jsx("h4", { className: "section-heading", children: "Business Information" }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-pricing", children: "Pricing Model" }),
                    /* @__PURE__ */ jsxs("select", { id: "provider-pricing", name: "pricing", children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Pricing Model" }),
                      /* @__PURE__ */ jsx("option", { value: "subscription", children: "Subscription / SaaS" }),
                      /* @__PURE__ */ jsx("option", { value: "perpetual", children: "Perpetual License" }),
                      /* @__PURE__ */ jsx("option", { value: "project", children: "Project-based" }),
                      /* @__PURE__ */ jsx("option", { value: "usage", children: "Usage-based" }),
                      /* @__PURE__ */ jsx("option", { value: "custom", children: "Custom Pricing" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-project-size", children: "Typical Project Size" }),
                    /* @__PURE__ */ jsxs("select", { id: "provider-project-size", name: "projectSize", children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Range" }),
                      /* @__PURE__ */ jsx("option", { value: "under-50k", children: "Under $50K" }),
                      /* @__PURE__ */ jsx("option", { value: "50k-100k", children: "$50K - $100K" }),
                      /* @__PURE__ */ jsx("option", { value: "100k-500k", children: "$100K - $500K" }),
                      /* @__PURE__ */ jsx("option", { value: "500k+", children: "$500K+" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-timeline", children: "Implementation Timeline" }),
                    /* @__PURE__ */ jsxs("select", { id: "provider-timeline", name: "timeline", children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Timeline" }),
                      /* @__PURE__ */ jsx("option", { value: "1-3", children: "1-3 months" }),
                      /* @__PURE__ */ jsx("option", { value: "3-6", children: "3-6 months" }),
                      /* @__PURE__ */ jsx("option", { value: "6-12", children: "6-12 months" }),
                      /* @__PURE__ */ jsx("option", { value: "12+", children: "12+ months" })
                    ] })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-references", children: "References Available?" }),
                    /* @__PURE__ */ jsxs("select", { id: "provider-references", name: "references", children: [
                      /* @__PURE__ */ jsx("option", { value: "", children: "Select Option" }),
                      /* @__PURE__ */ jsx("option", { value: "yes", children: "Yes, can provide references" }),
                      /* @__PURE__ */ jsx("option", { value: "nda", children: "Yes, under NDA" }),
                      /* @__PURE__ */ jsx("option", { value: "no", children: "Not at this time" })
                    ] })
                  ] }) })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "form-section", children: [
                  /* @__PURE__ */ jsx("h4", { className: "section-heading", children: "Certifications & Compliance" }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-certifications", children: "Industry Certifications" }),
                    /* @__PURE__ */ jsx("input", { type: "text", id: "provider-certifications", name: "certifications", placeholder: "ISO 9001, SOC 2, etc." })
                  ] }) }),
                  /* @__PURE__ */ jsx("div", { className: "form-row", children: /* @__PURE__ */ jsxs("div", { className: "form-group", children: [
                    /* @__PURE__ */ jsx("label", { htmlFor: "provider-compliance", children: "Compliance Standards" }),
                    /* @__PURE__ */ jsx("input", { type: "text", id: "provider-compliance", name: "compliance", placeholder: "GDPR, HIPAA, etc." })
                  ] }) })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "form-actions", children: /* @__PURE__ */ jsx("button", { type: "submit", className: "btn btn-primary btn-large", children: "Submit Provider Registration" }) })
          ] }) })
        ] })
      ] }) })
    ] })
  );
});
export {
  app as default
};
