"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
let dataForm = {
    name: "api",
    version: "1.0.0"
};
let dataForm2 = {
    name: "api-*",
    version: "1.0.0"
};
app.get("/get", (req, res) => {
    res.send(dataForm);
});
app.get("/name/:user_name", (req, res) => {
    res.status(200);
    res.set('Content-type', 'text/html');
    res.send('<html><body>' +
        '<h1>Hello ' + req.params.user_name + '</h1>' +
        '</body></html>');
});
app.get("*", (req, res) => {
    res.send(dataForm2);
});
const port = 8081;
app.listen(port, function () {
    console.log('http://localhost:%s', port);
});
