const ValidationError = require("./validation-error");
const ValidationResult = require("./validation-result");

class BaseModelValidator {
    constructor() {
        this.validations = [];
    }

    /**
     * 
     * @param {Function} validator 
     */
    addValidation(validator){
        this.validations.push(validator);
    }

    validate(){
        const errors = [];
        for(const validator of this.validations){
            const result = validator();
            if(result !== null){
                errors.push(result);
            }
        }

        if(errors.length === 0)
            return new ValidationResult(true);
        else
            return new ValidationResult(false,errors);
    }

    checkNotNull(field, message = null, code = null) {
        if (field === '')
            return new ValidationError(message, code);

        return null;
    }

    checkLength(field, min, max, message = null, code = null) {
        if (field.length < min || field.length > max)
            return new ValidationError(message, code);

        return null;
    }

    checkCustomValidation(callback,field,message=null,code= null){
        if(!callback(field)){
            return new ValidationError(message,code);
        }
        return null;
    }
}

module.exports = BaseModelValidator;