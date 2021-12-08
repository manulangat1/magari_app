"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var LocationController_1 = __importDefault(require("./LocationController"));
var router = express_1.default.Router();
router.get('/', LocationController_1.default.getCurrentLocation);
exports.default = router;
