import { Request, Response } from 'express'
const db = require("../db/models")
import Authentication from '../utils/Authentication';

class AuthController {
    register = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;
        const hashPassword: string = await Authentication.PasswordHash(password)
        const createdUser = await db.user.create({
            username, password: hashPassword
        });

        return res.status(201).json(createdUser);

        
    }
    login = async (req: Request, res: Response): Promise<Response> => {
        let { username, password } = req.body;
        // Cari data user dari username
        const user = await db.user.findOne({
            where: {username}
        });

        // cek password
        let compare = await Authentication.PasswordCompare(password, user.password);
        if (!user || !compare) {
            return res.status(401).json({
                message: "Username or password incorrect"
            });
        }

        // generate token
        const token = Authentication.GenerateToken(user.id, username, user.password);
        return res.status(200).json({
            staus: 'success',
            data: {
                access_token: token
            }
        });
    }

}

export default new AuthController();