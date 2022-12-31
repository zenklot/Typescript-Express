import { Request, Response } from 'express'
import IController from './ControllerInterface'
import TodoService from '../services/TodoService';

class TodoController implements IController {
    index = async (req: Request, res: Response): Promise<Response> => {
        const service : TodoService = new TodoService(req);
        const todos = await service.getAll();

        return res.status(200).json({
            status: 200,
            data: todos,
        });
    }
    create = async (req: Request, res: Response): Promise<Response> => {
        const service : TodoService = new TodoService(req);
        const todo = await service.store();

        return res.status(200).json({
            code: 200,
            data: todo,
            message: 'Create Todo'
        })
    }
    show = async (req: Request, res: Response): Promise<Response> => {
        const service : TodoService = new TodoService(req);
        const todo = await service.show();

        return res.status(200).json({
            status: 200,
            data: todo,
            message: 'Show Todo'
        })
        
    }
    update = async (req: Request, res: Response): Promise<Response> => {
        const service : TodoService = new TodoService(req);
        await service.update();
        
        return res.json({
            code: 200,
            message: 'update success'
        })
    }
    destroy = async (req: Request, res: Response): Promise<Response>  => {
        const service : TodoService = new TodoService(req);
        await service.delete();
        
        return res.json({
            code: 200,
            data: {},
            message: 'destroy success'
        })

    }

}

export default new TodoController();