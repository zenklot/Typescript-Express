import BaseRoutes from './BaseRouter';
import UserController from '../controllers/UserController';

class UserRoutes extends BaseRoutes {
    routes(): void {
        this.router.get('/', UserController.index)
        this.router.post('/', UserController.create)
        this.router.get('/:id', UserController.show)
        this.router.put('/:id', UserController.update)
        this.router.delete('/:id', UserController.destroy)
    }
}

export default new UserRoutes().router;