"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
//  local imports 
var modules_1 = __importDefault(require("./modules"));
var app = (0, express_1.default)();
dotenv_1.default.config();
var PORT = process.env.PORT;
app.use((0, cors_1.default)());
app.get('/', function (req, res) {
    res.send("Welcome to the magari site!");
});
(0, modules_1.default)(app);
app.listen(PORT, function () {
    console.log("Server connected successfully on http://localhost:".concat(PORT, "/api/v1 in ").concat(process.env.NODE_ENV, " mode"));
});
exports.default = app;
