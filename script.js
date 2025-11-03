'use strict';

// Toggle navigation on small screens
(function () {
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', function () {
    var isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
})();

// Set current year in footer
(function () {
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();

// Simple client-side validation enhancement (progressive)
(function () {
  var form = document.querySelector('form[name="contact"]');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    var name = /** @type {HTMLInputElement} */(form.querySelector('#name'));
    var phone = /** @type {HTMLInputElement} */(form.querySelector('#phone'));
    var model = /** @type {HTMLInputElement} */(form.querySelector('#model'));
    if (!name.value.trim() || !phone.value.trim() || !model.value.trim()) {
      e.preventDefault();
      alert('Пожалуйста, заполните обязательные поля.');
    }
  });
})();



