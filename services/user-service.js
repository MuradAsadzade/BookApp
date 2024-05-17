const baseService = require('./base-service');
const { DATABASE_TABLE_KEYS, COMMON_OPERATION_MESSAGES } = require('../utils/constants');
const { SuccessResult, ErrorResult } = require('../utils/result');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const validateUser = require('../validations/user-validation');
const validatePassword = require('../validations/password-validation');

const getAllUsers = async () => {
    const data = await baseService.getGenericTableData(DATABASE_TABLE_KEYS.USERS);
    return new SuccessResult(null, data);
}

/**
 * 
 * @param {User} user 
 * @returns 
 */
const addUser = async (user) => {

    const validationResult = validateUser(user);
    if(!validationResult.success)
        return validationResult;

    const passwordValidationResult = validatePassword(user.password);
    if(!passwordValidationResult.success)
        return passwordValidationResult;

    user.password = await bcrypt.hash(user.password, 10);
    const addedUser = await baseService.addModelToTable(DATABASE_TABLE_KEYS.USERS, user);
    return new SuccessResult(COMMON_OPERATION_MESSAGES.ADD_MESSAGE, addedUser);

}

module.exports = {
    getAllUsers,
    addUser
}