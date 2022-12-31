import bcrypt from 'bcrypt';

class PasswordHash {
    public static hash = (password:string) : Promise<string> => bcrypt.hash(password, 10)
}

export default PasswordHash;