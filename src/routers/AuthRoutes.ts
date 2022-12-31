import BaseRoutes from './BaseRouter';
import AuthController from '../controllers/AuthController';
// Validators
import validate from '../middleware/AuthValidator';

class AuthRoutes extends BaseRoutes {
    routes(): void {
        this.router.post('/register', validate, AuthController.register)
        this.router.post('/login', validate, AuthController.login)
    }
}

export default new AuthRoutes().router;