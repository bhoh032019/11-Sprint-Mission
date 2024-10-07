document.addEventListener('DOMContentLoaded', function () {
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const failureMessage = document.querySelector('.failure-message');
  const failureMessageTwo = document.querySelector('.failure-message2');
  const pwFailureMessage = document.querySelector('.pw-failure-message');
  const pwFailureMessageTwo = document.querySelector('.pw-failure-message2');
  const loginButton = document.querySelector('.sign-button');
  const togglePassword = document.getElementById('togglePassword');

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateForm() {
    const isEmailValid = validateEmail(emailInput.value);
    const isPasswordValid = passwordInput.value.length >= 8;

    if (
      emailInput.value === '' ||
      passwordInput.value === '' ||
      !isEmailValid ||
      !isPasswordValid
    ) {
      loginButton.disabled = true;
      return false;
    } else {
      loginButton.disabled = false;
      return true;
    }
  }

  emailInput.addEventListener('focusout', () => {
    if (emailInput.value === '') {
      emailInput.classList.add('error');
      failureMessage.classList.remove('hide');
      failureMessageTwo.classList.add('hide');
    } else if (!validateEmail(emailInput.value)) {
      emailInput.classList.add('error');
      failureMessage.classList.add('hide');
      failureMessageTwo.classList.remove('hide');
    } else {
      emailInput.classList.remove('error');
      failureMessage.classList.add('hide');
      failureMessageTwo.classList.add('hide');
    }
    validateForm();
  });

  passwordInput.addEventListener('focusout', () => {
    if (passwordInput.value === '') {
      passwordInput.classList.add('error');
      pwFailureMessage.classList.remove('hide');
      pwFailureMessageTwo.classList.add('hide');
    } else if (passwordInput.value.length < 8) {
      passwordInput.classList.add('error');
      pwFailureMessage.classList.add('hide');
      pwFailureMessageTwo.classList.remove('hide');
    } else {
      passwordInput.classList.remove('error');
      pwFailureMessage.classList.add('hide');
      pwFailureMessageTwo.classList.add('hide');
    }
    validateForm();
  });

  loginButton.addEventListener('click', (event) => {
    event.preventDefault();
    if (validateForm()) {
      window.location.href = './items.html';
    }
  });

  togglePassword.addEventListener('click', function () {
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      togglePassword.src = './images/icon/btn_visibility_off_24px.png';
    } else {
      passwordInput.type = 'password';
      togglePassword.src = './images/icon/btn_visibility_on_24px.png';
    }
  });
});
