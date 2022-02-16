/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./style.sass":
/*!********************!*\
  !*** ./style.sass ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./style.sass?");

/***/ }),

/***/ "./blocks/registration-form/registration-form.pug":
/*!********************************************************!*\
  !*** ./blocks/registration-form/registration-form.pug ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cform class=\\\"reg-form\\\" name=\\\"reg\\\" onsubmit=\\\"alert('submit!'); return false\\\"\\u003E\\u003Ch1 class=\\\"reg-form__heading\\\"\\u003EЗаполните форму\\u003C\\u002Fh1\\u003E\\u003Cul class=\\\"reg-form__list\\\"\\u003E\\u003Cli class=\\\"reg-form__item\\\"\\u003E \\u003Clabel class=\\\"reg-form__label\\\"\\u003EВаше имя\\u003Cinput class=\\\"reg-form__input\\\" type=\\\"text\\\" name=\\\"name\\\" required placeholder=\\\"Имя\\\" autofocus\\u003E\\u003C\\u002Flabel\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"reg-form__item\\\"\\u003E \\u003Clabel class=\\\"reg-form__label\\\"\\u003EФамилия\\u003Cinput class=\\\"reg-form__input\\\" type=\\\"text\\\" name=\\\"surname\\\" required placeholder=\\\"Фамилия\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"reg-form__item\\\"\\u003E \\u003Clabel class=\\\"reg-form__label\\\"\\u003EВаш Еmail\\u003Cinput class=\\\"reg-form__input\\\" type=\\\"email\\\" name=\\\"email\\\" required placeholder=\\\"Email\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"reg-form__item\\\"\\u003E \\u003Clabel class=\\\"reg-form__label\\\"\\u003EПридумайте пароль\\u003Cinput class=\\\"reg-form__input\\\" type=\\\"password\\\" name=\\\"password1\\\" required placeholder=\\\"Пароль\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"reg-form__item\\\"\\u003E \\u003Clabel class=\\\"reg-form__label\\\"\\u003EПовторите пароль\\u003Cinput class=\\\"reg-form__input\\\" type=\\\"password\\\" name=\\\"password2\\\" required placeholder=\\\"Снова пароль\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"reg-form__item\\\"\\u003E \\u003Clabel class=\\\"reg-form__label\\\"\\u003EДата рождения\\u003Cinput class=\\\"reg-form__input\\\" type=\\\"date\\\" name=\\\"birthday\\\"\\u003E\\u003C\\u002Flabel\\u003E\\u003C\\u002Fli\\u003E\\u003Cli class=\\\"reg-form__item\\\"\\u003E\\u003Cbutton class=\\\"reg-form__button\\\" type=\\\"submit\\\" name=\\\"submit\\\" disabled\\u003EОтправить\\u003C\\u002Fbutton\\u003E\\u003C\\u002Fli\\u003E\\u003C\\u002Ful\\u003E\\u003C\\u002Fform\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/registration-form/registration-form.pug?");

/***/ }),

/***/ "./index.pug":
/*!*******************!*\
  !*** ./index.pug ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var pug = __webpack_require__(/*! !../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003C!DOCTYPE html\\u003E\\u003Chtml lang=\\\"ru\\\"\\u003E\\u003Chead\\u003E\\u003Cmeta charset=\\\"UTF-8\\\"\\u003E\\u003Cmeta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\"\\u003E\\u003Cmeta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\"\\u003E\\u003Cmeta name=\\\"description\\\" content=\\\"some description\\\"\\u003E\\u003Cmeta name=\\\"keywords\\\" content=\\\"some keywords\\\"\\u003E\\u003Clink\" + (\" rel=\\\"icon\\\" type=\\\"image\\u002Fpng\\\"\"+pug.attr(\"href\", __webpack_require__(/*! ./favicon.ico */ \"./favicon.ico\"), true, true)) + \"\\u003E\\u003Clink rel=\\\"preconnect\\\" href=\\\"https:\\u002F\\u002Ffonts.googleapis.com\\\"\\u003E\\n\\u003Clink rel=\\\"preconnect\\\" href=\\\"https:\\u002F\\u002Ffonts.gstatic.com\\\" crossorigin\\u003E\\n\\u003Clink href=\\\"https:\\u002F\\u002Ffonts.googleapis.com\\u002Fcss2?family=Lato&display=swap\\\" rel=\\\"stylesheet\\\"\\u003E \\u003Ctitle\\u003ETestTask\\u003C\\u002Ftitle\\u003E\\u003C\\u002Fhead\\u003E\\u003Cbody\\u003E \" + (null == (pug_interp = (__webpack_require__(/*! ./blocks/registration-form/registration-form.pug */ \"./blocks/registration-form/registration-form.pug\").call)(this, locals)) ? \"\" : pug_interp) + \"\\u003C\\u002Fbody\\u003E\\u003C\\u002Fhtml\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./index.pug?");

/***/ }),

/***/ "../node_modules/pug-runtime/index.js":
/*!********************************************!*\
  !*** ../node_modules/pug-runtime/index.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n};\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '', padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n};\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  var type = typeof val;\n  if ((type === 'object' || type === 'function') && typeof val.toJSON === 'function') {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + '=\\'' + val.replace(/'/g, '&#39;') + '\\'';\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n};\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse){\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n};\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html){\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34: escape = '&quot;'; break;\n      case 38: escape = '&amp;'; break;\n      case 60: escape = '&lt;'; break;\n      case 62: escape = '&gt;'; break;\n      default: continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n};\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str){\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || (__webpack_require__(/*! fs */ \"?16ca\").readFileSync)(filename, 'utf8')\n  } catch (ex) {\n    pug_rethrow(err, null, lineno)\n  }\n  var context = 3\n    , lines = str.split('\\n')\n    , start = Math.max(lineno - context, 0)\n    , end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines.slice(start, end).map(function(line, i){\n    var curr = i + start + 1;\n    return (curr == lineno ? '  > ' : '    ')\n      + curr\n      + '| '\n      + line;\n  }).join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  err.message = (filename || 'Pug') + ':' + lineno\n    + '\\n' + context + '\\n\\n' + err.message;\n  throw err;\n};\n\n\n//# sourceURL=webpack:///../node_modules/pug-runtime/index.js?");

/***/ }),

/***/ "./blocks/registration-form/form-controller.js":
/*!*****************************************************!*\
  !*** ./blocks/registration-form/form-controller.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("class FormController {\r\n\r\n    constructor(inputModels, inputViews) {\r\n\r\n        this.inputModels = inputModels;\r\n        this.inputViews = inputViews;\r\n\r\n        for (let view of Object.values(this.inputViews)) {\r\n\r\n            view.input.addEventListener('change', this.onChangeValidate.bind(this));\r\n            view.input.addEventListener('focus', this.onFocusShowTip.bind(this));\r\n            view.input.addEventListener('blur', this.onBlurClearTip.bind(this));\r\n\r\n            if (view.input.value !== '') {\r\n                this.onChangeValidate({ target: view.input });\r\n            }\r\n        }\r\n\r\n        this.inputViews.password1.input.addEventListener('change', this.validatePassword2.bind(this));\r\n    }\r\n\r\n    validatePassword2() {\r\n\r\n        let input = this.inputViews.password2.input;\r\n\r\n        if (input.value) {\r\n\r\n            this.onChangeValidate({ target: input });\r\n            this.inputViews.password2.clearTip();\r\n        }\r\n\r\n    }\r\n\r\n    onChangeValidate(event) {\r\n\r\n        let target = event.target;\r\n        let name = target.name;\r\n        let view = this.inputViews[name];\r\n        let model = this.inputModels[name];\r\n\r\n        view.clearTip();\r\n\r\n        let res = model.validate(target.value);\r\n\r\n        if (res === true) {\r\n\r\n            view.removeHighlight();\r\n            model.status = true;\r\n            this.updateStatus();\r\n\r\n        } else {\r\n\r\n            view.highlight();\r\n            model.status = false;\r\n            view.showTip(res);\r\n            this.inputViews.name.input.form.submit.disabled = true;\r\n        }\r\n    }\r\n\r\n    updateStatus() {\r\n\r\n        let status = true;\r\n\r\n        for (let i of Object.values(this.inputModels)) {\r\n\r\n            status = i.status && status;\r\n        }\r\n\r\n        if (status) this.inputViews.name.input.form.submit.disabled = false;\r\n    }\r\n\r\n    onBlurClearTip(event) {\r\n\r\n        let name = event.target.name;\r\n        let view = this.inputViews[name];\r\n        view.clearTip();\r\n    }\r\n\r\n    onFocusShowTip(event) {\r\n\r\n        let name = event.target.name;\r\n        let model = this.inputModels[name];\r\n\r\n        let tip = model.tip;\r\n\r\n        if (tip) {\r\n            this.inputViews[name].showTip(tip);\r\n        }\r\n        return false;\r\n    }\r\n}\r\n\r\nmodule.exports = FormController;\n\n//# sourceURL=webpack:///./blocks/registration-form/form-controller.js?");

/***/ }),

/***/ "./blocks/registration-form/input-element-model.js":
/*!*********************************************************!*\
  !*** ./blocks/registration-form/input-element-model.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("class InputElementModel {\r\n\r\n    constructor(name, rules) {\r\n\r\n        this.name = name;\r\n        this.status = false;\r\n        this.tip = null;\r\n\r\n        this.rules = rules;\r\n\r\n    }\r\n\r\n    validate(str) {\r\n\r\n        if (!this.rules) {\r\n            this.tip = null;\r\n            this.status = true;\r\n            return true;\r\n        }\r\n\r\n        for (let key of this.rules.keys()) {\r\n\r\n            if (!key(str)) {\r\n                this.tip = this.rules.get(key);\r\n                return this.tip;\r\n            }\r\n        }\r\n\r\n        this.tip = null;\r\n        this.status = true;\r\n        return true;\r\n    }\r\n}\r\n\r\nmodule.exports = InputElementModel;\n\n//# sourceURL=webpack:///./blocks/registration-form/input-element-model.js?");

/***/ }),

/***/ "./blocks/registration-form/input-element-view.js":
/*!********************************************************!*\
  !*** ./blocks/registration-form/input-element-view.js ***!
  \********************************************************/
/***/ ((module) => {

eval("class InputElement {\r\n\r\n    constructor(elem) {\r\n\r\n        this.name = elem.name;\r\n        this.input = elem;\r\n\r\n    }\r\n\r\n    showTip(message) {\r\n\r\n        let tip = document.createElement('div');\r\n\r\n        tip.className = 'reg-form__tip';\r\n        tip.style.width = this.input.offsetWidth + 'px';\r\n        tip.textContent = message;\r\n\r\n        this.input.after(tip);\r\n    }\r\n\r\n    highlight() {\r\n        this.input.classList.add('reg-form__input_incorrect');\r\n    }\r\n\r\n    removeHighlight(elem) {\r\n        this.input.classList.remove('reg-form__input_incorrect');\r\n    }\r\n\r\n    clearTip() {\r\n        let tip = this.input.nextElementSibling;\r\n        if (tip) tip.remove();\r\n    }\r\n}\r\nmodule.exports = InputElement;\n\n//# sourceURL=webpack:///./blocks/registration-form/input-element-view.js?");

/***/ }),

/***/ "./blocks/registration-form/input-models-collection.js":
/*!*************************************************************!*\
  !*** ./blocks/registration-form/input-models-collection.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let InputElementModel = __webpack_require__(/*! ./input-element-model */ \"./blocks/registration-form/input-element-model.js\");\r\n\r\nlet nameRules = new Map();\r\nlet surnameRules = new Map();\r\nlet emailRules = new Map();\r\nlet password1Rules = new Map();\r\nlet password2Rules = new Map();\r\nlet birthdayRules = new Map();\r\n\r\nlet isNotTooLong = (str) => str.length < 40;\r\nlet isName = (str) => /^[A-Z][a-z]+(-[A-Z][a-z]+)?$/.test(str) || /^[А-Я][а-я]+(-[А-Я][а-я]+)?$/.test(str);\r\n\r\nnameRules.set(isName, 'Имя введено некорректно. Имя должно начинаться с заглавной буквы, и не должно содержать никаких символов, кроме букв и \"-\".')\r\n    .set(isNotTooLong, 'Имя слишком длинное');\r\nsurnameRules.set(isName, 'Фамилия введена некорректно. Фамилия должна начинаться с заглавной буквы, и не должна содержать никаких символов, кроме букв и \"-\".')\r\n    .set(isNotTooLong, 'Фамилия слишком длинная');\r\n\r\nlet isEmail = (str) => /^[\\w.-]+@([\\w-]+\\.)+[\\w-]+$/.test(str);\r\n\r\nemailRules.set(isEmail, 'Введен некорректный email.');\r\n\r\nlet isCorrectYear = function(date) {\r\n    date = new Date(date);\r\n    let year = date.getFullYear();\r\n\r\n    let now = new Date().getFullYear();\r\n\r\n    if (year < 1900 || year > now) return false;\r\n\r\n    return true;\r\n}\r\n\r\nlet isAdult = function(date) {\r\n    date = new Date(date);\r\n    let limit = new Date();\r\n    limit.setFullYear(limit.getFullYear() - 18);\r\n\r\n    return limit > date;\r\n}\r\n\r\nbirthdayRules.set(isCorrectYear, \"Введите корректную дату.\")\r\n    .set(isAdult, \"Минимальный возраст регистрации -  18 лет.\");\r\n\r\nlet hasNotSpaces = (str) => !/\\s/.test(str);\r\nlet hasDigit = (str) => /\\d/.test(str);\r\nlet isLongEnough = (str) => str.length >= 8;\r\nlet hasUpperCase = (str) => /[A-ZА-Я]/.test(str);\r\nlet hasLowerCase = (str) => /[а-яf-z]/.test(str);\r\nlet hasSymbol = (str) => /[-`~@#\\$%\\^&\\*()_+={}\\[\\]><?!//\\\\.\\,\\|;:]/.test(str);\r\n\r\npassword1Rules.set(isLongEnough, 'Пароль должен состоять из 8 и более символов, среди которых обязательно должны быть: буква в верхнем регистре, буква в нижнем регистре, цифра, один из символов \"`~!@#$%^&*()_+=-\\|?.,<>[]{}:;\". Пробельные символы использовать нельзя.')\r\n    .set(hasNotSpaces, 'Пароль должен состоять из 8 и более символов, среди которых обязательно должны быть: буква в верхнем регистре, буква в нижнем регистре, цифра, один из символов \"`~!@#$%^&*()_+=-\\|?.,<>[]{}:;\". Пробельные символы использовать нельзя.')\r\n    .set(hasDigit, 'Пароль должен состоять из 8 и более символов, среди которых обязательно должны быть: буква в верхнем регистре, буква в нижнем регистре, цифра, один из символов \"`~!@#$%^&*()_+=-\\|?.,<>[]{}:;\". Пробельные символы использовать нельзя.')\r\n    .set(hasUpperCase, 'Пароль должен состоять из 8 и более символов, среди которых обязательно должны быть: буква в верхнем регистре, буква в нижнем регистре, цифра, один из символов \"`~!@#$%^&*()_+=-\\|?.,<>[]{}:;\". Пробельные символы использовать нельзя.')\r\n    .set(hasLowerCase, 'Пароль должен состоять из 8 и более символов, среди которых обязательно должны быть: буква в верхнем регистре, буква в нижнем регистре, цифра, один из символов \"`~!@#$%^&*()_+=-\\|?.,<>[]{}:;\". Пробельные символы использовать нельзя.')\r\n    .set(hasSymbol, 'Пароль должен состоять из 8 и более символов, среди которых обязательно должны быть: буква в верхнем регистре, буква в нижнем регистре, цифра, один из символов \"`~!@#$%^&*()_+=-\\|?.,<>[]{}:;\". Пробельные символы использовать нельзя.');\r\n//!!!\r\nlet isSimilarToPassword1 = (str) => str == document.forms.reg.password1.value;\r\n\r\npassword2Rules.set(isSimilarToPassword1, 'Пароли должны совпадать.');\r\n\r\nlet name = new InputElementModel('name', nameRules);\r\nlet surname = new InputElementModel('surname', surnameRules);\r\nlet email = new InputElementModel('email', emailRules);\r\nlet birthday = new InputElementModel('birthday', birthdayRules);\r\nlet password1 = new InputElementModel('password1', password1Rules);\r\nlet password2 = new InputElementModel('password2', password2Rules);\r\n\r\nlet inputModelsCollection = {\r\n    name,\r\n    surname,\r\n    email,\r\n    birthday,\r\n    password1,\r\n    password2\r\n};\r\n\r\nmodule.exports = inputModelsCollection;\n\n//# sourceURL=webpack:///./blocks/registration-form/input-models-collection.js?");

/***/ }),

/***/ "./blocks/registration-form/input-views-collection.js":
/*!************************************************************!*\
  !*** ./blocks/registration-form/input-views-collection.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let InputElementView = __webpack_require__(/*! ./input-element-view */ \"./blocks/registration-form/input-element-view.js\")\r\n\r\nlet inputViewsCollection = {};\r\n\r\nArray.from(document.forms.reg).forEach((item) => inputViewsCollection[item.name] = new InputElementView(item));\r\n\r\nmodule.exports = inputViewsCollection;\n\n//# sourceURL=webpack:///./blocks/registration-form/input-views-collection.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("let FormController = __webpack_require__(/*! ./blocks/registration-form/form-controller */ \"./blocks/registration-form/form-controller.js\");\r\nlet inputModelsCollection = __webpack_require__(/*! ./blocks/registration-form/input-models-collection */ \"./blocks/registration-form/input-models-collection.js\");\r\nlet inputViewsCollection = __webpack_require__(/*! ./blocks/registration-form/input-views-collection */ \"./blocks/registration-form/input-views-collection.js\");\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => new FormController(inputModelsCollection, inputViewsCollection));\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./favicon.ico":
/*!*********************!*\
  !*** ./favicon.ico ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"static/c004ba884c61e54be584.ico\";\n\n//# sourceURL=webpack:///./favicon.ico?");

/***/ }),

/***/ "?16ca":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	__webpack_require__("./index.pug");
/******/ 	__webpack_require__("./index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./style.sass");
/******/ 	
/******/ })()
;