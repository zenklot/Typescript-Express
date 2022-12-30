import BaseRoutes from './BaseRouter';
import AuthController from '../controllers/AuthController';


class AuthRoutes extends BaseRoutes {
    routes(): void {
        this.router.post('/register', AuthController.create)
        this.router.post('/login', AuthController.create)
    }
}

export default new AuthRoutes().router;