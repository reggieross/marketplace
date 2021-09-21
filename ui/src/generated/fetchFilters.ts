/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchFilters
// ====================================================

export interface fetchFilters_catalog_filters_brand {
  __typename: "Brand";
  name: string | null;
  id: string | null;
}

export interface fetchFilters_catalog_filters {
  __typename: "ProductFilters";
  brand: fetchFilters_catalog_filters_brand[];
}

export interface fetchFilters_catalog {
  __typename: "ProductResponse";
  filters: fetchFilters_catalog_filters;
}

export interface fetchFilters {
  catalog: fetchFilters_catalog;
}
