(() => {
  const form = document.querySelector('#quote-form');
  const message = document.querySelector('#form-message');
  if (!form || !message) return;

  const service = new URLSearchParams(window.location.search).get('service');
  const serviceField = form.elements.namedItem('service');
  if (service && serviceField) {
    const matchingOption = Array.from(serviceField.options).find((option) => option.text.toLowerCase() === service.toLowerCase());
    if (matchingOption) serviceField.value = matchingOption.value;
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    message.textContent = 'This form is a preview and is not connected to a submission service. No information was sent. Configure a form endpoint before accepting inquiries.';
    message.classList.add('is-visible');
  });
})();
