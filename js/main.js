/**
 * Prerna & Arpit Wedding Website
 * Main JavaScript - All functionality in single IIFE
 */
(function() {
  'use strict';

  // ================================
  // Constants
  // ================================
  const WEDDING_DATE = new Date('2026-04-23T00:00:00+05:30'); // IST
  const RSVP_ENDPOINT = ''; // Google Apps Script URL - add in Phase 12

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
    countdownMinutes: null,
    countdownSeconds: null,
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
  // Countdown Timer
  // ================================
  function initCountdown() {
    elements.countdownDays = document.getElementById('countdown-days');
    elements.countdownHours = document.getElementById('countdown-hours');
    elements.countdownMinutes = document.getElementById('countdown-minutes');
    elements.countdownSeconds = document.getElementById('countdown-seconds');

    // Only init if countdown elements exist (hero page)
    if (elements.countdownDays) {
      updateCountdown();
      state.countdownInterval = setInterval(updateCountdown, 1000);
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
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    elements.countdownDays.textContent = padNumber(days);
    elements.countdownHours.textContent = padNumber(hours);
    elements.countdownMinutes.textContent = padNumber(minutes);
    elements.countdownSeconds.textContent = padNumber(seconds);
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
    if (!RSVP_ENDPOINT) {
      // Simulate network delay for demo
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('RSVP Data:', data);
      return { status: 'success' };
    }

    const response = await fetch(RSVP_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return response.json();
  }

  function showRSVPSuccess() {
    if (elements.rsvpForm) elements.rsvpForm.hidden = true;
    if (elements.rsvpSuccess) elements.rsvpSuccess.hidden = false;
    if (elements.rsvpError) elements.rsvpError.hidden = true;

    // Scroll to success message
    if (elements.rsvpSuccess) {
      elements.rsvpSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
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
      elements.rsvpForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  // ================================
  // Scroll Effects
  // ================================
  function initScrollEffects() {
    // Intersection Observer for scroll animations will be added in Phase 9
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
    initScrollEffects();

    console.log('Wedding website initialized');
  }

  // Start app when DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
