import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'
export const auth = (req: Request, res: Response, next: NextFunction) : any => {
    if(!req.headers.authorization){
        return res.status(401).json({
            status: 401,
            message: 'Unauthorized'
        });
    }
    let secretKey = process.env.JWT_SECRET_KEY || 'secret'
    const token:string = req.headers.authorization.split(" ")[1]

    try{
        const credential : string | jwt.JwtPayload = jwt.verify(token, secretKey)
        if(credential) {
            req.app.locals.credential = credential
            return next();
        }
        return res.status(401).json({
            status: 401,
            message: 'Invalid token'
        })
    }catch(err){
        return res.status(401).json({
            status: 401,
            message: err
        })
    }

}