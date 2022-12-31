import { Request, Response } from 'express'
import IController from './ControllerInterface'
const db = require('../db/models');

class TodoController implements IController {
    index(req: Request, res: Response): Response {
        return res.json({
            code: 200,
            data: {},
            message: 'List Todo'
        })
    }
    create = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.app.locals.credential;
        const { description } = req.body
        const todo = await db.todo.create({
            user_id: id,
            description
        })
        return res.status(200).json({
            code: 200,
            data: todo,
            message: 'Create Todo'
        })
    }
    show(req: Request, res: Response): Response {
        const { id } = req.params;
        
        return res.json({
            code: 200,
            data: {},
            message: 'show success'
        })
    }
    update(req: Request, res: Response): Response {
        const { id } = req.params;
        
        return res.json({
            code: 200,
            data: {},
            message: 'update success'
        })
    }
    destroy(req: Request, res: Response): Response {
        const { id } = req.params;
        return res.json({
            code: 200,
            data: {},
            message: 'destroy success'
        })

    }

}

export default new TodoController();