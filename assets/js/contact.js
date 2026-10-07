(() => {
  const form = document.querySelector('#quote-form');
  const message = document.querySelector('#form-message');
  const previewButton = form?.querySelector('[data-preview-submit]');
  if (!form || !message || !previewButton) return;

  const service = new URLSearchParams(window.location.search).get('service');
  const serviceField = form.elements.namedItem('service');
  if (service && serviceField) {
    const matchingOption = Array.from(serviceField.options).find((option) => option.text.toLowerCase() === service.toLowerCase());
    if (matchingOption) serviceField.value = matchingOption.value;
  }

  previewButton.addEventListener('click', () => {
    if (!form.reportValidity()) return;
    message.textContent = 'Required fields are complete. This is a local preview only, so no project details were sent or stored.';
    message.classList.add('is-visible');
  });

  form.addEventListener('input', () => {
    message.textContent = '';
    message.classList.remove('is-visible');
  });
})();
