import { Request } from "express";
const db = require("../db/models")

class TodoService {
    credentials : {
        id : number
    }
    body : Request['body']
    params : Request['params']

    constructor(req: Request) {
        this.body = req.body;
        this.params = req.params;
        this.credentials = req.app.locals.credentials;
    }

    getAll = async () => {
        const todos = await db.todo.findAll({
            where: {
                user_id: this.credentials.id
            },
            attributes: ['id', 'description']
        });

        return todos;
    }

    store = async () => {
        const { description } = this.body
        const todo = await db.todo.create({
            user_id: this.credentials.id,
            description
        })
        
        return todo;
    }

    show = async () => {
        const { id } = this.params
        const todo = await db.todo.findOne({
            where: {
                id,
                user_id: this.credentials.id
            }
        })

        return todo;
    } 

    update = async () => {
        const { description } = this.body
        const { id } = this.params
        const todo = await db.todo.update({description}, {
            where: {
                id,
                user_id: this.credentials.id
            }
        })

        return todo;
    }

    delete = async () => {
        const { id } = this.params
        await db.todo.destroy({
            where: {
                id,
                user_id: this.credentials.id
            }
        })

        return true
    }

}

export default TodoService;