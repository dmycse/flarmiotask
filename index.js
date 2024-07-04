function formHandler() {

  let form = document.forms.customForm;
  let formInput = form.numInput;
  let formBtn = form.btn;
  let error = document.querySelector('.form__error');

  let formValidation = () => {
    let value = formInput.value.trim();

    if (!value || isNaN(+value) || +value < 10) {
      formInput.classList.add('error');
      error.classList.add('active');
      formBtn.classList.remove('active');
      return;
    }

    formInput.classList.remove('error');
    error.classList.remove('active');
    formBtn.classList.add('active');
    formBtn.disabled = false;
  };


  formInput.oninput = () => {
    formValidation();
  };

  form.onsubmit = (e) => {
    e.preventDefault();
    console.log('input value ->', formInput.value.trim());
    formInput.value = '';
    formBtn.classList.remove('active');
    formBtn.disabled = true;
  };

}


document.addEventListener('DOMContentLoaded', () => {
  formHandler();
});