let InputElementModel = require('./input-element-model');

let nameRules = new Map();
let surnameRules = new Map();
let emailRules = new Map();
let password1Rules = new Map();
let password2Rules = new Map();
let birthdayRules = new Map();


let isName = (str) => /^[A-Z][a-z]+(-[A-Z][a-z]+)?$/.test(str) || /^[А-Я][а-я]+(-[А-Я][а-я]+)?$/.test(str);

nameRules.set(isName, 'Имя введено некорректно. Имя должно начинаться с заглавной буквы, и не должно содержать никаких символов, кроме букв и "-".');
surnameRules.set(isName, 'Фамилия введена некорректно. Фамилия должна начинаться с заглавной буквы, и не должна содержать никаких символов, кроме букв и "-".');

let isEmail = (str) => /^[\w.-]+@([\w-]+\.)+[\w-]+$/.test(str);

emailRules.set(isEmail, 'Введен некорректный email.');

let isCorrectYear = function(date) {
    date = new Date(date);
    let year = date.getFullYear();

    let now = new Date().getFullYear();

    if (year < 1900 || year > now) return false;

    return true;
}

let isAdult = function(date) {
    date = new Date(date);
    let limit = new Date();
    limit.setFullYear(limit.getFullYear() - 18);

    return limit > date;
}

birthdayRules.set(isCorrectYear, "Введите корректную дату.")
    .set(isAdult, "Минимальный возраст регистрации -  18 лет.");

let hasNotSpaces = (str) => !/\s/.test(str);
let hasDigit = (str) => /\d/.test(str);
let isLongEnough = (str) => str.length >= 8;
let hasUpperCase = (str) => /[A-ZА-Я]/.test(str);
let hasLowerCase = (str) => /[а-яf-z]/.test(str);
let hasSymbol = (str) => /[-`~@#\$%\^&\*()_+={}\[\]><?!//\\.\,\|;:]/.test(str);

password1Rules.set(isLongEnough, 'Пароль должен состоять из 8 и более символов, среди которых обязательно должны быть: буква в верхнем регистре, буква в нижнем регистре, цифра, один из символов "`~!@#$%^&*()_+=-\|?.,<>[]{}:;". Пробельные символы использовать нельзя.')
    .set(hasNotSpaces, 'Пароль должен состоять из 8 и более символов, среди которых обязательно должны быть: буква в верхнем регистре, буква в нижнем регистре, цифра, один из символов "`~!@#$%^&*()_+=-\|?.,<>[]{}:;". Пробельные символы использовать нельзя.')
    .set(hasDigit, 'Пароль должен состоять из 8 и более символов, среди которых обязательно должны быть: буква в верхнем регистре, буква в нижнем регистре, цифра, один из символов "`~!@#$%^&*()_+=-\|?.,<>[]{}:;". Пробельные символы использовать нельзя.')
    .set(hasUpperCase, 'Пароль должен состоять из 8 и более символов, среди которых обязательно должны быть: буква в верхнем регистре, буква в нижнем регистре, цифра, один из символов "`~!@#$%^&*()_+=-\|?.,<>[]{}:;". Пробельные символы использовать нельзя.')
    .set(hasLowerCase, 'Пароль должен состоять из 8 и более символов, среди которых обязательно должны быть: буква в верхнем регистре, буква в нижнем регистре, цифра, один из символов "`~!@#$%^&*()_+=-\|?.,<>[]{}:;". Пробельные символы использовать нельзя.')
    .set(hasSymbol, 'Пароль должен состоять из 8 и более символов, среди которых обязательно должны быть: буква в верхнем регистре, буква в нижнем регистре, цифра, один из символов "`~!@#$%^&*()_+=-\|?.,<>[]{}:;". Пробельные символы использовать нельзя.');
//!!!
let isSimilarToPassword1 = (str) => str == document.forms.reg.password1.value;

password2Rules.set(isSimilarToPassword1, 'Пароли должны совпадать.');

let name = new InputElementModel('name', nameRules);
let surname = new InputElementModel('surname', surnameRules);
let email = new InputElementModel('email', emailRules);
let birthday = new InputElementModel('birthday', birthdayRules);
let password1 = new InputElementModel('password1', password1Rules);
let password2 = new InputElementModel('password2', password2Rules);

let inputModelsCollection = {
    name,
    surname,
    email,
    birthday,
    password1,
    password2
};

module.exports = inputModelsCollection;