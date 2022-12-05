"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
let dataForm = {
    name: "api",
    version: "1.0.0"
};
app.get("hi", (req, res) => {
    res.send(dataForm);
});
app.get("*", (req, res) => {
    res.send(dataForm);
});
const port = 8081;
app.listen(port, function () {
    console.log('http://localhost:%s', port);
});
