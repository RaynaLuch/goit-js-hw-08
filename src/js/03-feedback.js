import throttle from 'lodash.throttle';

const myForm = document.querySelector('form.feedback-form');
const email = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');
myForm.addEventListener('submit', () => {
  const formInput = {
    email: email.value,
    message: message.value,
  };
  console.log(formInput);
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
});

try {
  const storedInput = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(storedInput);
  email.value = storedInput.email;
  message.value = storedInput.message;
} catch (error) {}
myForm.addEventListener(
  'input',
  throttle(function (data) {
    const formInput = {
      email: email.value,
      message: message.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formInput));
  }, 500)
);
