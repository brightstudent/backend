
const startBtn = document.querySelector('input[type="submit"]');

function saveEmail (e) {
  e.preventDefault()
  let email = document.querySelector('input[type=email]').value;
  localStorage.setItem('email', email)
  window.location.href = "/";
}

startBtn.addEventListener('click', saveEmail)
