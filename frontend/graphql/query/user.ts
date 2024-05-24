import { graphql } from '../../gql'; 

export const verifygoogletokenQuery = graphql(`
  query Query($token: String!) {
    verifygoogletoken(token: $token)
  }
`)

export const getcurrentuser= graphql(`
query GetCurrentUser {
  getCurrentUser {
    email
    firstname
    id
    profileimageURL
    lastname
    tweets{
      id
      content
      author{
        firstname
        lastname
        profileimageURL
        id
      }
    }
  }
}`)

export const getuseridQuery= graphql(`
query Getuserbyid($getuserbyidId: ID!) {
  getuserbyid(id: $getuserbyidId) {
    firstname
    id
    lastname
    profileimageURL
    tweets {
      content
      id
      author {
        firstname
        lastname
        profileimageURL
      }
    }
  }
}
`)

