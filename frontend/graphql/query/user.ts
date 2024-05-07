import { graphql } from '../../gql'; // Import the graphql function from the graphql package

export const verifygoogletokenQuery = graphql(`
  query Query($token: String!) {
    verifygoogletoken(token: $token)
  }
`);
