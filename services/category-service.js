const Category = require('../models/category');
const { DATABASE_TABLE_KEYS, COMMON_OPERATION_MESSAGES } = require('../utils/constants');
const { SuccessResult, ErrorResult } = require('../utils/result');
const baseService = require('./base-service');
const CategoryValidator = require('../validations/category-validation');



const getAllCategories = async () => {
    const categories = await baseService.getGenericTableData(DATABASE_TABLE_KEYS.CATEGORIES);
    return new SuccessResult(null, categories);
}

/**
 * 
 * @param {Category} category 
 */
const createCategory = async category => {
    // validate category
    const validator = new CategoryValidator(category);
    const validationResult = validator.validate();
    if (!validationResult.isValid)
        return new ErrorResult(validationResult.toString());

    const model = await baseService.addModelToTable(DATABASE_TABLE_KEYS.CATEGORIES, category);
    return new SuccessResult(COMMON_OPERATION_MESSAGES.ADD_MESSAGE, model);

}

module.exports = {
    getAllCategories,
    createCategory
}