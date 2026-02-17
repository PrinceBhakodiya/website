import { Hono } from 'hono'
import { renderer } from './renderer'
import { serveStatic } from 'hono/cloudflare-workers'
import { sendEmail } from './services/emailService'
import {
  getBuyerThankYouEmail,
  getProviderThankYouEmail,
  getAdminNotificationEmail,
} from './templates/emailTemplates'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

app.use(renderer)

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

    const env = c.env as any

    // Check if SMTP is configured
    const isEmailConfigured = env.SMTP_USER && env.SMTP_PASS && env.SMTP_HOST

    if (!isEmailConfigured) {
      console.warn('⚠️  Email not configured. Skipping email sending.')
      console.log('💡 To enable emails, configure SMTP settings in .env file')

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

app.get('/', (c) => {
  return c.render(
    <div>
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-text">🚀 Trusted by 1000+ Enterprises</span>
          </div>
          <h1 className="hero-title">
            THE INDUSTRIAL WORLD<br />
            <span className="gradient-text">IS TRANSFORMING</span>
          </h1>
          <p className="hero-subtitle">
            Access the world's most comprehensive marketplace for industrial AI, IoT, robotics, and automation solutions. 
            Verified providers. Proven results. Zero guesswork.
          </p>
          <div className="hero-cta">
            <a href="#signup" className="btn btn-primary">Find Solutions Now</a>
            <a href="#about" className="btn btn-secondary">Learn More</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">14+</div>
              <div className="stat-label">Technology Domains</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">116+</div>
              <div className="stat-label">Solution Categories</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Verified Providers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="trust-section">
        <div className="container">
          <p className="trust-title">Trusted by industry leaders in Oil & Gas, Mining, Power & Manufacturing</p>
          {/* <div className="trust-logos">
            <div className="trust-logo">Shell</div>
            <div className="trust-logo">BP</div>
            <div className="trust-logo">Rio Tinto</div>
            <div className="trust-logo">GE Power</div>
            <div className="trust-logo">Siemens</div>
          </div> */}
        </div>
      </section>

      {/* Problem Section */}
      <section id="challenge" className="problem-section">
        <div className="container">
          <h2 className="section-title">Why Technology Adoption Stalls</h2>
          <p className="section-subtitle">
            The cost of getting it wrong is too high—and the traditional procurement process isn't built for emerging tech
          </p>
          <div className="problem-grid">
            <div className="problem-card">
              <div className="problem-stat">70%</div>
              <h3 className="problem-title">Projects Fail</h3>
              <p className="problem-text">
                AI/IoT projects fail due to poor vendor selection and unclear requirements
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-stat">12-18</div>
              <h3 className="problem-title">Months Wasted</h3>
              <p className="problem-text">
                Average procurement cycle while competitors pull ahead with faster decisions
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-stat">$2.4M</div>
              <h3 className="problem-title">Average Loss</h3>
              <p className="problem-text">
                Cost of failed pilots that drain budgets and erode executive confidence
              </p>
            </div>
            <div className="problem-card">
              <div className="problem-stat">90%</div>
              <h3 className="problem-title">Can't Find Vendors</h3>
              <p className="problem-text">
                Enterprises struggle to find verified providers with industry expertise
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Interface.ai Style */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "X4ET helped us find the perfect AI vision system in just 2 weeks. 
                  Previously, this would have taken us 6 months. The pre-vetted providers 
                  saved us countless evaluation hours."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <div className="author-name">NDS Technologies</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "The platform understood our requirements the first time. No endless back-and-forth. 
                  We deployed predictive maintenance across 12 sites and saw 40% reduction in downtime."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <div className="author-name">Oil/Gas Company</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "X4ET connected us with Fortune 500 buyers actively looking for our solutions. 
                  We closed 3 deals in our first quarter—this platform changed our GTM strategy."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <div className="author-name">David Kumar</div>
                  <div className="author-title">CEO, VisionTech AI</div>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p className="testimonial-text">
                  "From pilot to production in 90 days. The expert consultation and implementation 
                  support made all the difference. Felt like having an experienced partner, not just a marketplace."
                </p>
              </div>
              <div className="testimonial-author">
                <div className="author-info">
                  <div className="author-name">Lisa Anderson</div>
                  <div className="author-title">CTO, Manufacturing Corp</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="solutions-section">
        <div className="container">
          <h2 className="section-title">There's a Better Way</h2>
          <p className="section-subtitle">X4ET eliminates the guesswork and accelerates your success</p>
          
          <div className="solutions-grid">
            <div className="solution-card">
              <div className="solution-icon">🔍</div>
              <h3 className="solution-title">FOR TECHNOLOGY BUYERS</h3>
              <p className="solution-text">
                Access the world's most comprehensive catalog of industrial AI, IoT, robotics, 
                and automation solutions. Vetted providers. Proven results. Zero guesswork.
              </p>
              <ul className="solution-features">
                <li>✓ Instant access to 1000+ verified technology providers</li>
                <li>✓ AI-powered matching for your specific requirements</li>
                <li>✓ Industry-specific solutions for oil & gas, mining, power, and manufacturing</li>
                <li>✓ Expert consultation and implementation support</li>
              </ul>
              <a href="#signup" className="btn btn-primary">Find Solutions Now</a>
            </div>

            <div className="solution-card">
              <div className="solution-icon">🚀</div>
              <h3 className="solution-title">FOR TECHNOLOGY PROVIDERS</h3>
              <p className="solution-text">
                Connect with enterprise buyers actively seeking your solutions. 
                Accelerate your market entry. Scale your impact globally.
              </p>
              <ul className="solution-features">
                <li>✓ Direct access to Fortune 500 and government buyers</li>
                <li>✓ Comprehensive GTM strategy and sales enablement</li>
                <li>✓ Marketing and positioning support to stand out</li>
                <li>✓ Partnership opportunities and ecosystem integration</li>
              </ul>
              <a href="#signup" className="btn btn-secondary">Join as Provider</a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">THE X4ET ADVANTAGE</h2>
          <p className="section-subtitle">
            Three core services that transform how enterprises adopt emerging technologies
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-number">01</div>
              <h3 className="feature-title">DEMAND DISCOVERY</h3>
              <p className="feature-text">
                We identify your technology needs, operational pain points, and innovation opportunities 
                through deep industry analysis and stakeholder engagement.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-number">02</div>
              <h3 className="feature-title">SOLUTION MATCHING</h3>
              <p className="feature-text">
                Our AI-powered platform connects you with the perfect-fit solutions from our network 
                of 1000+ verified providers, saving months of evaluation time.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-number">03</div>
              <h3 className="feature-title">GTM SUPPORT</h3>
              <p className="feature-text">
                For technology providers, we deliver comprehensive go-to-market strategy, 
                sales enablement, and partnership development to accelerate your growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section id="categories" className="categories-section">
        <div className="container">
          <h2 className="section-title">14 TECHNOLOGY CATEGORIES</h2>
          <p className="section-subtitle">
            Comprehensive marketplace covering 116+ sub-categories across the entire industrial AI 
            and emerging technology spectrum
          </p>
          
          <div className="categories-grid">
            <div className="category-card">
              <div className="category-icon">🤖</div>
              <h3 className="category-title">AI Software</h3>
              <p className="category-desc">Computer Vision, NLP, GenAI, Predictive Analytics</p>
              <div className="category-count">8 Sub-Categories</div>
            </div>
            <div className="category-card">
              <div className="category-icon">🔧</div>
              <h3 className="category-title">AI Hardware</h3>
              <p className="category-desc">AI Cameras, Edge Gateways, GPU Accelerators</p>
              <div className="category-count">5 Sub-Categories</div>
            </div>
            <div className="category-card">
              <div className="category-icon">📡</div>
              <h3 className="category-title">IoT Devices & Sensors</h3>
              <p className="category-desc">Temperature, Pressure, Vibration, Environmental</p>
              <div className="category-count">9 Sub-Categories</div>
            </div>
            <div className="category-card">
              <div className="category-icon">📹</div>
              <h3 className="category-title">Video Analytics</h3>
              <p className="category-desc">Surveillance, Quality Control, Safety Monitoring</p>
              <div className="category-count">10 Sub-Categories</div>
            </div>
            <div className="category-card">
              <div className="category-icon">🦾</div>
              <h3 className="category-title">Robotics & Automation</h3>
              <p className="category-desc">Industrial Robots, AGVs, Collaborative Robots</p>
              <div className="category-count">10 Sub-Categories</div>
            </div>
            <div className="category-card">
              <div className="category-icon">🚁</div>
              <h3 className="category-title">Drones</h3>
              <p className="category-desc">Aerial Inspection, Mapping, Security Systems</p>
              <div className="category-count">9 Sub-Categories</div>
            </div>
            <div className="category-card">
              <div className="category-icon">⚡</div>
              <h3 className="category-title">Edge Computing</h3>
              <p className="category-desc">Low-latency Processing, Offline AI, Edge Servers</p>
              <div className="category-count">8 Sub-Categories</div>
            </div>
            <div className="category-card">
              <div className="category-icon">👥</div>
              <h3 className="category-title">Digital Twins</h3>
              <p className="category-desc">Asset Replicas, Process Optimization, Testing</p>
              <div className="category-count">7 Sub-Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Forms Section */}
      <section id="signup" className="signup-section">
        <div className="container">
          <div className="signup-header">
            <h2 className="section-title">START YOUR JOURNEY</h2>
            <p className="section-subtitle">
              Join 1000+ enterprises and technology providers transforming industrial operations. Get matched with the perfect solutions or connect with qualified buyers.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="form-tabs">
            <button className="tab-button active" data-tab="buyer">
              <span className="tab-icon">🔍</span>
              <span className="tab-label">Technology Buyer</span>
            </button>
            <button className="tab-button" data-tab="provider">
              <span className="tab-icon">🚀</span>
              <span className="tab-label">Technology Provider</span>
            </button>
          </div>

          <div className="forms-container">
            {/* Buyer Registration Form */}
            <div className="form-content active" id="buyer-content">
              <form className="registration-form" id="buyer-form">
                <div className="form-columns">
                  <div className="form-column">
                    {/* Contact Information */}
                    <div className="form-section">
                      <h4 className="section-heading">Contact Information</h4>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="buyer-name">Full Name *</label>
                          <input type="text" id="buyer-name" name="name" required placeholder="John Doe" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="buyer-email">Email *</label>
                          <input type="email" id="buyer-email" name="email" required placeholder="john@company.com" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="buyer-phone">Phone *</label>
                          <input type="tel" id="buyer-phone" name="phone" required placeholder="+1 (555) 123-4567" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="buyer-company">Company Name *</label>
                          <input type="text" id="buyer-company" name="company" required placeholder="Acme Corporation" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="buyer-title">Job Title</label>
                          <input type="text" id="buyer-title" name="title" placeholder="VP of Operations" />
                        </div>
                      </div>
                    </div>

                    {/* Organization Details */}
                    <div className="form-section">
                      <h4 className="section-heading">Organization Details</h4>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="buyer-org-type">Organization Type *</label>
                          <select id="buyer-org-type" name="orgType" required>
                            <option value="">Select Type</option>
                            <option value="enterprise">Enterprise (1000+ employees)</option>
                            <option value="midsize">Mid-size Company (100-999)</option>
                            <option value="small">Small Business (1-99)</option>
                            <option value="government">Government / Public Sector</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="buyer-industry">Industry Sector *</label>
                          <select id="buyer-industry" name="industry" required>
                            <option value="">Select Industry</option>
                            <option value="oil-gas">Oil & Gas</option>
                            <option value="mining">Mining</option>
                            <option value="power">Power Generation</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="utilities">Utilities</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="buyer-size">Company Size</label>
                          <select id="buyer-size" name="size">
                            <option value="">Select Size</option>
                            <option value="1-50">1-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-1000">201-1000 employees</option>
                            <option value="1001-5000">1001-5000 employees</option>
                            <option value="5000+">5000+ employees</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-column">
                    {/* Project Information */}
                    <div className="form-section">
                      <h4 className="section-heading">Project Information</h4>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="buyer-stage">Project Stage *</label>
                          <select id="buyer-stage" name="stage" required>
                            <option value="">Select Stage</option>
                            <option value="idea">Idea / Concept</option>
                            <option value="research">Research Phase</option>
                            <option value="rfp">RFP / Procurement</option>
                            <option value="pilot">Pilot / POC</option>
                            <option value="deployment">Ready for Deployment</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="buyer-budget">Budget Range *</label>
                          <select id="buyer-budget" name="budget" required>
                            <option value="">Select Budget</option>
                            <option value="under-50k">Under $50K</option>
                            <option value="50k-100k">$50K - $100K</option>
                            <option value="100k-500k">$100K - $500K</option>
                            <option value="500k-1m">$500K - $1M</option>
                            <option value="1m+">$1M+</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="buyer-timeline">Project Timeline</label>
                          <select id="buyer-timeline" name="timeline">
                            <option value="">Select Timeline</option>
                            <option value="immediate">Immediate (1-3 months)</option>
                            <option value="short">Short term (3-6 months)</option>
                            <option value="medium">Medium term (6-12 months)</option>
                            <option value="long">Long term (12+ months)</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="buyer-technology">Technology Interest * (Select primary interest)</label>
                          <select id="buyer-technology" name="technology" required>
                            <option value="">Select Technology</option>
                            <option value="ai-software">AI Software</option>
                            <option value="ai-hardware">AI Hardware</option>
                            <option value="iot">IoT Devices & Sensors</option>
                            <option value="video-analytics">Video Analytics</option>
                            <option value="robotics">Robotics & Automation</option>
                            <option value="drones">Drones & Counter-Drone</option>
                            <option value="edge">Edge Computing</option>
                            <option value="digital-twins">Digital Twins</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="buyer-deployment">Deployment Preference</label>
                          <select id="buyer-deployment" name="deployment">
                            <option value="">Select Preference</option>
                            <option value="cloud">Cloud-based</option>
                            <option value="on-premise">On-premise</option>
                            <option value="hybrid">Hybrid</option>
                            <option value="flexible">Flexible</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Requirements */}
                    <div className="form-section">
                      <h4 className="section-heading">Requirements</h4>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="buyer-description">Project Description *</label>
                          <textarea id="buyer-description" name="description" required rows={4} placeholder="Describe your project requirements and goals"></textarea>
                          <span className="field-hint">Max 500 characters</span>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="buyer-requirements">Specific Requirements</label>
                          <textarea id="buyer-requirements" name="requirements" rows={4} placeholder="Any specific technical requirements, constraints, or preferences"></textarea>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary btn-large">
                    Submit Buyer Registration
                  </button>
                </div>
              </form>
            </div>

            {/* Provider Registration Form */}
            <div className="form-content" id="provider-content">
              <form className="registration-form" id="provider-form">
                <div className="form-columns">
                  <div className="form-column">
                    {/* Contact Information */}
                    <div className="form-section">
                      <h4 className="section-heading">Contact Information</h4>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-name">Full Name *</label>
                          <input type="text" id="provider-name" name="name" required placeholder="Jane Smith" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-email">Email *</label>
                          <input type="email" id="provider-email" name="email" required placeholder="jane@techprovider.com" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-phone">Phone *</label>
                          <input type="tel" id="provider-phone" name="phone" required placeholder="+1 (555) 987-6543" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-company">Company Name *</label>
                          <input type="text" id="provider-company" name="company" required placeholder="TechSolutions Inc." />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-website">Company Website *</label>
                          <input type="url" id="provider-website" name="website" required placeholder="https://techsolutions.com" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-title">Job Title</label>
                          <input type="text" id="provider-title" name="title" placeholder="CEO / Sales Director" />
                        </div>
                      </div>
                    </div>

                    {/* Company Details */}
                    <div className="form-section">
                      <h4 className="section-heading">Company Details</h4>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-type">Seller Type * (Commission rates vary)</label>
                          <select id="provider-type" name="type" required>
                            <option value="">Select Type</option>
                            <option value="manufacturer">Technology Manufacturer</option>
                            <option value="vendor">Solution Vendor</option>
                            <option value="integrator">System Integrator</option>
                            <option value="consultant">Consulting Firm</option>
                            <option value="service">Managed Service Provider</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-size">Company Size *</label>
                          <select id="provider-size" name="size" required>
                            <option value="">Select Size</option>
                            <option value="1-10">1-10 employees</option>
                            <option value="11-50">11-50 employees</option>
                            <option value="51-200">51-200 employees</option>
                            <option value="201-500">201-500 employees</option>
                            <option value="500+">500+ employees</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-established">Year Established *</label>
                          <input type="number" id="provider-established" name="established" required min="1900" max="2026" placeholder="2020" />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-region">Geographic Coverage * (Primary region)</label>
                          <select id="provider-region" name="region" required>
                            <option value="">Select Region</option>
                            <option value="north-america">North America</option>
                            <option value="europe">Europe</option>
                            <option value="asia-pacific">Asia Pacific</option>
                            <option value="middle-east">Middle East</option>
                            <option value="africa">Africa</option>
                            <option value="global">Global</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-column">
                    {/* Offerings */}
                    <div className="form-section">
                      <h4 className="section-heading">Offerings</h4>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-category">Primary Technology Category *</label>
                          <select id="provider-category" name="category" required>
                            <option value="">Select Category</option>
                            <option value="ai-software">AI Software</option>
                            <option value="ai-hardware">AI Hardware</option>
                            <option value="iot">IoT Devices & Sensors</option>
                            <option value="video-analytics">Video Analytics & Vision AI</option>
                            <option value="robotics">Robotics & Automation</option>
                            <option value="drones">Drones & Counter-Drone</option>
                            <option value="edge">Edge Computing</option>
                            <option value="digital-twins">Digital Twins & Simulation</option>
                            <option value="ar-vr">AR / VR / MR</option>
                            <option value="cybersecurity">Cybersecurity (OT + AI)</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-deployment-models">Deployment Models Offered * (Select primary)</label>
                          <select id="provider-deployment-models" name="deploymentModels">
                            <option value="">Select Model</option>
                            <option value="cloud">Cloud / SaaS</option>
                            <option value="on-premise">On-premise</option>
                            <option value="hybrid">Hybrid</option>
                            <option value="all">All Models</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-industries">Target Industries * (Select primary)</label>
                          <select id="provider-industries" name="industries" required>
                            <option value="">Select Industry</option>
                            <option value="oil-gas">Oil & Gas</option>
                            <option value="mining">Mining</option>
                            <option value="power">Power Generation</option>
                            <option value="manufacturing">Manufacturing</option>
                            <option value="utilities">Utilities</option>
                            <option value="all">All Industries</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-services">Key Products / Services *</label>
                          <textarea id="provider-services" name="services" required rows={4} placeholder="Describe your main products, services, and unique value proposition"></textarea>
                          <span className="field-hint">Max 500 characters</span>
                        </div>
                      </div>
                    </div>

                    {/* Business Information */}
                    <div className="form-section">
                      <h4 className="section-heading">Business Information</h4>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-pricing">Pricing Model</label>
                          <select id="provider-pricing" name="pricing">
                            <option value="">Select Pricing Model</option>
                            <option value="subscription">Subscription / SaaS</option>
                            <option value="perpetual">Perpetual License</option>
                            <option value="project">Project-based</option>
                            <option value="usage">Usage-based</option>
                            <option value="custom">Custom Pricing</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-project-size">Typical Project Size</label>
                          <select id="provider-project-size" name="projectSize">
                            <option value="">Select Range</option>
                            <option value="under-50k">Under $50K</option>
                            <option value="50k-100k">$50K - $100K</option>
                            <option value="100k-500k">$100K - $500K</option>
                            <option value="500k+">$500K+</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-timeline">Implementation Timeline</label>
                          <select id="provider-timeline" name="timeline">
                            <option value="">Select Timeline</option>
                            <option value="1-3">1-3 months</option>
                            <option value="3-6">3-6 months</option>
                            <option value="6-12">6-12 months</option>
                            <option value="12+">12+ months</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-references">References Available?</label>
                          <select id="provider-references" name="references">
                            <option value="">Select Option</option>
                            <option value="yes">Yes, can provide references</option>
                            <option value="nda">Yes, under NDA</option>
                            <option value="no">Not at this time</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Certifications & Compliance */}
                    <div className="form-section">
                      <h4 className="section-heading">Certifications & Compliance</h4>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-certifications">Industry Certifications</label>
                          <input type="text" id="provider-certifications" name="certifications" placeholder="ISO 9001, SOC 2, etc." />
                        </div>
                      </div>
                      <div className="form-row">
                        <div className="form-group">
                          <label htmlFor="provider-compliance">Compliance Standards</label>
                          <input type="text" id="provider-compliance" name="compliance" placeholder="GDPR, HIPAA, etc." />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button type="submit" className="btn btn-primary btn-large">
                    Submit Provider Registration
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
})

export default app
