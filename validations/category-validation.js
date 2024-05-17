const { COMMON_VALIDATION_MESSAGE_HANDLERS } = require('../utils/constants');
const BaseModelValidator = require('./base-validation');

class CategoryValidator extends BaseModelValidator {
    constructor(category) {
        super();
        this.addValidation(() => this.checkNotNull(category.name, COMMON_VALIDATION_MESSAGE_HANDLERS.notNull('Name')));
        this.addValidation(() => this.checkLength(category.name, 3, 100, COMMON_VALIDATION_MESSAGE_HANDLERS.length('Name', 3, 100)))
        this.addValidation(() => this.checkCustomValidation(this.checkContainsHP, category.name, 'Contains HP part'));
    }

    checkContainsHP = (name) => {
        return !name.includes('hp');
    }
}

module.exports = CategoryValidator;