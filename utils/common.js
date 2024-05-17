
const ResponseConfig = require("./response-config");
const { Result, SuccessResult } = require("./result");


const generateUniqueId = (datas) => {
    if (datas.length === 0) return 1;

    const ids = datas.map(x => x.id);
    const maxId = Math.max(...ids);
    return (maxId + 1);
}

/**
 * 
 * @param {ResponseConfig} config configuration object for response generator
 */
const generateResponse = (config) => {
    config.response.writeHead(config.status, config.contentType);
    config.response.end(config.data);
}

const parseRequestBody = async (req) => {
    let body = '';
    req.on('data', x => {
        body += x.toString();
    });
    return new Promise((resolve, reject) => {
        req.on('end', () => {
            try {
                const parsedBody = JSON.parse(body);
                resolve(parsedBody);
            } catch (error) {
                reject(error);
            }
        });
    });
}

/**
 * 
 * @param  {...Result} results 
 */
const resultExecutionHelper = (...results) => {
    for (const result of results) {
        if (!result.success)
            return result;
    }
    return new SuccessResult();
}


module.exports = {
    generateUniqueId,
    generateResponse,
    parseRequestBody,
    resultExecutionHelper

}