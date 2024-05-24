/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\nmutation Createtweet($payload: createtweetdata) {\n    createtweet(payload: $payload) {\n      id\n    }\n  }\n": types.CreatetweetDocument,
    "\n   query GetAllTweets{\n    getallTweets{\n        id\n        content\n        imageURL\n        author {\n            id\n            firstname\n            lastname\n            profileimageURL\n          }\n    }\n   }\n": types.GetAllTweetsDocument,
    "\nquery Getsignedurl($imageName: String!, $imageType: String!) {\n  getPresignedURL(imageName: $imageName, imageType: $imageType)\n}\n": types.GetsignedurlDocument,
    "\n  query Query($token: String!) {\n    verifygoogletoken(token: $token)\n  }\n": types.QueryDocument,
    "\nquery GetCurrentUser {\n  getCurrentUser {\n    email\n    firstname\n    id\n    profileimageURL\n    lastname\n    tweets{\n      id\n      content\n      author{\n        firstname\n        lastname\n        profileimageURL\n        id\n      }\n    }\n  }\n}": types.GetCurrentUserDocument,
    "\nquery Getuserbyid($getuserbyidId: ID!) {\n  getuserbyid(id: $getuserbyidId) {\n    firstname\n    id\n    lastname\n    profileimageURL\n    tweets {\n      content\n      id\n      author {\n        firstname\n        lastname\n        profileimageURL\n      }\n    }\n  }\n}\n": types.GetuserbyidDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nmutation Createtweet($payload: createtweetdata) {\n    createtweet(payload: $payload) {\n      id\n    }\n  }\n"): (typeof documents)["\nmutation Createtweet($payload: createtweetdata) {\n    createtweet(payload: $payload) {\n      id\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n   query GetAllTweets{\n    getallTweets{\n        id\n        content\n        imageURL\n        author {\n            id\n            firstname\n            lastname\n            profileimageURL\n          }\n    }\n   }\n"): (typeof documents)["\n   query GetAllTweets{\n    getallTweets{\n        id\n        content\n        imageURL\n        author {\n            id\n            firstname\n            lastname\n            profileimageURL\n          }\n    }\n   }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery Getsignedurl($imageName: String!, $imageType: String!) {\n  getPresignedURL(imageName: $imageName, imageType: $imageType)\n}\n"): (typeof documents)["\nquery Getsignedurl($imageName: String!, $imageType: String!) {\n  getPresignedURL(imageName: $imageName, imageType: $imageType)\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Query($token: String!) {\n    verifygoogletoken(token: $token)\n  }\n"): (typeof documents)["\n  query Query($token: String!) {\n    verifygoogletoken(token: $token)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery GetCurrentUser {\n  getCurrentUser {\n    email\n    firstname\n    id\n    profileimageURL\n    lastname\n    tweets{\n      id\n      content\n      author{\n        firstname\n        lastname\n        profileimageURL\n        id\n      }\n    }\n  }\n}"): (typeof documents)["\nquery GetCurrentUser {\n  getCurrentUser {\n    email\n    firstname\n    id\n    profileimageURL\n    lastname\n    tweets{\n      id\n      content\n      author{\n        firstname\n        lastname\n        profileimageURL\n        id\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\nquery Getuserbyid($getuserbyidId: ID!) {\n  getuserbyid(id: $getuserbyidId) {\n    firstname\n    id\n    lastname\n    profileimageURL\n    tweets {\n      content\n      id\n      author {\n        firstname\n        lastname\n        profileimageURL\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery Getuserbyid($getuserbyidId: ID!) {\n  getuserbyid(id: $getuserbyidId) {\n    firstname\n    id\n    lastname\n    profileimageURL\n    tweets {\n      content\n      id\n      author {\n        firstname\n        lastname\n        profileimageURL\n      }\n    }\n  }\n}\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;