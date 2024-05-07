import { GraphQLSchemaContext } from "@apollo/server";
import { PrismaClient } from "@prisma/client";
import { connect } from "http2";

interface createtweetpayload{
    content:string,
    imageURL?:string
}

const mutations={
    // createtweet:async(parent:any,{payload}:{payload:createtweetpayload},ctx:GraphQLSchemaContext)=>{
    //     if(!ctx.user) throw new Error("user not authenticated")
    //     const tweet=await PrismaClient.tweet.create({
    //       data:{
    //         content:payload.content,
    //         imageUrl: payload.imageURL,
    //         author:{connect:{id:ctx.user.id}}
    //       }
    // })
    // return tweet
    // }
}

export const resolvers={mutations}