import { Router, Request, Response} from 'express'
import IRouter from './RouteInterface'


class UserRoutes implements IRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes()
    }

    routes(): void {
        this.router.get('/', (req: Request, res: Response) => {
            res.json({
                code: 200,
                data: {
                    'message': 'Hallo User'
                }
            })
        })
        this.router.post('/', (req: Request, res: Response) => {
            res.json({
                code: 200,
                data: {
                    'message': 'Hallo User POST'
                }
            })
        })
    }
}

export default new UserRoutes().router;