import * as express from 'express';

export default class Server {
    private _app: express.Express = express();

    constructor(){
        this.init();
    }

    init(){
        this._app.listen(3000, () =>{
            console.log("Example app listening on port 3000!")
          });

          this._app.get('/', (req, res) =>{
            res.json({
                message: "Hello World!"
            });
          })
    }
}

new Server();