import {GraphQLClient} from "graphql-request"
const isClient=typeof window !=="undefined"
export const graphqlclient=new GraphQLClient("http://localhost:8000/graphql",{
    headers:{
        Authorization:isClient ? `${window.localStorage.getItem("token")}`:""
        
    }
})