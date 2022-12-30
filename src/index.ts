import express, { Application, Request, Response} from 'express';

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.app.use(express.json());
        this.routes()
    }

    protected routes(): void {
        this.app.route('/').get((req: Request, res: Response) => {
            res.json({
                message: 'Express With Typescript'
            })
        })
    }
}

const port : number = 8000;
const app = new App().app;
app.listen(port, () => "Aplikasi Running on Port" + port );