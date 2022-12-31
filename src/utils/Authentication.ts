import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'

class Authentication {
    public static PasswordHash = (password:string) : Promise<string> => bcrypt.hash(password, 10)
    public static PasswordCompare = async (password:string, encryptedText: string) : Promise<boolean> => await bcrypt.compare(password, encryptedText)
    public static GenerateToken = (id: number, username:string, password:string) : string => {
        const secretKey: string = process.env.JWT_SECRET_KEY || 'secret'
        const token: string = jwt.sign({id, username, password}, secretKey)
        return token
    }
}

export default Authentication;