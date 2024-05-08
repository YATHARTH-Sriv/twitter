export const types=`

input createtweetdata{
    content: String!,
    imageURL: String
}

type Tweet{
    id: String!
    content:String!
    imageURL:String
    author:User
}

`