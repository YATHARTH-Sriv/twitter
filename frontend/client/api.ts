import {GraphQLClient} from "graphql-request"
const isClient=typeof window !=="undefined"
export const graphqlclient=new GraphQLClient("https://d281nd5os32y8u.cloudfront.net/graphql",{
    headers:{
        Authorization:isClient ? `${window.localStorage.getItem("token")}`:""
        
    }
})