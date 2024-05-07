export const types=`

input createtweetdata{
    content:String!,
    imageURL:String
}

type tweet{
    id: String!
    content:String!
    imageURL:String
    author:User
}

`