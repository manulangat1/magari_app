"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (res, message, status, data) {
    res.status(status).send({
        message: message,
        data: data
    });
});
