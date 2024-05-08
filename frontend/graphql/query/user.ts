import { graphql } from '../../gql'; 

export const verifygoogletokenQuery = graphql(`
  query Query($token: String!) {
    verifygoogletoken(token: $token)
  }
`)

export const getCurrentUserQuery = graphql(`
query GetCurrentUser {
  getCurrentUser {
    email
    firstname
    id
    lastname
    profileimageURL
  }
}`)