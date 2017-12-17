"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    constructor() {
        this._app = express();
        this.init();
    }
    init() {
        this._app.listen(3000, () => {
            console.log("Example app listening on port 3000!");
        });
        this._app.get('/', (req, res) => {
            res.json({
                message: "Hello World!"
            });
        });
    }
}
exports.default = Server;
new Server();
