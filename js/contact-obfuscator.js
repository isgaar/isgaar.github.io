/* ==========================================================================
   CONTACT & IDENTITY OBFUSCATOR SERVICE
   Prevents search engines, web crawlers, and scrapers from indexing
   personal name, phone number, and private contact data in static HTML.
   ========================================================================== */

(function () {
  'use strict';

  function decode(b64) {
    try {
      return decodeURIComponent(escape(window.atob(b64)));
    } catch (e) {
      return window.atob(b64);
    }
  }

  var registry = {
    'name-first': 'SXNtYWVs',
    'name-middle': 'R2FzcGFy',
    'name-last': 'Q3J1eg==',
    'name-full': 'SXNtYWVsIEdhc3BhciBDcnV6',
    'phone-display': 'KzUyIDIyMSAzNDcgOTEwNg==',
    'phone-local': 'MjIxIDM0NyA5MTA2',
    'phone-tel': 'KzUyMjIxMzQ3OTEwNg==',
    'email-address': 'aXNtYWVsZ2FzcGNydXpAb3V0bG9vay5jb20=',
    'linkedin-url': 'aHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2lzbWFlbC1nYXNwYXItY3J1ei05MzJiOTMzODkv',
    'linkedin-handle': 'aXNtYWVsLWdhc3Bhci1jcnV6'
  };

  function hydrate() {
    // 1. Text elements
    document.querySelectorAll('[data-hydrate]').forEach(function (el) {
      var key = el.getAttribute('data-hydrate');
      if (registry[key]) {
        el.textContent = decode(registry[key]);
      }
    });

    // 2. Links (phone, email, linkedin)
    document.querySelectorAll('[data-hydrate-href]').forEach(function (el) {
      var key = el.getAttribute('data-hydrate-href');
      if (key === 'phone') {
        el.setAttribute('href', 'tel:' + decode(registry['phone-tel']));
      } else if (key === 'email') {
        el.setAttribute('href', 'mailto:' + decode(registry['email-address']));
      } else if (key === 'linkedin') {
        el.setAttribute('href', decode(registry['linkedin-url']));
      }
    });

  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', hydrate);
  } else {
    hydrate();
  }
})();
