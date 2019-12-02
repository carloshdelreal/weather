function getBulletsValue(radios) {
  for (let i = 0; i < radios.length; i += 1) {
    if (radios[i].checked) {
      return radios[i].value;
    }
  }
  return null;
}

function formDataValid() {
  const input = document.querySelectorAll('.form input');

  const city = input[0].value;

  if (city === '') {
    input[0].classList.add('is-invalid');
    return false;
  }
  input[0].classList.remove('is-invalid');
  return true;
}

function getFormData() {
  const input = document.querySelectorAll('.form input');
  const bullets = document.querySelectorAll('.form .bullets .form-check-input');

  const city = input[0].value;
  const tempFormat = getBulletsValue(bullets);

  if (formDataValid()) {
    input[0].value = '';

    return {
      city,
      tempFormat
    };
  }
  return null;
}

export { getFormData, getBulletsValue };
