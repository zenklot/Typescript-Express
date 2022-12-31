import BaseRoutes from './BaseRouter';
import TodoController from '../controllers/TodoController';
import { auth } from '../middleware/AuthMiddleware';

class TodoRoutes extends BaseRoutes {
    routes(): void {
        this.router.get('/', auth, TodoController.index)
        this.router.post('/', auth, TodoController.create)
        this.router.get('/:id', auth, TodoController.show)
        this.router.put('/:id', auth, TodoController.update)
        this.router.delete('/:id', auth, TodoController.destroy)
    }
}

export default new TodoRoutes().router;