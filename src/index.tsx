import { Hono } from 'hono'
import { renderer } from './renderer'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

app.use(renderer)

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
          <div className="trust-logos">
            <div className="trust-logo">Shell</div>
            <div className="trust-logo">BP</div>
            <div className="trust-logo">Rio Tinto</div>
            <div className="trust-logo">GE Power</div>
            <div className="trust-logo">Siemens</div>
          </div>
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
                  <div className="author-name">Sarah Chen</div>
                  <div className="author-title">VP of Innovation, Shell Energy</div>
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
                  <div className="author-name">Michael Torres</div>
                  <div className="author-title">Operations Director, Rio Tinto</div>
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

      {/* CTA Section */}
      <section id="signup" className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">START YOUR JOURNEY</h2>
            <p className="cta-subtitle">
              Join 1000+ enterprises and technology providers transforming industrial operations. 
              Get matched with the perfect solutions or connect with qualified buyers.
            </p>
            <div className="cta-buttons">
              <a href="#contact" className="btn btn-primary btn-large">Get Started as Buyer</a>
              <a href="#contact" className="btn btn-secondary btn-large">Join as Provider</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
})

export default app
