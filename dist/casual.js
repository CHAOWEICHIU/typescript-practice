"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var casual_1 = __importDefault(require("casual"));
casual_1.default.define('good', function () {
    return ({
        uuid: casual_1.default.uuid,
    });
});
