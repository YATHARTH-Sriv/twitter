import { graphql } from "../../gql";

export const getAllTweetsQuery = graphql(`
   query GetAllTweets{
    getallTweets{
        id
        content
        imageURL
        author {
            id
            firstname
            lastname
            profileimageURL
          }
    }
   }
`)

export const getsignedurlfortweet = graphql(`
query Getsignedurl($imageName: String!, $imageType: String!) {
  getPresignedURL(imageName: $imageName, imageType: $imageType)
}
`)