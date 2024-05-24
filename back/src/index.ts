import express from 'express'
import cors from 'cors'
import { ApolloServer } from '@apollo/server'
import {expressMiddleware} from '@apollo/server/express4'
import bodyParser from 'body-parser'
import { User } from './user'
import {Tweet} from "./tweet"
import { Graphqlcontext } from './interface'
import JWTservice from './helpers/jwt'


async function serverinit(){


const app=express()
const server=new ApolloServer<Graphqlcontext>({
    typeDefs:`
    ${User.type}
    ${Tweet.types}
    
    type Query{
        ${User.queries},
        ${Tweet.queries}
    }
    type Mutation{
       ${Tweet.mutation}
      
    }
    `,
    resolvers:{
           Query:{
            ...User.resolvers.queries,
            ...Tweet.resolvers.queries,
           },
           Mutation:{
            ...Tweet.resolvers.mutations
           },
           ...Tweet.resolvers.extraresolvers,
           ...User.resolvers.extraresolvers

    },
})
app.use(bodyParser.json())
app.use(cors())
await server.start()
app.use("/graphql", expressMiddleware(server as unknown as ApolloServer,{
    context:async({req,res})=>{
        return { user:  req.headers.authorization ? JWTservice.decodetoken(req.headers.authorization) : null}
        
    }}))

app.get('/',(req,res)=>{
    res.send("hello from server")
})

app.listen(8000,()=>{
    console.log("server running on port 8000")
})

}
serverinit()