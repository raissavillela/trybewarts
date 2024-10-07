const enterBtn = document.getElementById('submit-btn0');
const email = document.getElementById('input-email2');
const password = document.getElementById('input-password');

enterBtn.addEventListener('click', () => {
  if (email.value === 'tryber@teste.com' && password.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const submitBtn = document.querySelector('#submit-btn');
const agreement = document.getElementById('agreement');

function leadSubmit(event) {
  event.preventDefault();
}

window.onload = () => {
  submitBtn.addEventListener('click', leadSubmit);
};

const enabledSubmitButton = () => {
  submitBtn.disabled = !agreement.checked;
};

window.onload = () => {
  agreement.addEventListener('change', enabledSubmitButton);
};

const textArea = document.getElementById('textarea');
const textCounter = document.getElementById('counter');

textArea.addEventListener('input', () => {
  const saveCharactersNumber = textArea.value.length;
  textCounter.innerText = 500 - saveCharactersNumber;
});
