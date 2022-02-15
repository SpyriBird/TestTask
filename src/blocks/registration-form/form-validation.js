module.exports = {

    handleChange(event) {

        this.clearTips();

        let target = event.target;
        let name = target.name;

        let res = this[`${this.getHandlerName(name)}`](target.value);

        if (res === true) {

            this.removeHighlight(target);
            this.status[name] = true;
            this.updateStatus();

        } else {

            this.highlightElement(target);
            this.status[name] = false;

            this.showTip(target, res);
        }

    },

    getHandlerName(name) {

        let arr = name.split('');
        arr[0] = arr[0].toUpperCase();
        return 'validate' + arr.join('');
    },

    validateName(str) {

        if (this.isName(str)) return true;
        return 'Имя введено некорректно. Имя должно начинаться с заглавной буквы, и не должно содержать никаких символов, кроме букв и "-"';
    },

    validateSurname(str) {

        if (this.isName(str)) return true;
        return 'Фамилия введена некорректно. Фамилия должна начинаться с заглавной буквы, и не должна содержать никаких символов, кроме букв и "-"';
    },

    isName(str) {
        return /^[A-Z][a-z]+(-[A-Z][a-z]+)?$/.test(str) || /^[А-Я][а-я]+(-[А-Я][а-я]+)?$/.test(str);
    },

    validateEmail(str) {

        if (isEmail(str)) return true;

        return 'Введен некорректный email';

        function isEmail(str) {
            return /^[\w.-]+@([\w-]+\.)+[\w-]+$/.test(str);
        }

    },

    validatePassword1(str) {


        if (!isLongEnough(str)) {
            return 'Пароль должен состоять из 8 и более символов, среди которых обязательно должны быть: буква в верхнем регистре, буква в нижнем регистре, цифра, один из символов "`~!@#$%^&*()_+=-\|?.,<>[]{}:;". Пробельные символы использовать нельзя';
        }

        if (hasSpaces(str)) {
            return 'spaces';
        }

        if (!hasDigit(str)) {
            return 'no digit';
        }

        if (!hasUpperCase(str)) {
            return 'no uppercase';
        }

        if (!hasLowerCase(str)) {
            return 'no lowercase';
        }

        if (!hasSymbol(str)) {
            return 'no symbol';
        }

        return true;

        function hasSpaces(str) {
            return /\s/.test(str);
        }

        function hasDigit(str) {
            return /\d/.test(str);
        }

        function isLongEnough(str) {
            return str.length >= 8;
        }

        function hasUpperCase(str) {
            return /[A-ZА-Я]/.test(str);
        }

        function hasLowerCase(str) {
            return /[а-яf-z]/.test(str);
        }

        function hasSymbol(str) {
            return /[-`~@#\$%\^&\*()_+={}\[\]><?!//\\.\,\|;:]/.test(str);
        }
    },

    validatePassword2(str) {

        if (!equalsPassword1(str)) return 'Пароли должны совпадать';

        return true;


        function equalsPassword1(str) {
            console.log(document.forms.reg.password1.value);
            return str === document.forms.reg.password1.value;
        }
    },

    validateBirthday(val) {
        console.log(val);

        let date = new Date(val);

        if (!isCorrectYear(date)) return "Введите корректную дату";

        if (!isAdult(date)) return "Минимальный возраст регистрации -  18 лет";

        return true;

        function isCorrectYear(date) {

            if (date.getFullYear() < 1900) return false;

            return true;
        }

        function isAdult(date) {

            let limit = new Date();
            limit.setFullYear(limit.getFullYear() - 18);

            return limit > date;
        }
    },



    updateStatus() {

        let status = true;
        for (let i in this.status) {

            status = this.status[i] && status;
        }

        if (status) document.forms.reg.submit.disabled = false;
    },

    showTip(elem, message) {

        let tip = document.createElement('div');
        tip.className = 'reg-form__tip';
        tip.style.width = elem.offsetWidth + 'px';
        tip.textContent = message;
        console.log(tip);
        elem.after(tip);
    },

    highlightElement(elem) {
        elem.classList.add('reg-form__input_incorrect');
    },

    removeHighlight(elem) {
        elem.classList.remove('reg-form__input_incorrect');
    },

    clearTips() {

        let tip = document.querySelector('.reg-form__tip');
        if (tip) tip.remove();
    },

    status: {
        name: false,
        surname: false,
        email: false,
        password1: false,
        password2: false,
        birthday: false
    }
}

let userData = {

}

class InputElement {

}