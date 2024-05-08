
import { PrismaClient, Tweet } from "@prisma/client";
import { Graphqlcontext } from '../interface'


interface createtweetpayload{
    content:string,
    imageURL?:string
}

const prisma=new PrismaClient({ log: ["query"] });

const queries={
    getallTweets:()=> prisma.tweet.findMany({ orderBy: { createdAt:"desc" } })
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