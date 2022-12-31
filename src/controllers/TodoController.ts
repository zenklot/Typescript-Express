import { Request, Response } from 'express'
import IController from './ControllerInterface'

class TodoController implements IController {
    index(req: Request, res: Response): Response {
        return res.json({
            code: 200,
            data: {},
            message: 'List Todo'
        })
    }
    create(req: Request, res: Response): Response {
        const { id, name } = req.body;
        return res.json({
            code: 200,
            data: {
                id,
                name,
            },
            message: 'create success',
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