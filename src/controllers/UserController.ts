import { Request, Response } from 'express'
import IController from './ControllerInterface'

class UserController implements IController {
    index(req: Request, res: Response): Response {
        return res.json({
            message: 'Index Endpoint'
        })
    }
    create(req: Request, res: Response): Response {
        return res.json({
            message: 'Create Endpoint'
        })
    }
    show(req: Request, res: Response): Response {
        throw new Error('Method not implemented.')
    }
    update(req: Request, res: Response): Response {
        throw new Error('Method not implemented.')
    }
    destroy(req: Request, res: Response): Response {
        throw new Error('Method not implemented.')
    }

}

export default new UserController();