/* tslint:disable */
// This file was automatically generated and should not be edited.
import ApolloClient, { QueryOptions, ApolloQueryResult, ObservableQuery } from 'apollo-client';
import gql from 'graphql-tag';
import { FetchResult } from "apollo-link";

import { fetchProducts, fetchProductsVariables } from './fetchProducts'

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export interface GqlService {
  
    fetchProducts: (variables: fetchProductsVariables, options?: Omit<QueryOptions<fetchProductsVariables>, 'query' | 'variables'>) => Promise<ApolloQueryResult<fetchProducts>>;
    watchfetchProducts: (variables: fetchProductsVariables, options?: Omit<QueryOptions<fetchProductsVariables>, 'query' | 'variables'>) => ObservableQuery<fetchProducts, fetchProductsVariables>;

  
}

export function createService(client: ApolloClient<any>) : GqlService {
  return {
    
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

      
  }
}


  export const fetchProductsQuery = gql`query fetchProducts($categoryIds:[String!]){getProducts(input:{categoryIds:$categoryIds}){__typename products(input:{categoryIds:$categoryIds}){__typename id name}}}`