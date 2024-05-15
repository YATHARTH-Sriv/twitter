import { useQuery } from "@tanstack/react-query"
import { graphqlclient } from "../client/api"
import { getcurrentuser } from "../graphql/query/user"


export const useCurrentUser = () => {
    const query = useQuery({
        queryKey: ['current-user'],
        queryFn: () => graphqlclient.request(getcurrentuser)
    })
    return {...query, user:query.data?.getCurrentUser}
} 