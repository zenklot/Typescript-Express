import express, { Application, Request, Response} from 'express';
import bodyParser from 'body-parser'
import morgan from 'morgan'

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.middleware()
        this.routes()
    }

    protected middleware() : void {
        // this.app.use(bodyParser.json());
        this.app.use(morgan('dev'));
    }

    protected routes(): void {
        this.app.route('/').get((req: Request, res: Response) => {
            res.json({
                message: 'Express With Typescript'
            })
        })

        this.app.route('/users').post((req: Request, res: Response) => {
            res.json({
                req: req.body
            })
        })
    }
}

const port : number = 8000;
const app = new App().app;
app.listen(port, () => "Aplikasi Running on Port" + port );