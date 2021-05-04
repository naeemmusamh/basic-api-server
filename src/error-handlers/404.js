'use strict';

module.exports = (error, request, response, next) => {
    response.status(500).json({
        error: error,
        message: `there is error happened ${error.message}`,
        path: request.path
    });
};