import { User } from '@prisma/client';
import jwt from 'jsonwebtoken';
import { Jwtuser } from '../interface';

class JWTservice{
   public static generatewebtoken(user:User){
    const payload: Jwtuser={
        email: user?.email,
        id: user?.id
    }
    const token=jwt.sign(payload,process.env.JWT_SECRET as string)
    return token 
   }

   public static decodetoken(token:string){
    try {
        return jwt.verify(token,process.env.JWT_SECRET as string) as Jwtuser
    } catch (error) {
        return null
    }
   }
}

export default JWTservice