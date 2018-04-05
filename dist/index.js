"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const weatherApi_1 = require("./objects/weatherApi");
class Server {
    constructor() {
        this._app = express();
        this.init();
    }
    init() {
        // this._app.get('/', (req, res) => {
        //     res.json({ 
        //         message: 'Hello World!'
        //     });
        // });
        // this._app.listen(3000, (next) => {
        //     console.log("Example app listening on port 3000!")
        // });
        // new Sensor();
        console.log(weatherApi_1.default.getTemp());
    }
}
exports.default = Server;
new Server();
