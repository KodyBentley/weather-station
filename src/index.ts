import * as express from 'express';
import Sensor from './objects/sensor';
import Weather from './objects/weatherApi';

export default class Server {
    private _app: express.Express = express();

    constructor() {
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
        console.log(Weather.getTemp());
    }
}

new Server();