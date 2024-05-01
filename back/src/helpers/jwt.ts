import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';

class JWTservice{
   public static generatewebtoken(user:User){
    const payload={
        email:user?.email,
        id:user?.id
    }
    const token=jwt.sign(payload,process.env.JWT_SECRET as string)
    return token
   }
}

export default JWTservice