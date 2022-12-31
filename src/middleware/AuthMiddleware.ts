import { Request, Response, NextFunction } from "express";

export const auth = (req: Request, res: Response, next: NextFunction) : any => {
    let auth = false;

    if(auth){
        next();
    }else{
        return res.json({
            success: false,
            message: "Unauthorized"
        })
    }

}