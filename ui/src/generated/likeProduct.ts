/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: likeProduct
// ====================================================

export interface likeProduct_catalog_likeProduct {
  __typename: 'LikeProductResponse';
  success: boolean | null;
}

export interface likeProduct_catalog {
  __typename: 'CatalogMutationResponse';
  likeProduct: likeProduct_catalog_likeProduct | null;
}

export interface likeProduct {
  catalog: likeProduct_catalog;
}

export interface likeProductVariables {
  productId: string;
  liked: boolean;
}
