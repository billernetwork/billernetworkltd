const dialog = document.querySelector('#contact-dialog');
const form = document.querySelector('#contact-form');
const formView = document.querySelector('#form-view');
const successView = document.querySelector('#success-view');
let opener;
document.querySelectorAll('[data-contact]').forEach(button => {
  button.addEventListener('click', () => {
    opener = button;
    formView.hidden = false;
    successView.hidden = true;
    dialog.showModal();
  });
});
function closeContact() { dialog.close(); }
document.querySelector('.close').addEventListener('click', closeContact);
document.querySelector('#done').addEventListener('click', closeContact);
dialog.addEventListener('click', event => { if (event.target === dialog) { const bounds = dialog.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) closeContact(); } });
dialog.addEventListener('close', () => { form.reset(); opener?.focus(); });
form.addEventListener('submit', event => {
  event.preventDefault();
  form.reset();
  formView.hidden = true;
  successView.hidden = false;
  dialog.scrollTop = 0;
  document.querySelector('#done').focus();
});
document.querySelector('#year').textContent = new Date().getFullYear();
