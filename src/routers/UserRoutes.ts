import BaseRoutes from './BaseRouter';
import UserController from '../controllers/UserController';
import { auth } from '../middleware/AuthMiddleware';

class UserRoutes extends BaseRoutes {
    routes(): void {
        this.router.get('/', auth, UserController.index)
        this.router.post('/', UserController.create)
        this.router.get('/:id', UserController.show)
        this.router.put('/:id', UserController.update)
        this.router.delete('/:id', UserController.destroy)
    }
}

export default new UserRoutes().router;