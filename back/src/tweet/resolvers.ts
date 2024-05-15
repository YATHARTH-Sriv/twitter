
import { PrismaClient, Tweet } from "@prisma/client";
import { Graphqlcontext } from '../interface'
import { error } from "console";
import  {PutObjectCommand,S3Client} from "@aws-sdk/client-s3"
import {getSignedUrl} from "@aws-sdk/s3-request-presigner"


interface createtweetpayload{
    content:string,
    imageURL?:string
}
const s3client= new S3Client({region:"ap-south-1",credentials:{accessKeyId:`${process.env.S3_ACCESS}`,secretAccessKey:`${process.env.S3_ACCESS_SECRET}`}})
const prisma=new PrismaClient({ log: ["query"] });

const queries={
    getallTweets:()=> prisma.tweet.findMany({ orderBy: { createdAt:"desc" } }),
    getPresignedURL:async(parent:any,{imageType, imageName}:{imageType: string, imageName: string}, ctx: Graphqlcontext)=>{
        if(!ctx.user) return error("user not authenticated")
        const allowedImagetypes=["image/jpg","jpg","image/jpeg","jpeg","image/png","png","image/webp","webp"]
        if(!allowedImagetypes.includes(imageType)) return error("image type not supported")
        const putobjectcommmand= new PutObjectCommand({
                        Bucket:"twitter-yatharth-bucket",
                        Key:`uploads/${ctx.user.id}/tweets/${imageName}-${Date.now()}.${imageType}`    
                })
        const signedurl= await getSignedUrl(s3client,putobjectcommmand)
        return signedurl
    }
}

const mutations={
    createtweet:async(parent:any,{payload}:{payload:createtweetpayload},ctx: Graphqlcontext)=>{
        if(!ctx.user) throw new Error("user not authenticated")
        const tweet=await prisma.tweet.create({
          data:{
            content:payload.content,
            imageURL: payload.imageURL,
            author:{connect:{id: ctx.user.id}}
          }
    })
    return tweet
    }
}

const extraresolvers={
    Tweet:{
        author:(parent: Tweet)=> prisma.user.findUnique({ where:{ id: parent.authorId } })
    }
}
export const resolvers={mutations,extraresolvers,queries}