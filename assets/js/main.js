/**
 * Portfolio Main Script — Ilham Faza Loka
 * Handles theme toggle, mobile menu, active nav highlight, copy email, and scroll reveal.
 */

(function () {
  'use strict';

  const root = document.documentElement;
  const themeToggleBtn = document.getElementById('theme-toggle');
  const sunIcon = document.getElementById('icon-sun');
  const moonIcon = document.getElementById('icon-moon');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links .nav-link');
  const desktopLinks = document.querySelectorAll('.nav-links .nav-link');
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const yearEl = document.getElementById('footer-year');

  // 1. Theme Management (Dark Mode Default)
  const STORAGE_KEY = 'portfolio-theme';

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    const isLight = theme === 'light';
    if (sunIcon && moonIcon) {
      sunIcon.style.display = isLight ? 'none' : 'block';
      moonIcon.style.display = isLight ? 'block' : 'none';
    }
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute(
        'aria-label',
        isLight ? 'Aktifkan Dark Mode' : 'Aktifkan Light Mode'
      );
      themeToggleBtn.setAttribute(
        'title',
        isLight ? 'Beralih ke Dark Mode' : 'Beralih ke Light Mode'
      );
    }
  }

  const savedTheme = localStorage.getItem(STORAGE_KEY) || 'dark';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'dark';
      const next = current === 'dark' ? 'light' : 'dark';
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
    });
  }

  // 2. Mobile Hamburger Menu
  function closeMobileMenu() {
    if (!mobileMenu || !hamburgerBtn) return;
    mobileMenu.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
  }

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileMenu.classList.toggle('open');
      hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
    });

    mobileLinks.forEach((link) => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeMobileMenu();
      }
    });
  }

  // 3. Active Navigation Highlight on Scroll
  const sections = document.querySelectorAll('main section[id]');
  if (sections.length > 0 && 'IntersectionObserver' in window) {
    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            desktopLinks.forEach((link) => {
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px' }
    );

    sections.forEach((sec) => navObserver.observe(sec));
  }

  // 4. Scroll Reveal Animation
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => revealObserver.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add('visible'));
  }

  // 5. Copy Email to Clipboard
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', async () => {
      const email = copyEmailBtn.getAttribute('data-email') || 'fazailham0@gmail.com';
      const originalText = copyEmailBtn.textContent;
      try {
        await navigator.clipboard.writeText(email);
        copyEmailBtn.textContent = 'Tersalin!';
        setTimeout(() => {
          copyEmailBtn.textContent = originalText;
        }, 2000);
      } catch {
        // Fallback if clipboard API is unavailable
        window.location.href = `mailto:${email}`;
      }
    });
  }

  // 6. Footer Year
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();
