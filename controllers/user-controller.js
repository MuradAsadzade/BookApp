const User = require('../models/user');
const userService = require('../services/user-service');
const { generateResponse, parseRequestBody } = require('../utils/common');
const { CONTENT_TYPES } = require('../utils/constants');
const ResponseConfig = require('../utils/response-config');

const getAllUsers = async (req, res) => {
    const result = await userService.getAllUsers();

    generateResponse(new ResponseConfig(200,
        req,
        res,
        CONTENT_TYPES['.json'],
        JSON.stringify(result)));
}

const createUser = async (req,res) =>{
    const body = await parseRequestBody(req);
    const user = new User(body);
    const result = await userService.addUser(user);

    generateResponse(new ResponseConfig(201,
        req,
        res,
        CONTENT_TYPES['.json'],
        JSON.stringify(result)));

}

module.exports = {
    getAllUsers,
    createUser
}