/*
    1.Min length
    3.One digit
    4.One uppercase
    5.One lowercase
    6.One special char
    7.WhiteSpace
*/

const {resultExecutionHelper} = require("../utils/common");
const { PASSWORD_CONFIG } = require("../utils/constants");
const { ErrorResult, SuccessResult } = require("../utils/result");

const validatePassword = password => {
    const validationResult = resultExecutionHelper(checkMinLength(password),
                                                    checkOneDigit(password),
                                                    checkOneLowerCase(password),
                                                    checkOneUpperCase(password),
                                                    checkSpecialChar(password),
                                                    checkWhiteSpace(password));

    return validationResult;
}


const checkMinLength = password => {
    if (password.length < PASSWORD_CONFIG.minLength)
        return new ErrorResult(`Password must be greater than ${PASSWORD_CONFIG.minLength}`);

    return SuccessResult();
}

const checkOneUpperCase = password => {


    if (PASSWORD_CONFIG.isContainUpperCase && !password.match(/[A-Z]/)) {
        return new ErrorResult(`Password must be contain one upper case`);
    }

    return new SuccessResult();
}

const checkOneLowerCase = password => {
    if (PASSWORD_CONFIG.isContainLowerCase && !(password.match(/[a-z]/)))
        return new ErrorResult(`Password must be contain one lower case`);

    return new SuccessResult();
}
const checkWhiteSpace = password => {
    if (!PASSWORD_CONFIG.isContainWhiteSpace && password.match(/\s/))
        return new ErrorResult(`Password cannot be contain whitespace`);

    return new SuccessResult();
}
const checkSpecialChar = password => {
    if (PASSWORD_CONFIG.isContainSpecialChar && !(password.match(/[$&+,:;=?@#|'<>.^*()%!-]/)))
        return new ErrorResult(`Password must be contain one special char`);

    return new SuccessResult();
}
const checkOneDigit = password => {
    if (PASSWORD_CONFIG.isContainDigit && !(password.match(/\d/)))
        return new ErrorResult(`Password must be contain one digit`);

    return new SuccessResult();
}

module.exports = validatePassword;