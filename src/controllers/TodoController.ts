import { Request, Response } from 'express'
import IController from './ControllerInterface'
const db = require('../db/models');

class TodoController implements IController {
    index = async (req: Request, res: Response): Promise<Response> => {
        const { id } =req.app.locals.credential;
        const todo = await db.todo.findAll({
            where: {
                user_id: id
            },
            attributes: ['id', 'description']
        });
        return res.status(200).json({
            status: 200,
            data: todo,
        });
    }
    create = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.app.locals.credential;
        const { description } = req.body
        const todos = await db.todo.create({
            user_id: id,
            description
        })
        return res.status(200).json({
            code: 200,
            data: todos,
            message: 'Create Todo'
        })
    }
    show = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        const user_id = req.app.locals.credential.id;
        const todo = await db.todo.findOne({
            where:{
                id,
                user_id
            },
            attributes: ['id', 'description']
        })

        return res.status(200).json({
            status: 200,
            data: todo,
            message: 'Show Todo'
        })
        
    }
    update = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;
        const user_id = req.app.locals.credential.id;
        const { description } = req.body

        const todo = await db.todo.update({description},{
            where: {
                id,
                user_id
            },
        })
        
        return res.json({
            code: 200,
            message: 'update success'
        })
    }
    destroy = async (req: Request, res: Response): Promise<Response>  => {
        const { id } = req.params;
        const user_id = req.app.locals.credential.id;
        await db.todo.destroy({
            where: {
                id,
                user_id
            }
        })
        return res.json({
            code: 200,
            data: {},
            message: 'destroy success'
        })

    }

}

export default new TodoController();