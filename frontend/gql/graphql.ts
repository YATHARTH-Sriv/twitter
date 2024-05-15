/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Mutation = {
  __typename?: 'Mutation';
  createtweet?: Maybe<Tweet>;
};


export type MutationCreatetweetArgs = {
  payload?: InputMaybe<Createtweetdata>;
};

export type Query = {
  __typename?: 'Query';
  getCurrentUser?: Maybe<User>;
  getPresignedURL?: Maybe<Scalars['String']['output']>;
  getallTweets?: Maybe<Array<Maybe<Tweet>>>;
  getuserbyid?: Maybe<User>;
  verifygoogletoken?: Maybe<Scalars['String']['output']>;
};


export type QueryGetPresignedUrlArgs = {
  imageName: Scalars['String']['input'];
  imageType: Scalars['String']['input'];
};


export type QueryGetuserbyidArgs = {
  id: Scalars['ID']['input'];
};


export type QueryVerifygoogletokenArgs = {
  token: Scalars['String']['input'];
};

export type Tweet = {
  __typename?: 'Tweet';
  author?: Maybe<User>;
  content: Scalars['String']['output'];
  id: Scalars['String']['output'];
  imageURL?: Maybe<Scalars['String']['output']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String']['output'];
  firstname: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  lastname?: Maybe<Scalars['String']['output']>;
  profileimageURL?: Maybe<Scalars['String']['output']>;
  tweets?: Maybe<Array<Maybe<Tweet>>>;
};

export type Createtweetdata = {
  content: Scalars['String']['input'];
  imageURL?: InputMaybe<Scalars['String']['input']>;
};

export type CreatetweetMutationVariables = Exact<{
  payload?: InputMaybe<Createtweetdata>;
}>;


export type CreatetweetMutation = { __typename?: 'Mutation', createtweet?: { __typename?: 'Tweet', id: string } | null };

export type GetAllTweetsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTweetsQuery = { __typename?: 'Query', getallTweets?: Array<{ __typename?: 'Tweet', id: string, content: string, imageURL?: string | null, author?: { __typename?: 'User', firstname: string, lastname?: string | null, profileimageURL?: string | null } | null } | null> | null };

export type GetsignedurlQueryVariables = Exact<{
  imageName: Scalars['String']['input'];
  imageType: Scalars['String']['input'];
}>;


export type GetsignedurlQuery = { __typename?: 'Query', getPresignedURL?: string | null };

export type QueryQueryVariables = Exact<{
  token: Scalars['String']['input'];
}>;


export type QueryQuery = { __typename?: 'Query', verifygoogletoken?: string | null };

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCurrentUserQuery = { __typename?: 'Query', getCurrentUser?: { __typename?: 'User', email: string, firstname: string, id: string, profileimageURL?: string | null, lastname?: string | null, tweets?: Array<{ __typename?: 'Tweet', id: string, content: string, author?: { __typename?: 'User', firstname: string, lastname?: string | null, profileimageURL?: string | null, id: string } | null } | null> | null } | null };


export const CreatetweetDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Createtweet"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"createtweetdata"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createtweet"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreatetweetMutation, CreatetweetMutationVariables>;
export const GetAllTweetsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllTweets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getallTweets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"imageURL"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"profileimageURL"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllTweetsQuery, GetAllTweetsQueryVariables>;
export const GetsignedurlDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Getsignedurl"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageName"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"imageType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getPresignedURL"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imageName"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageName"}}},{"kind":"Argument","name":{"kind":"Name","value":"imageType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"imageType"}}}]}]}}]} as unknown as DocumentNode<GetsignedurlQuery, GetsignedurlQueryVariables>;
export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"verifygoogletoken"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}}]}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const GetCurrentUserDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getCurrentUser"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"profileimageURL"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"tweets"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"firstname"}},{"kind":"Field","name":{"kind":"Name","value":"lastname"}},{"kind":"Field","name":{"kind":"Name","value":"profileimageURL"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;