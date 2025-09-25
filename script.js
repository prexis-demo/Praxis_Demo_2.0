document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('rezeptForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('✅ Demo: Ihre Anfrage wurde erfasst (keine echten Daten).');
    form.reset();
  });
});
