import { graphql } from "../../gql";

export const createTweetMutation=graphql(`
mutation Createtweet($payload: createtweetdata) {
    createtweet(payload: $payload) {
      id
    }
  }
`)