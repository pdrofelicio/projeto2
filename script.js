document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const tableBody = document.querySelector('#contacts-table tbody');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');

    const name = nameInput.value;
    const phone = phoneInput.value;

    if (name && phone) {
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${phone}</td>
      `;
      tableBody.appendChild(newRow);

      nameInput.value = '';
      phoneInput.value = '';
    }
  });
});
