const User = require("../models/user");
const { resultExecutionHelper } = require("../utils/common");
const { ErrorResult, SuccessResult } = require("../utils/result");

const validateUser = user => {
    const validationResult = resultExecutionHelper(checkEmailNull(user),
        checkFullnameNull(user),
        checkUsernameNull(user));

    return validationResult;
}

/**
 * 
 * @param {User} user 
 */
const checkUsernameNull = user => {
    if (user.username === '') {
        return new ErrorResult("Username cannot be empty");
    }
    return new SuccessResult();
}

const checkEmailNull = user => {
    if (user.email === '')
        return new ErrorResult("Email cannot be empty");

    return new SuccessResult();
}

const checkFullnameNull = user => {
    if (user.fullname === '')
        return new ErrorResult("Fullname cannot be empty");

    return new SuccessResult();
}

module.exports = validateUser;