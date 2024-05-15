import {  useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { graphqlclient } from "../client/api"
import { getAllTweetsQuery } from "../graphql/query/tweet"
import { createTweetMutation } from "../graphql/mutations/tweet"
import { Createtweetdata } from "../gql/graphql"
import toast from "react-hot-toast"

export const useCreateTweet = () =>{
   const queryclient=useQueryClient()

    const mutation=useMutation({
        mutationFn: (payload: Createtweetdata )=> graphqlclient.request(createTweetMutation , { payload }),
        onMutate:(payload)=> toast.loading('creating tweet',{id:"1"}),
        onSuccess:async (payload) =>{
           await queryclient.invalidateQueries({queryKey:["all-tweet"]})
           toast.success("created tweet",{id:"1"})
        }
    })
    return mutation
}

export const useGetAllTweets = () =>{
    const query=useQuery({
        queryKey: ["all-tweet"],
        queryFn: ()=> graphqlclient.request(getAllTweetsQuery)
    })
    return {...query, tweets: query.data?.getallTweets}
}