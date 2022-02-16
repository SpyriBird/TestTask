class FormController {

    constructor(inputModels, inputViews) {

        this.inputModels = inputModels;
        this.inputViews = inputViews;

        for (let view of Object.values(this.inputViews)) {

            view.input.addEventListener('change', this.onChangeValidate.bind(this));
            view.input.addEventListener('focus', this.onFocusShowTip.bind(this));
            view.input.addEventListener('blur', this.onBlurClearTip.bind(this));

            if (view.input.value !== '') {
                this.onChangeValidate({ target: view.input });
            }
        }

        this.inputViews.password1.input.addEventListener('change', this.validatePassword2.bind(this));
    }

    validatePassword2() {

        let input = this.inputViews.password2.input;

        if (input.value) {

            this.onChangeValidate({ target: input });
            this.inputViews.password2.clearTip();
        }

    }

    onChangeValidate(event) {

        let target = event.target;
        let name = target.name;
        let view = this.inputViews[name];
        let model = this.inputModels[name];

        view.clearTip();

        let res = model.validate(target.value);

        if (res === true) {

            view.removeHighlight();
            model.status = true;
            this.updateStatus();

        } else {

            view.highlight();
            model.status = false;
            view.showTip(res);
            this.inputViews.name.input.form.submit.disabled = true;
        }
    }

    updateStatus() {

        let status = true;

        for (let i of Object.values(this.inputModels)) {

            status = i.status && status;
        }

        if (status) this.inputViews.name.input.form.submit.disabled = false;
    }

    onBlurClearTip(event) {

        let name = event.target.name;
        let view = this.inputViews[name];
        view.clearTip();
    }

    onFocusShowTip(event) {

        let name = event.target.name;
        let model = this.inputModels[name];

        let tip = model.tip;

        if (tip) {
            this.inputViews[name].showTip(tip);
        }
        return false;
    }
}

module.exports = FormController;