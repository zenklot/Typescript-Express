import { Request, Response } from 'express'

class AuthController {
    create(req: Request, res: Response): Response {
        const { id, name } = req.body;
        return res.json({
            message: "cek"
        })
    }
    

}

export default new AuthController();