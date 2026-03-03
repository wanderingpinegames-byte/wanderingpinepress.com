/* ============================================================
   WANDERING PINE PRESS — Global JavaScript
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Mobile Nav Toggle --- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    // Close on link click
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        toggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  /* --- Active Nav Link --- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* --- Email Signup Placeholder --- */
  const signupForms = document.querySelectorAll('.signup-form');
  signupForms.forEach(function (form) {
    const btn = form.querySelector('button, .btn-primary');
    const input = form.querySelector('input[type="email"]');
    if (btn && input) {
      btn.addEventListener('click', function () {
        if (!input.value || !input.value.includes('@')) {
          input.style.borderColor = 'var(--rust)';
          input.placeholder = 'Please enter a valid email';
          return;
        }
        // TODO: Replace this block with your email platform embed code
        // e.g. Mailchimp, ConvertKit, etc.
        input.style.borderColor = 'var(--moss)';
        const msg = document.createElement('p');
        msg.textContent = "Thanks! Check your inbox for your free game. 🌲";
        msg.style.cssText = 'color: var(--pine); font-weight: 600; margin-top: 0.75rem; font-size: 0.92rem;';
        form.appendChild(msg);
        input.value = '';
        btn.disabled = true;
        btn.style.opacity = '0.6';
      });
    }
  });

  /* --- Contact Form Placeholder --- */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      // TODO: Wire up to Formspree, Netlify Forms, or your preferred form handler
      // Formspree example: set action="https://formspree.io/f/YOUR_ID" method="POST"
      const msg = document.getElementById('form-success');
      if (msg) { msg.style.display = 'block'; }
      contactForm.reset();
    });
  }

  /* --- Smooth scroll for anchor links --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
