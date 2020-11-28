/* tslint:disable */
// This file was automatically generated and should not be edited.
import ApolloClient, { QueryOptions, ApolloQueryResult, ObservableQuery, MutationOptions } from 'apollo-client';
import gql from 'graphql-tag';
import { FetchResult } from "apollo-link";

import { fetchFilters } from './fetchFilters'
import { fetchProducts, fetchProductsVariables } from './fetchProducts'
import { likeProduct, likeProductVariables } from './likeProduct'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export interface GqlService {
  
    fetchFilters: ( options?: Omit<QueryOptions, 'query' | 'variables'>) => Promise<ApolloQueryResult<fetchFilters>>;
    watchfetchFilters: ( options?: Omit<QueryOptions, 'query' | 'variables'>) => ObservableQuery<fetchFilters>;

    fetchProducts: (variables: fetchProductsVariables, options?: Omit<QueryOptions<fetchProductsVariables>, 'query' | 'variables'>) => Promise<ApolloQueryResult<fetchProducts>>;
    watchfetchProducts: (variables: fetchProductsVariables, options?: Omit<QueryOptions<fetchProductsVariables>, 'query' | 'variables'>) => ObservableQuery<fetchProducts, fetchProductsVariables>;

  
    likeProduct: (variables: likeProductVariables, options?: Omit<MutationOptions<likeProduct, likeProductVariables>, 'mutation' | 'variables'>) => Promise<FetchResult<likeProduct>>;

}

export function createService(client: ApolloClient<any>) : GqlService {
  return {
    
    fetchFilters: ( options: Omit<QueryOptions, 'query' | 'variables'> = {}) => {
      return client.query<fetchFilters>({
        ...options,
        query: fetchFiltersQuery,
        
      });
    },
    watchfetchFilters: ( options: Omit<QueryOptions, 'query' | 'variables'> = {}) => {
      return client.watchQuery<fetchFilters>({
        ...options,
        query: fetchFiltersQuery,
        
      });
    },

    fetchProducts: (variables: fetchProductsVariables, options: Omit<QueryOptions<fetchProductsVariables>, 'query' | 'variables'> = {}) => {
      return client.query<fetchProducts, fetchProductsVariables>({
        ...options,
        query: fetchProductsQuery,
        variables
      });
    },
    watchfetchProducts: (variables: fetchProductsVariables, options: Omit<QueryOptions<fetchProductsVariables>, 'query' | 'variables'> = {}) => {
      return client.watchQuery<fetchProducts, fetchProductsVariables>({
        ...options,
        query: fetchProductsQuery,
        variables
      });
    },

    
    likeProduct: (variables: likeProductVariables, options: Omit<MutationOptions<likeProduct, likeProductVariables>, 'mutation' | 'variables'> = {}) => {
      return client.mutate<likeProduct, likeProductVariables>({
        ...options,
        mutation: likeProductMutation,
        variables
      });
    },
  
  }
}


  export const fetchFiltersQuery = gql`query fetchFilters{catalog{__typename filters{__typename brand{__typename id name}}}}`
  
  export const fetchProductsQuery = gql`query fetchProducts($brandIds:[String!],$pageInfo:PaginationInput){catalog{__typename products(input:{pageInfo:$pageInfo,filters:{brandIds:$brandIds}}){Price{__typename amount currency site url}__typename id name}}}`
  
  export const likeProductMutation = gql`mutation likeProduct($liked:Boolean!,$productId:String!){catalog{__typename likeProduct(input:{productId:$productId,liked:$liked}){__typename success}}}`