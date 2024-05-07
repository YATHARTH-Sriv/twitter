import { PrismaClient } from '@prisma/client'
import axios from 'axios'
import JWTservice from '../helpers/jwt'

interface GoogleTokenResult{
    iss?:String,
    nbf?:String,
    aud?:String,
    sub?:String,
    email?:String,
    email_verified?:String,
    azp?:String,
    name?:String,
    picture?:String,
    given_name?:String,
    family_name?:String,
    iat?:String,
    exp?:String,
    jti?:String,
    alg?:String,
    kid?:String,
    typ?:String,
}


export const resolvers={
    verifygoogletoken:async(parent:any,{token}:{token:string})=>{
        const googletoken=token
        const googleOauthURL=new URL("https://oauth2.googleapis.com/tokeninfo")
        googleOauthURL.searchParams.set("id_token",googletoken)

        const {data}=await axios.get<GoogleTokenResult>(googleOauthURL.toString())
        console.log(data)
        const prisma=new PrismaClient({ log: ["query"] });
        const user= await prisma.user.findUnique({ 
            where:{email:data.email as string}
        })

        if(!user){
                await prisma.user.create({
                    data: {
                      firstname: data.given_name as string,
                      email: data.email as string,
                      profileimageURL: data.picture as string,
                      lastname:data.family_name as string
                    }
            })
        }
            const presentuser=await prisma.user.findUnique({
                where:{email:data.email as string}
            })
            if(presentuser){
                const generatedtoken=JWTservice.generatewebtoken(presentuser)
                return generatedtoken
            }

        
        
    }
    
}