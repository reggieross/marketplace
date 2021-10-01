/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaginationInput } from './globalTypes';

// ====================================================
// GraphQL query operation: fetchProducts
// ====================================================

export interface fetchProducts_catalog_products_Price {
  __typename: 'Price';
  amount: string | null;
  url: string | null;
  currency: string | null;
  site: string | null;
}

export interface fetchProducts_catalog_products {
  __typename: 'Product';
  name: string | null;
  id: string | null;
  Price: fetchProducts_catalog_products_Price[];
}

export interface fetchProducts_catalog {
  __typename: 'ProductResponse';
  products: fetchProducts_catalog_products[];
}

export interface fetchProducts {
  catalog: fetchProducts_catalog;
}

export interface fetchProductsVariables {
  brandIds?: string[] | null;
  pageInfo?: PaginationInput | null;
}
