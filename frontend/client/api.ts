import {GraphQLClient} from "graphql-request"
const isClient=typeof window !=="undefined"
export const graphqlclient=new GraphQLClient("http://localhost:8000/graphql",{
    headers:{
        Authentication:isClient ? `Bearer ${window.localStorage.getItem("twitter_token")}`:""
    }
})