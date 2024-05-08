
export interface Jwtuser{
    id: string,
    email: string
}

export interface Graphqlcontext{
  user?: Jwtuser
} 