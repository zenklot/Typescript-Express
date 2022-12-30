import { Request, Response } from 'express'
import IController from './ControllerInterface'

let data: any[] = [
    {
        id: 1,
        name: 'John Doe',
    },
    {
        id: 2,
        name: 'Jane Doe 2',
    },
    {
        id: 3,
        name: 'Jane Doe 3',
    },
    {
        id: 4,
        name: 'John Doe 4',
    }
]

class UserController implements IController {
    index(req: Request, res: Response): Response {
        return res.json({
            code: 200,
            data: data,
            message: 'List Users'
        })
    }
    create(req: Request, res: Response): Response {
        const { id, name } = req.body;
        data.push({
            id,
            name,
        });
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
        let person = data.find(item => item.id == id)
        return res.json({
            code: 200,
            data: person,
            message: 'show success'
        })
    }
    update(req: Request, res: Response): Response {
        const { id } = req.params;
        let person = data.find(item => item.id == id)
        person.name = req.body.name;
        return res.json({
            code: 200,
            data: person,
            message: 'update success'
        })
    }
    destroy(req: Request, res: Response): Response {
        const { id } = req.params;
        data = data.filter(item => item.id != id)
        return res.json({
            code: 200,
            data: {},
            message: 'destroy success'
        })

    }

}

export default new UserController();