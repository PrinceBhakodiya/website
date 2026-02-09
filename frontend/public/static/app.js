// Backend API URL - change this based on environment
const API_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:3001'
  : 'https://your-backend-api.com'; // Update with your production backend URL

// Smooth scrolling navigation
document.addEventListener('DOMContentLoaded', function() {
  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // Intersection Observer for fade-in animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe all cards and sections
  const animatedElements = document.querySelectorAll(
    '.problem-card, .solution-card, .feature-card, .category-card, .testimonial-card'
  );
  
  animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });

  // Counter animation for stats
  function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        element.textContent = target + (element.dataset.suffix || '');
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(current) + (element.dataset.suffix || '');
      }
    }, 16);
  }

  // Animate stat numbers when they come into view
  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        const text = entry.target.textContent.trim();
        const match = text.match(/(\d+)/);
        if (match) {
          const number = parseInt(match[1]);
          entry.target.dataset.suffix = text.replace(/\d+/, '');
          animateCounter(entry.target, number);
          entry.target.dataset.animated = 'true';
        }
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.stat-number, .problem-stat').forEach(stat => {
    statObserver.observe(stat);
  });

  // Parallax effect for hero background
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-bg');
    
    parallaxElements.forEach(el => {
      const speed = 0.5;
      el.style.transform = `translateY(${scrolled * speed}px)`;
    });
  });

  // Add hover effect to cards
  const cards = document.querySelectorAll('.problem-card, .solution-card, .feature-card, .category-card, .testimonial-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transition = 'all 0.3s ease';
    });
    
    card.addEventListener('mousemove', function(e) {
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
  });

  // Console greeting
  console.log('%c🚀 X4ET - Exchange for Emerging Technologies', 'font-size: 20px; font-weight: bold; color: #3b82f6;');
  console.log('%cBackend API: ' + API_URL, 'font-size: 12px; color: #8b5cf6;');

  // Tab switching functionality
  const tabButtons = document.querySelectorAll('.tab-button');
  const formContents = document.querySelectorAll('.form-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const tabName = this.dataset.tab;
      
      // Remove active class from all tabs and contents
      tabButtons.forEach(btn => btn.classList.remove('active'));
      formContents.forEach(content => content.classList.remove('active'));
      
      // Add active class to clicked tab and corresponding content
      this.classList.add('active');
      document.getElementById(`${tabName}-content`).classList.add('active');
    });
  });

  // Form submission handlers
  const buyerForm = document.getElementById('buyer-form');
  const providerForm = document.getElementById('provider-form');

  if (buyerForm) {
    buyerForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Collect form data
      const formData = new FormData(buyerForm);
      const data = Object.fromEntries(formData.entries());

      console.log('Buyer Registration Data:', data);

      // Show loading state
      const submitButton = buyerForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';

      try {
        // Submit to backend API
        const response = await fetch(`${API_URL}/api/submit-form`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formType: 'buyer',
            data: data
          })
        });

        const result = await response.json();

        if (response.ok && result.success) {
          console.log('Form submitted successfully:', result);

          // Show success message
          showFormSuccess(buyerForm, 'Buyer', result.message);

          // Reset form
          buyerForm.reset();
        } else {
          console.error('Form submission failed:', result);
          showFormError(buyerForm, result.error || 'Submission failed. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        showFormError(buyerForm, 'Unable to connect to backend server. Please ensure the backend is running on ' + API_URL);
      } finally {
        // Restore button state
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    });
  }

  if (providerForm) {
    providerForm.addEventListener('submit', async function(e) {
      e.preventDefault();

      // Collect form data
      const formData = new FormData(providerForm);
      const data = Object.fromEntries(formData.entries());

      console.log('Provider Registration Data:', data);

      // Show loading state
      const submitButton = providerForm.querySelector('button[type="submit"]');
      const originalText = submitButton.textContent;
      submitButton.disabled = true;
      submitButton.textContent = 'Submitting...';

      try {
        // Submit to backend API
        const response = await fetch(`${API_URL}/api/submit-form`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            formType: 'provider',
            data: data
          })
        });

        const result = await response.json();

        if (response.ok && result.success) {
          console.log('Form submitted successfully:', result);

          // Show success message
          showFormSuccess(providerForm, 'Provider', result.message);

          // Reset form
          providerForm.reset();
        } else {
          console.error('Form submission failed:', result);
          showFormError(providerForm, result.error || 'Submission failed. Please try again.');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        showFormError(providerForm, 'Unable to connect to backend server. Please ensure the backend is running on ' + API_URL);
      } finally {
        // Restore button state
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    });
  }

  // Success message display
  function showFormSuccess(form, type, message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success-message';
    successDiv.innerHTML = `
      <div class="success-icon">✓</div>
      <h4>Registration Submitted!</h4>
      <p>${message || `Thank you for registering as a ${type}. We'll review your information and contact you within 24-48 hours.`}</p>
    `;

    // Style the success message
    successDiv.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(16, 185, 129, 0.95);
      backdrop-filter: blur(20px);
      color: white;
      padding: 2.5rem 3rem;
      border-radius: 1rem;
      box-shadow: 0 20px 60px rgba(16, 185, 129, 0.4);
      z-index: 10000;
      text-align: center;
      max-width: 500px;
      animation: slideInDown 0.4s ease;
    `;

    document.body.appendChild(successDiv);

    // Remove after 4 seconds
    setTimeout(() => {
      successDiv.style.animation = 'fadeOut 0.3s ease';
      setTimeout(() => {
        document.body.removeChild(successDiv);
      }, 300);
    }, 4000);
  }

  // Error message display
  function showFormError(form, errorMessage) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error-message';
    errorDiv.innerHTML = `
      <div class="error-icon">✕</div>
      <h4>Submission Failed</h4>
      <p>${errorMessage}</p>
    `;

    // Style the error message
    errorDiv.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(239, 68, 68, 0.95);
      backdrop-filter: blur(20px);
      color: white;
      padding: 2.5rem 3rem;
      border-radius: 1rem;
      box-shadow: 0 20px 60px rgba(239, 68, 68, 0.4);
      z-index: 10000;
      text-align: center;
      max-width: 500px;
      animation: slideInDown 0.4s ease;
    `;

    document.body.appendChild(errorDiv);

    // Remove after 5 seconds
    setTimeout(() => {
      errorDiv.style.animation = 'fadeOut 0.3s ease';
      setTimeout(() => {
        if (document.body.contains(errorDiv)) {
          document.body.removeChild(errorDiv);
        }
      }, 300);
    }, 5000);
  }

  // Form validation enhancement
  const inputs = document.querySelectorAll('input[required], select[required], textarea[required]');
  inputs.forEach(input => {
    input.addEventListener('blur', function() {
      if (!this.validity.valid) {
        this.style.borderColor = 'rgba(239, 68, 68, 0.5)';
      } else {
        this.style.borderColor = 'rgba(16, 185, 129, 0.5)';
      }
    });
  });
});
