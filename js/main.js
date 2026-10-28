/**
 * Personal Developer Portfolio & Project Showcase
 * Main Interactive Logic
 * Datheon Full Stack Web Development Internship
 * 
 * Stack: Pure Vanilla JavaScript (ES6+, No External Frameworks or Dependencies)
 * Target: WCAG 2.2 Level AA Accessible & Fully Responsive
 */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initSmoothScroll();
  initScrollSpy();
  
  console.info('Personal Developer Portfolio: all JavaScript modules initialized.');
});

/* ==========================================================================
   1. Theme Management Module (FR-003)
   ========================================================================== */
function initTheme() {
  const STORAGE_KEY = 'portfolio-theme';
  const themeToggleBtn = document.getElementById('theme-toggle');
  const root = document.documentElement;

  // Safe localStorage helper
  const getSavedTheme = () => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      console.warn('localStorage is not accessible:', e);
      return null;
    }
  };

  const saveTheme = (theme) => {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      console.warn('Unable to persist theme to localStorage:', e);
    }
  };

  // Determine initial theme: saved preference -> OS preference -> default 'dark'
  const getSystemTheme = () => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches
      ? 'light'
      : 'dark';
  };

  const applyTheme = (theme, persist = false) => {
    root.setAttribute('data-theme', theme);
    
    if (themeToggleBtn) {
      const nextTheme = theme === 'dark' ? 'light' : 'dark';
      themeToggleBtn.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
      themeToggleBtn.setAttribute('title', `Switch to ${nextTheme} theme`);
    }

    if (persist) {
      saveTheme(theme);
    }
  };

  // Initialize theme on page load
  const initialTheme = getSavedTheme() || getSystemTheme();
  applyTheme(initialTheme);

  // Toggle button event listener
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = root.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme, true);
    });
  }

  // Listen to OS theme changes if user hasn't explicitly set a preference
  if (window.matchMedia) {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');
    mediaQuery.addEventListener('change', (e) => {
      if (!getSavedTheme()) {
        applyTheme(e.matches ? 'light' : 'dark');
      }
    });
  }
}

/* ==========================================================================
   2. Mobile Navigation Drawer Module (FR-002)
   ========================================================================== */
function initMobileNav() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const primaryNav = document.getElementById('primary-nav');
  const navLinks = document.querySelectorAll('.nav-link');
  const header = document.getElementById('header');

  if (!menuBtn || !primaryNav) return;

  const openMenu = () => {
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.setAttribute('aria-label', 'Close navigation menu');
    primaryNav.classList.add('is-open');
    document.body.classList.add('menu-open');
  };

  const closeMenu = (restoreFocus = false) => {
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.setAttribute('aria-label', 'Open navigation menu');
    primaryNav.classList.remove('is-open');
    document.body.classList.remove('menu-open');

    if (restoreFocus) {
      menuBtn.focus();
    }
  };

  // Toggle button click handler
  menuBtn.addEventListener('click', () => {
    const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu(false);
    } else {
      openMenu();
    }
  });

  // Close when selecting any navigation link
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (primaryNav.classList.contains('is-open')) {
        closeMenu(false);
      }
    });
  });

  // Close on Escape key press (Keyboard Accessibility)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && primaryNav.classList.contains('is-open')) {
      closeMenu(true);
    }
  });

  // Close when clicking outside of header/drawer
  document.addEventListener('click', (e) => {
    if (primaryNav.classList.contains('is-open')) {
      if (header && !header.contains(e.target)) {
        closeMenu(false);
      }
    }
  });

  // Close automatically on desktop resize (breakpoint >= 868px)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 868 && primaryNav.classList.contains('is-open')) {
      closeMenu(false);
    }
  });
}

/* ==========================================================================
   3. Smooth Scroll Navigation Module (FR-004)
   ========================================================================== */
function initSmoothScroll() {
  const isReducedMotion = () => {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  // Intercept all internal anchor links
  document.addEventListener('click', (e) => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;

    const targetId = anchor.getAttribute('href');
    if (targetId === '#' || targetId === '#!') return;

    const targetElement = document.querySelector(targetId);
    if (!targetElement) return;

    e.preventDefault();

    targetElement.scrollIntoView({
      behavior: isReducedMotion() ? 'auto' : 'smooth',
      block: 'start'
    });

    // Update URL hash without causing a page jump
    if (history.pushState) {
      history.pushState(null, '', targetId);
    } else {
      window.location.hash = targetId;
    }

    // Set focus to target section for keyboard / screen-reader accessibility
    if (targetElement.tabIndex < 0) {
      targetElement.setAttribute('tabindex', '-1');
    }
    targetElement.focus({ preventScroll: true });
  });

  // Back-to-Top button
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: isReducedMotion() ? 'auto' : 'smooth'
      });
      const header = document.getElementById('header');
      if (header) {
        header.focus({ preventScroll: true });
      }
    });
  }
}

/* ==========================================================================
   4. ScrollSpy Active Section Indicator (FR-001)
   ========================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;
  if (!('IntersectionObserver' in window)) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
          } else {
            link.classList.remove('active');
            link.removeAttribute('aria-current');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => observer.observe(section));
}
