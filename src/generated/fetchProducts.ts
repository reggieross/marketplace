/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchProducts
// ====================================================

export interface fetchProducts_getProducts_products {
  __typename: "Product";
  name: string | null;
  id: string | null;
}

export interface fetchProducts_getProducts {
  __typename: "ProductResponse";
  products: fetchProducts_getProducts_products[];
}

export interface fetchProducts {
  getProducts: fetchProducts_getProducts;
}

export interface fetchProductsVariables {
  categoryIds?: string[] | null;
}
