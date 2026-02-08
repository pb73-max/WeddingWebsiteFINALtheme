/**
 * Prerna & Arpit Wedding Website
 * Main JavaScript - All functionality in single IIFE
 * GSAP animations with IntersectionObserver fallback
 */
(function() {
  'use strict';

  // ================================
  // Constants
  // ================================
  const WEDDING_DATE = new Date('2026-04-23T00:00:00+05:30'); // IST

  // Google Apps Script Web App URL
  // Instructions: See google-apps-script.js for setup, then paste your deployment URL below
  const RSVP_ENDPOINT = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';

  // Whether GSAP is available
  const hasGSAP = typeof gsap !== 'undefined';

  // ================================
  // State
  // ================================
  const state = {
    mobileMenuOpen: false,
    countdownInterval: null
  };

  // ================================
  // DOM Elements
  // ================================
  const elements = {
    navToggle: null,
    navMenu: null,
    countdownDays: null,
    countdownHours: null,
    rsvpForm: null,
    rsvpSuccess: null,
    rsvpError: null
  };

  // ================================
  // Navigation
  // ================================
  function initNavigation() {
    elements.navToggle = document.querySelector('.nav-toggle');
    elements.navMenu = document.querySelector('.nav-menu');

    if (elements.navToggle && elements.navMenu) {
      elements.navToggle.addEventListener('click', toggleMobileMenu);

      // Close menu when clicking nav links
      const navLinks = elements.navMenu.querySelectorAll('.nav-link');
      navLinks.forEach(link => {
        link.addEventListener('click', () => {
          if (state.mobileMenuOpen) {
            closeMobileMenu();
          }
        });
      });

      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && state.mobileMenuOpen) {
          closeMobileMenu();
        }
      });
    }
  }

  function toggleMobileMenu() {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    elements.navMenu.classList.toggle('is-open', state.mobileMenuOpen);
    elements.navToggle.setAttribute('aria-expanded', state.mobileMenuOpen);
  }

  function closeMobileMenu() {
    state.mobileMenuOpen = false;
    elements.navMenu.classList.remove('is-open');
    elements.navToggle.setAttribute('aria-expanded', 'false');
  }

  // ================================
  // Smooth Scroll (GSAP or native)
  // ================================
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();

        if (hasGSAP && typeof ScrollToPlugin !== 'undefined') {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: target, offsetY: 70 },
            ease: 'power2.inOut'
          });
        } else {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  // ================================
  // Countdown Timer
  // ================================
  function initCountdown() {
    elements.countdownDays = document.getElementById('countdown-days');
    elements.countdownHours = document.getElementById('countdown-hours');

    // Only init if countdown elements exist (hero page)
    if (elements.countdownDays) {
      updateCountdown();
      state.countdownInterval = setInterval(updateCountdown, 60000); // Update every minute
    }
  }

  function updateCountdown() {
    const now = new Date();
    const diff = WEDDING_DATE - now;

    if (diff <= 0) {
      // Wedding day or past
      clearInterval(state.countdownInterval);
      displayWeddingDayMessage();
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    // Animate number changes
    updateCountdownUnit(elements.countdownDays, padNumber(days));
    updateCountdownUnit(elements.countdownHours, padNumber(hours));
  }

  function updateCountdownUnit(element, newValue) {
    if (!element) return;
    const currentValue = element.textContent;

    // Only animate if value changed and not initial load
    if (currentValue !== '--' && currentValue !== newValue) {
      element.classList.add('updating');
      setTimeout(() => {
        element.textContent = newValue;
        element.classList.remove('updating');
      }, 150);
    } else {
      element.textContent = newValue;
    }
  }

  function padNumber(num) {
    return num.toString().padStart(2, '0');
  }

  function displayWeddingDayMessage() {
    const countdown = document.querySelector('.countdown');
    if (countdown) {
      countdown.innerHTML = '<p class="wedding-day-message">Today\'s the day!</p>';
    }
  }

  // ================================
  // RSVP Form
  // ================================
  function initRSVPForm() {
    elements.rsvpForm = document.getElementById('rsvp-form');
    elements.rsvpSuccess = document.getElementById('rsvp-success');
    elements.rsvpError = document.getElementById('rsvp-error');
    elements.submitBtn = document.getElementById('submit-btn');
    elements.submitText = document.querySelector('.submit-text');
    elements.submitLoading = document.querySelector('.submit-loading');
    elements.rsvpAnother = document.getElementById('rsvp-another');
    elements.rsvpRetry = document.getElementById('rsvp-retry');

    if (elements.rsvpForm) {
      elements.rsvpForm.addEventListener('submit', handleRSVPSubmit);

      // Real-time validation on blur
      const inputs = elements.rsvpForm.querySelectorAll('.form-input, .form-textarea');
      inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
      });
    }

    // "Submit Another" button
    if (elements.rsvpAnother) {
      elements.rsvpAnother.addEventListener('click', resetRSVPForm);
    }

    // "Try Again" button
    if (elements.rsvpRetry) {
      elements.rsvpRetry.addEventListener('click', hideRSVPError);
    }
  }

  function validateField(input) {
    const name = input.name;
    const value = input.value.trim();
    const errorEl = document.getElementById(`${name}-error`) ||
                    input.parentElement.querySelector('.form-error');

    let errorMessage = '';

    // Required field validation
    if (input.required && !value) {
      errorMessage = 'This field is required';
    }

    // Specific validations
    if (value) {
      switch (name) {
        case 'email':
          if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            errorMessage = 'Please enter a valid email address';
          }
          break;
        case 'phone':
          // Basic phone validation - at least 10 digits
          const digits = value.replace(/\D/g, '');
          if (digits.length < 10) {
            errorMessage = 'Please enter a valid phone number';
          }
          break;
        case 'guestNames':
          // Check if at least one name is entered
          const names = value.split('\n').filter(n => n.trim());
          if (names.length === 0) {
            errorMessage = 'Please enter at least one guest name';
          }
          break;
      }
    }

    // Show/hide error
    if (errorMessage) {
      input.classList.add('error');
      if (errorEl) errorEl.textContent = errorMessage;
      return false;
    } else {
      input.classList.remove('error');
      if (errorEl) errorEl.textContent = '';
      return true;
    }
  }

  function clearFieldError(input) {
    if (input.classList.contains('error')) {
      input.classList.remove('error');
      const errorEl = input.parentElement.querySelector('.form-error');
      if (errorEl) errorEl.textContent = '';
    }
  }

  function validateForm() {
    const inputs = elements.rsvpForm.querySelectorAll('[required]');
    let isValid = true;

    inputs.forEach(input => {
      if (!validateField(input)) {
        isValid = false;
      }
    });

    // Also validate email if filled (not required but should be valid)
    const emailInput = elements.rsvpForm.querySelector('[name="email"]');
    if (emailInput && emailInput.value.trim()) {
      if (!validateField(emailInput)) {
        isValid = false;
      }
    }

    return isValid;
  }

  async function handleRSVPSubmit(e) {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      // Focus first error field
      const firstError = elements.rsvpForm.querySelector('.error');
      if (firstError) firstError.focus();
      return;
    }

    // Get form data
    const formData = new FormData(elements.rsvpForm);
    const data = Object.fromEntries(formData.entries());

    // Calculate guest count
    const guestNames = data.guestNames.split('\n').filter(n => n.trim());
    data.guestCount = guestNames.length;

    // Show loading state
    setLoadingState(true);

    try {
      await submitRSVP(data);
      showRSVPSuccess();
    } catch (error) {
      console.error('RSVP submission error:', error);
      showRSVPError();
    } finally {
      setLoadingState(false);
    }
  }

  function setLoadingState(isLoading) {
    if (elements.submitBtn) {
      elements.submitBtn.disabled = isLoading;
    }
    if (elements.submitText) {
      elements.submitText.hidden = isLoading;
    }
    if (elements.submitLoading) {
      elements.submitLoading.hidden = !isLoading;
    }
  }

  async function submitRSVP(data) {
    // Check if endpoint is configured
    if (!RSVP_ENDPOINT || RSVP_ENDPOINT === 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE') {
      // Demo mode - simulate network delay and log data
      console.log('RSVP Demo Mode - Data would be submitted:', data);
      await new Promise(resolve => setTimeout(resolve, 1500));
      return { status: 'success' };
    }

    // Submit to Google Apps Script
    const response = await fetch(RSVP_ENDPOINT, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'text/plain',
      },
      body: JSON.stringify(data)
    });

    const result = await response.json();

    if (result.status === 'error') {
      throw new Error(result.message || 'Submission failed');
    }

    return result;
  }

  function showRSVPSuccess() {
    if (elements.rsvpForm) elements.rsvpForm.hidden = true;
    if (elements.rsvpSuccess) elements.rsvpSuccess.hidden = false;
    if (elements.rsvpError) elements.rsvpError.hidden = true;

    // Scroll to success message
    if (elements.rsvpSuccess) {
      if (hasGSAP && typeof ScrollToPlugin !== 'undefined') {
        gsap.to(window, { duration: 0.8, scrollTo: { y: elements.rsvpSuccess, offsetY: 100 }, ease: 'power2.inOut' });
      } else {
        elements.rsvpSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }

  function showRSVPError() {
    if (elements.rsvpError) elements.rsvpError.hidden = false;
  }

  function hideRSVPError() {
    if (elements.rsvpError) elements.rsvpError.hidden = true;
  }

  function resetRSVPForm() {
    if (elements.rsvpForm) {
      elements.rsvpForm.reset();
      elements.rsvpForm.hidden = false;

      // Clear all error states
      const errorInputs = elements.rsvpForm.querySelectorAll('.error');
      errorInputs.forEach(input => input.classList.remove('error'));

      const errorMessages = elements.rsvpForm.querySelectorAll('.form-error');
      errorMessages.forEach(el => el.textContent = '');
    }
    if (elements.rsvpSuccess) elements.rsvpSuccess.hidden = true;
    if (elements.rsvpError) elements.rsvpError.hidden = true;

    // Scroll to form
    if (elements.rsvpForm) {
      if (hasGSAP && typeof ScrollToPlugin !== 'undefined') {
        gsap.to(window, { duration: 0.8, scrollTo: { y: elements.rsvpForm, offsetY: 70 }, ease: 'power2.inOut' });
      } else {
        elements.rsvpForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }

  // ================================
  // GSAP Animations
  // ================================
  function initGSAPAnimations() {
    if (!hasGSAP) return;

    gsap.registerPlugin(ScrollTrigger);
    if (typeof ScrollToPlugin !== 'undefined') {
      gsap.registerPlugin(ScrollToPlugin);
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Show everything immediately
      document.querySelectorAll('.reveal').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    // Mark body as js-loaded for CSS hooks
    document.body.classList.add('js-loaded');

    // Scroll reveal for .reveal elements
    initGSAPScrollReveal();

    // Page load animation (index.html hero only)
    initHeroAnimation();

    // Floral parallax (desktop only)
    initFloralParallax();

    // Navbar scroll transition
    initNavbarScroll();

    // Hover micro-interactions
    initHoverEffects();

    // Floral sway
    initFloralSway();
  }

  function initGSAPScrollReveal() {
    gsap.utils.toArray('.reveal').forEach(el => {
      // Skip hero panel — it animates via the hero timeline
      if (el.closest('.hero')) return;

      gsap.from(el, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });

    // Stagger for animate-in elements
    gsap.utils.toArray('.reveal-stagger').forEach(group => {
      const items = group.querySelectorAll('.reveal-item');
      if (items.length === 0) return;

      gsap.from(items, {
        y: 40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: group,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      });
    });
  }

  function initHeroAnimation() {
    const heroPanel = document.querySelector('.hero-panel');
    if (!heroPanel) return;

    const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    // 1. Ganesha icon
    const ganesha = heroPanel.querySelector('.ganesha-icon');
    if (ganesha) {
      tl.from(ganesha, { scale: 0, opacity: 0, duration: 0.8, ease: 'back.out(1.7)' });
    }

    // 2. Gold divider
    const divider = heroPanel.querySelector('.ornamental-divider');
    if (divider) {
      tl.from(divider, { scaleX: 0, opacity: 0, duration: 0.6 }, '-=0.3');
    }

    // 3. Mughal arch — draw in stroke
    const archPaths = heroPanel.querySelectorAll('.arch-frame path');
    if (archPaths.length > 0) {
      archPaths.forEach(path => {
        const length = path.getTotalLength ? path.getTotalLength() : 1200;
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
      });
      tl.to(archPaths, {
        strokeDashoffset: 0,
        duration: 1.2,
        ease: 'power1.inOut',
        stagger: 0.2
      }, '-=0.2');
    }

    // 4. Couple names — word by word reveal
    const coupleNames = heroPanel.querySelector('.couple-names');
    if (coupleNames) {
      tl.from(coupleNames, { y: 60, opacity: 0, duration: 0.8 }, '-=0.4');
    }

    // 5. Floral elements
    const florals = heroPanel.querySelectorAll('.hero-floral');
    if (florals.length > 0) {
      tl.from(florals, { scale: 0, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)' }, '-=0.3');
    }

    // 6. Date / venue / CTA
    const venueInfo = heroPanel.querySelector('.venue-info');
    const ctaButton = heroPanel.querySelector('.cta-button');
    const regards = heroPanel.querySelector('.hero-regards');
    const animateInEls = [venueInfo, ctaButton, regards].filter(Boolean);
    if (animateInEls.length > 0) {
      tl.from(animateInEls, { y: 30, opacity: 0, duration: 0.6, stagger: 0.1 }, '-=0.2');
    }

    // 7. Countdown
    const countdown = heroPanel.querySelector('.countdown');
    if (countdown) {
      tl.from(countdown, { scale: 0.8, opacity: 0, duration: 0.6 }, '-=0.3');
    }
  }

  function initFloralParallax() {
    // Desktop only
    const mm = gsap.matchMedia();
    mm.add('(min-width: 768px)', () => {
      gsap.utils.toArray('.hero-floral').forEach(floral => {
        gsap.to(floral, {
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
          }
        });
      });
    });
  }

  function initNavbarScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    ScrollTrigger.create({
      start: 80,
      onUpdate: (self) => {
        if (self.scroll() > 80) {
          header.style.background = 'rgba(27, 94, 59, 0.98)';
          header.style.borderBottomColor = 'rgba(212, 168, 67, 0.6)';
          header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3), 0 0 15px rgba(212, 168, 67, 0.1)';
        } else {
          header.style.background = 'rgba(27, 94, 59, 0.9)';
          header.style.borderBottomColor = 'rgba(212, 168, 67, 0.4)';
          header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.2)';
        }
      }
    });
  }

  function initHoverEffects() {
    // Gold glow on cards/buttons on hover
    const hoverTargets = document.querySelectorAll('.event-card, .route-card, .tip-card');
    hoverTargets.forEach(el => {
      el.addEventListener('mouseenter', () => {
        gsap.to(el, {
          y: -3,
          boxShadow: '0 12px 30px rgba(0,0,0,0.3), 0 0 20px rgba(212,168,67,0.15)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          y: 0,
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          duration: 0.3,
          ease: 'power2.out'
        });
      });
    });
  }

  function initFloralSway() {
    const florals = document.querySelectorAll('.hero-floral');
    florals.forEach((floral, i) => {
      gsap.to(floral, {
        rotation: i % 2 === 0 ? 3 : -3,
        duration: 3 + i,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1
      });
    });
  }

  // ================================
  // IntersectionObserver Fallback
  // ================================
  function initScrollEffectsFallback() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      document.querySelectorAll('.reveal').forEach(el => {
        el.classList.add('revealed');
      });
      return;
    }

    // Mark body as js-loaded for CSS hooks
    document.body.classList.add('js-loaded');

    // Create Intersection Observer
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
      revealObserver.observe(el);
    });

    // Stagger reveal for grouped elements
    const staggerGroups = document.querySelectorAll('.reveal-stagger');
    staggerGroups.forEach(group => {
      const children = group.querySelectorAll('.reveal-item');
      children.forEach((child, index) => {
        child.style.transitionDelay = `${index * 0.1}s`;
      });
    });
  }

  // ================================
  // Utilities
  // ================================
  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  // ================================
  // Initialization
  // ================================
  function init() {
    // Cache DOM elements and initialize features
    initNavigation();
    initCountdown();
    initRSVPForm();
    initSmoothScroll();

    // Use GSAP if available, otherwise fallback to IntersectionObserver
    if (hasGSAP) {
      initGSAPAnimations();
    } else {
      initScrollEffectsFallback();
    }

    console.log('Wedding website initialized' + (hasGSAP ? ' (GSAP)' : ' (fallback)'));
  }

  // Start app when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
