let val = require('./blocks/registration-form/form-validation')

document.addEventListener('change', (event) => val.handleChange(event));

document.addEventListener('focusin', (event) => {
    if (event.target.value === '') {
        val.clearTips();
    } else {
        val.handleChange(event);
    }
});