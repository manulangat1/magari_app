"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var locations_1 = __importDefault(require("./locations"));
var apiPrefix = '/api/v1';
var routes = function (app) {
    app.use(apiPrefix, locations_1.default);
    return app;
};
exports.default = routes;
