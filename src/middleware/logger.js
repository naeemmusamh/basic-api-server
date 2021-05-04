'use strict';

const { request, response } = require("express");

module.exports = (request, response, next) => {
    console.log('logger for the path :', request.path, 'method=', request.method, 'params=', request.params);
    next();
};