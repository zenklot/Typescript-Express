import BaseRoutes from './BaseRouter';
import TodoController from '../controllers/TodoController';
import { auth } from '../middleware/AuthMiddleware';
// Validators
import validate from '../middleware/TodoValidator';

class TodoRoutes extends BaseRoutes {
    routes(): void {
        this.router.get('/', auth, TodoController.index)
        this.router.post('/', auth, validate, TodoController.create)
        this.router.get('/:id', auth, TodoController.show)
        this.router.put('/:id', auth, validate, TodoController.update)
        this.router.delete('/:id', auth, TodoController.destroy)
    }
}

export default new TodoRoutes().router;