class InputElement {

    constructor(elem) {

        this.name = elem.name;
        this.input = elem;

    }

    showTip(message) {

        let tip = document.createElement('div');

        tip.className = 'reg-form__tip';
        tip.style.width = this.input.offsetWidth + 'px';
        tip.textContent = message;

        this.input.after(tip);
    }

    highlight() {
        this.input.classList.add('reg-form__input_incorrect');
    }

    removeHighlight(elem) {
        this.input.classList.remove('reg-form__input_incorrect');
    }

    clearTip() {
        let tip = this.input.nextElementSibling;
        if (tip) tip.remove();
    }
}
module.exports = InputElement;