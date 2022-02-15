class InputElementModel {

    constructor(name, rules) {

        this.name = name;
        this.status = false;
        this.tip = null;

        this.rules = rules;

    }

    validate(str) {

        if (!this.rules) {
            this.tip = null;
            this.status = true;
            return true;
        }

        for (let key of this.rules.keys()) {

            if (!key(str)) {
                this.tip = this.rules.get(key);
                return this.tip;
            }
        }

        this.tip = null;
        this.status = true;
        return true;
    }
}

module.exports = InputElementModel;