import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="X4ET - Exchange for Emerging Technologies. Connect with 1000+ verified industrial AI, IoT, and automation providers." />
        <title>X4ET - Exchange for Emerging Technologies</title>
        
        {/* External Resources */}
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet" />
        
        {/* Custom Styles */}
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>
        {/* Navigation */}
        <nav className="nav" id="navbar">
          <div className="nav-container">
            <a href="#home" className="nav-logo">
              <span className="logo-icon">⚡</span>
              <span className="logo-text">X4ET</span>
            </a>
            <ul className="nav-menu">
              <li><a href="#home" className="nav-link">Home</a></li>
              <li><a href="#challenge" className="nav-link">Challenge</a></li>
              <li><a href="#solutions" className="nav-link">Solutions</a></li>
              <li><a href="#categories" className="nav-link">Categories</a></li>
              <li><a href="#signup" className="btn btn-nav">Get Started</a></li>
            </ul>
          </div>
        </nav>

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-col">
                <h4 className="footer-title">
                  <span className="logo-icon">⚡</span> X4ET
                </h4>
                <p className="footer-text">
                  The leading marketplace for industrial AI, IoT, robotics, and automation solutions.
                </p>
              </div>
              <div className="footer-col">
                <h4 className="footer-heading">Solutions</h4>
                <ul className="footer-links">
                  <li><a href="#buyers">For Buyers</a></li>
                  <li><a href="#providers">For Providers</a></li>
                  <li><a href="#categories">Categories</a></li>
                  <li><a href="#use-cases">Use Cases</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4 className="footer-heading">Company</h4>
                <ul className="footer-links">
                  <li><a href="#about">About Us</a></li>
                  <li><a href="#contact">Contact</a></li>
                  <li><a href="#careers">Careers</a></li>
                  <li><a href="#blog">Blog</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4 className="footer-heading">Resources</h4>
                <ul className="footer-links">
                  <li><a href="#docs">Documentation</a></li>
                  <li><a href="#support">Support</a></li>
                  <li><a href="#privacy">Privacy Policy</a></li>
                  <li><a href="#terms">Terms of Service</a></li>
                </ul>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2026 X4ET. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Custom JavaScript */}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
