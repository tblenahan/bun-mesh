// @ts-nocheck

import { InContextSdkMethod } from '@graphql-mesh/types';
import { MeshContext } from '@graphql-mesh/runtime';

export namespace OpenBreweryDbTypes {
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
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: { input: string; output: string; }
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** Represents empty values */
  Void: { input: void; output: void; }
  /** A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt. */
  URL: { input: URL | string; output: URL | string; }
  ObjMap: { input: any; output: any; }
};

export type Query = {
  /**
   *
   * >**Method**: `GET`
   * >**Base URL**: `https://api.openbrewerydb.org/v1/`
   * >**Path**: `breweries?by_city={args.byCity}`
   *
   *
   */
  breweries?: Maybe<Array<Maybe<query_breweries_items>>>;
};


export type QuerybreweriesArgs = {
  byCity?: InputMaybe<Scalars['String']['input']>;
};

export type query_breweries_items = {
  id?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  brewery_type?: Maybe<Scalars['String']['output']>;
  address_1?: Maybe<Scalars['String']['output']>;
  address_2?: Maybe<Scalars['Void']['output']>;
  address_3?: Maybe<Scalars['Void']['output']>;
  city?: Maybe<Scalars['String']['output']>;
  state_province?: Maybe<Scalars['String']['output']>;
  postal_code?: Maybe<Scalars['String']['output']>;
  country?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  website_url?: Maybe<Scalars['URL']['output']>;
  state?: Maybe<Scalars['String']['output']>;
  street?: Maybe<Scalars['String']['output']>;
};

export type HTTPMethod =
  | 'GET'
  | 'HEAD'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'CONNECT'
  | 'OPTIONS'
  | 'TRACE'
  | 'PATCH';

  export type QuerySdk = {
      /** 
>**Method**: `GET`
>**Base URL**: `https://api.openbrewerydb.org/v1/`
>**Path**: `breweries?by_city={args.byCity}`

 **/
  breweries: InContextSdkMethod<Query['breweries'], QuerybreweriesArgs, MeshContext>
  };

  export type MutationSdk = {
    
  };

  export type SubscriptionSdk = {
    
  };

  export type Context = {
      ["OpenBreweryDB"]: { Query: QuerySdk, Mutation: MutationSdk, Subscription: SubscriptionSdk },
      
    };
}
