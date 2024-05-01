import express from 'express'
import cors from 'cors'
import { ApolloServer } from '@apollo/server'
import {expressMiddleware} from '@apollo/server/express4'
import bodyParser, { BodyParser } from 'body-parser'
import { User } from './user'

async function serverinit(){


const app=express()
const server=new ApolloServer({
    typeDefs:`
    ${User.type}
    type Query{
        ${User.queries}
    }
    `,resolvers:{
           Query:{
            ...User.resolvers
           }
    },
})
app.use(bodyParser.json())
app.use(cors())
await server.start()
app.use("/graphql",expressMiddleware(server))

app.get('/',(req,res)=>{
    res.send("hello from server")
})

app.listen(8000,()=>{
    console.log("server running on port 8000")
})

}
serverinit()