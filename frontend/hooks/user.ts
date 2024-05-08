
import {  useQuery } from "react-query"
import { graphqlclient } from "../client/api"
import { getCurrentUserQuery } from "../graphql/query/user"

export const useCurrentUser=()=>{
     const query=useQuery({
        queryKey:["current-user"],
        queryFn:()=> graphqlclient.request(getCurrentUserQuery)

     })
     return{...query, user: query.data?.getCurrentUser} 
}

