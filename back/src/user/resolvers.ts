import { PrismaClient, User } from '@prisma/client'
import axios from 'axios'
import JWTservice from '../helpers/jwt'
import { Graphqlcontext } from '../interface'

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

const prisma=new PrismaClient({ log: ["query"] });
 const queries={
    verifygoogletoken:async(parent:any,{token}:{token:string})=>{
        const googletoken=token
        const googleOauthURL=new URL("https://oauth2.googleapis.com/tokeninfo")
        googleOauthURL.searchParams.set("id_token",googletoken)

        const {data}=await axios.get<GoogleTokenResult>(googleOauthURL.toString())
        console.log(data)
        
        const user= await prisma.user.findUnique({ 
            where:{ email:data.email as string}
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

        
        
    },
    getCurrentUser:async(parent:any,arg:any,ctx: Graphqlcontext)=>{
        const id=ctx.user?.id
        if(!id) return null
        
        const user= await prisma.user.findUnique({ where:{ id } })
        return user
    }
    
}

const extraresolvers={
    User:{
        tweets:(parent: User)=> prisma.tweet.findMany({ where: { author: { id: parent.id } } })
    }
}

export const resolvers={queries,extraresolvers}