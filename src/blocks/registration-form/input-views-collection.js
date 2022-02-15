let InputElementView = require('./input-element-view')

let inputViewsCollection = {};

Array.from(document.forms.reg).forEach((item) => inputViewsCollection[item.name] = new InputElementView(item));

module.exports = inputViewsCollection;