(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!isOpen));
      nav.classList.toggle('is-open', !isOpen);
      toggle.querySelector('.sr-only').textContent = isOpen ? 'Open navigation' : 'Close navigation';
    });

    nav.addEventListener('click', (event) => {
      if (event.target.closest('a')) {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        toggle.querySelector('.sr-only').textContent = 'Open navigation';
      }
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('is-open');
        toggle.querySelector('.sr-only').textContent = 'Open navigation';
        toggle.focus();
      }
    });
  }

  document.querySelectorAll('[data-year]').forEach((node) => {
    node.textContent = new Date().getFullYear();
  });
})();
