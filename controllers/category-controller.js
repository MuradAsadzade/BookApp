const categoryService = require('../services/category-service');
const { generateResponse, parseRequestBody } = require('../utils/common');
const { CONTENT_TYPES } = require('../utils/constants');
const ResponseConfig = require('../utils/response-config');
const Category = require('../models/category');

const getAllCategories = async (req, res) => {
    const result = await categoryService.getAllCategories();

    generateResponse(new ResponseConfig(200,
        req,
        res,
        CONTENT_TYPES['.json'],
        JSON.stringify(result)));
}

const createCategory = async (req,res) =>{
    const body = await parseRequestBody(req);
    const category = new Category(body);
    const result = await categoryService.createCategory(category);

    generateResponse(new ResponseConfig(201,
        req,
        res,
        CONTENT_TYPES['.json'],
        JSON.stringify(result,null,2)));

}

module.exports = {
    getAllCategories,
    createCategory
}