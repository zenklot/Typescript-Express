import { Request, Response } from 'express'
const db = require("../db/models")
import PasswordHash from '../utils/PasswordHash';

class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;
        const hashPassword: string = await PasswordHash.hash(password)
        const createdUser = await db.user.create({
            username, password: hashPassword
        });

        return res.status(201).json(createdUser);

        
    }
    login(req: Request, res: Response): Response {
        const { id, name } = req.body;
        return res.json({
            message: "cek"
        })
    }

}

export default new AuthController();