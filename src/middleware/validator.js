'use strict';

const { request, response } = require("express");

module.exports = (request, response, next) => {
    if (request.query) {
        let pass = request.query.name;
        if (pass) {
            next()
        } else {
            next('something went wrong in the name')
        }
    } else {
        next('something went wrong with query')
    }
};