import nodemailer from "nodemailer";

// Validate SMTP configuration
const validateSMTPConfig = () => {
  const requiredVars = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM'];
  const missing = requiredVars.filter(varName => !process.env[varName]);
  
  if (missing.length > 0) {
    throw new Error(
      `SMTP configuration is incomplete. Missing environment variables: ${missing.join(', ')}. ` +
      `Please set these in your .env file.`
    );
  }
  
  // Validate port is a number
  const port = parseInt(process.env.SMTP_PORT, 10);
  if (isNaN(port)) {
    throw new Error(`SMTP_PORT must be a valid number, got: ${process.env.SMTP_PORT}`);
  }
  
  // Determine secure setting: use SMTP_SECURE if provided, otherwise check port
  let secure = false;
  if (process.env.SMTP_SECURE !== undefined) {
    secure = process.env.SMTP_SECURE === 'true' || process.env.SMTP_SECURE === true;
  } else {
    secure = port === 465; // Default: secure for port 465
  }
  
  return {
    host: process.env.SMTP_HOST,
    port: port,
    secure: secure,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
    tls: {
      rejectUnauthorized: false
    }
  };
};

// Lazy initialization - create transporter on first use
let transporter = null;
let initializationAttempted = false;

const getTransporter = () => {
  // If already initialized successfully, return it
  if (transporter) {
    return transporter;
  }
  
  // If we've already tried and failed, throw the error
  if (initializationAttempted && !transporter) {
    const missing = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM']
      .filter(varName => !process.env[varName]);
    throw new Error(
      `SMTP is not configured. Missing environment variables: ${missing.join(', ')}. ` +
      `Please set these in your .env file and restart the server.`
    );
  }
  
  // Try to initialize
  initializationAttempted = true;
  try {
    const config = validateSMTPConfig();
    transporter = nodemailer.createTransport(config);
    console.log('SMTP transporter initialized successfully');
    return transporter;
  } catch (error) {
    console.error('SMTP configuration error:', error.message);
    // Log which variables are actually set for debugging
    console.error('SMTP environment variables status:', {
      SMTP_HOST: process.env.SMTP_HOST ? '✓' : '✗',
      SMTP_PORT: process.env.SMTP_PORT ? '✓' : '✗',
      SMTP_USER: process.env.SMTP_USER ? '✓' : '✗',
      SMTP_PASS: process.env.SMTP_PASS ? '✓' : '✗',
      SMTP_FROM: process.env.SMTP_FROM ? '✓' : '✗',
    });
    throw error;
  }
};

export const sendMail = async ({ to, subject, html }) => {
  // Validate required fields
  if (!to || !subject || !html) {
    throw new Error('Missing required email fields: to, subject, or html');
  }
  
  // Get or create transporter (lazy initialization)
  const mailTransporter = getTransporter();
  
  try {
    return await mailTransporter.sendMail({
      from: process.env.SMTP_FROM,
      to,
      subject,
      html,
    });
  } catch (error) {
    console.error('Error sending email:', {
      error: error.message,
      code: error.code,
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
    });
    throw error;
  }
};