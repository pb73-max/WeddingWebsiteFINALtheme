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

    if (elements.rsvpForm) {
      elements.rsvpForm.addEventListener('submit', handleRSVPSubmit);
    }
  }

  async function handleRSVPSubmit(e) {
    e.preventDefault();

    // Validation will be added in Phase 4
    const formData = new FormData(elements.rsvpForm);
    const data = Object.fromEntries(formData.entries());

    // Show loading state
    const submitBtn = elements.rsvpForm.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    try {
      await submitRSVP(data);
      showRSVPSuccess();
    } catch (error) {
      console.error('RSVP submission error:', error);
      showRSVPError();
    } finally {
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send RSVP';
      }
    }
  }

  async function submitRSVP(data) {
    if (!RSVP_ENDPOINT) {
      // Placeholder - remove when endpoint is added
      console.log('RSVP Data:', data);
      return Promise.resolve({ status: 'success' });
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
  }

  function showRSVPError() {
    if (elements.rsvpError) elements.rsvpError.hidden = false;
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
