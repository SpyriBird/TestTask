let FormController = require('./blocks/registration-form/form-controller');
let inputModelsCollection = require('./blocks/registration-form/input-models-collection');
let inputViewsCollection = require('./blocks/registration-form/input-views-collection');

new FormController(inputModelsCollection, inputViewsCollection);