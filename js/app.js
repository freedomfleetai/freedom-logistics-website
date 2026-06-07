/* Freedom Logistics Website V2 — app.js
   Minimal vanilla JS: mobile nav toggle + dropdown toggle.
   No dependencies, no build step. */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var hamburger = document.querySelector('.hamburger');
    var nav = document.querySelector('.main-nav');

    // Mobile menu open/close
    if (hamburger && nav) {
      hamburger.addEventListener('click', function () {
        var open = nav.classList.toggle('open');
        hamburger.classList.toggle('open', open);
        hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    }

    // Dropdown: hover handles desktop (CSS). Click toggles on touch / mobile.
    document.querySelectorAll('.has-dropdown > a').forEach(function (trigger) {
      trigger.addEventListener('click', function (e) {
        // Only intercept when the dropdown is acting as a tap target (no hover)
        var isMobile = window.matchMedia('(max-width: 760px)').matches;
        var isTouch = window.matchMedia('(hover: none)').matches;
        if (isMobile || isTouch) {
          e.preventDefault();
          trigger.parentElement.classList.toggle('open');
        }
      });
    });

    // Close mobile menu when a real link is followed
    document.querySelectorAll('.main-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (!link.parentElement.classList.contains('has-dropdown')) {
          nav && nav.classList.remove('open');
          hamburger && hamburger.classList.remove('open');
        }
      });
    });
  });
})();
