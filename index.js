const http = require('http');
const dotenv = require('dotenv');
const routeHandler = require('./routes/routes');
const { generateResponse } = require('./utils/common');
const ResponseConfig = require('./utils/response-config');
const { CONTENT_TYPES } = require('./utils/constants');
const { ErrorResult } = require('./utils/result');

dotenv.config();

const PORT = process.env.PORT || 3343;

const server = http.createServer((req, res) => {
    handleDynamicRoutes(req, res);
});

const handleDynamicRoutes = (req, res) => {
    if (!routeHandler(req, res)) {
        generateResponse(new ResponseConfig(
            404,
            req,
            res,
            CONTENT_TYPES['.json'],
            JSON.stringify(new ErrorResult("Not found"))
        ));
    }
}

server.listen(PORT, () => {
    console.log(`Server listening PORT:${PORT}`);
});