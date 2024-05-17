const COMMON_OPERATION_MESSAGES = Object.freeze({
    ADD_MESSAGE:"Data Added Successfully",
    DELETE_MESSAGE:"Data deleted Successfully",
    UPDATE_MESSAGE:"Data updated successfully",
});

const COMMON_VALIDATION_MESSAGE_HANDLERS = {
    notNull:(field)=>`${field} cannot be null`,
    length:(field,min,max) => `${field} must be between ${min} and ${max} chars`
};

const CONTENT_TYPES = Object.freeze({
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.png': 'image/png',
    '.jpg': 'image/jpg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.json': 'application/json',
    '.txt':'text/plain'
});

const DATABASE_TABLE_KEYS = Object.freeze({
    USERS: "users",
    CATEGORIES:"categories"
});

const PASSWORD_CONFIG = Object.freeze({
    minLength:8,
    isContainUpperCase:true,
    isContainLowerCase:true,
    isContainDigit:true,
    isContainSpecialChar:true,
    isContainWhiteSpace:false
});

module.exports = {
    DATABASE_TABLE_KEYS,
    COMMON_OPERATION_MESSAGES,
    COMMON_VALIDATION_MESSAGE_HANDLERS,
    CONTENT_TYPES,
    PASSWORD_CONFIG
}

