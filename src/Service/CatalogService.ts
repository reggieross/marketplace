import { Brand, Product } from '../types/dataTypes';
import { getGQLClient } from './GQLClient';
import { ProductTransformer } from './transformers/ProductTransformer';
import { BrandTransformer } from './transformers/BrandTransformer';
import { PaginationInput } from '../generated/globalTypes';
import { likeProduct as LikeProductResponse } from '../generated/likeProduct';
import { FetchResult } from 'apollo-link';

const fetchProducts = async (
  brandIds?: string[],
  pageInfo?: PaginationInput
): Promise<Product[]> => {
  const service = getGQLClient();
  try {
    const products = await service.fetchProducts({ brandIds, pageInfo });
    return ProductTransformer.transform(products.data.catalog.products);
  } catch (e) {
    return [];
  }
};

const fetchFilters = async (brandIds?: string[]): Promise<Brand[]> => {
  const service = getGQLClient();
  try {
    const products = await service.fetchFilters({});
    const filters = products.data.catalog.filters;
    return BrandTransformer.transform(filters ? filters.brand : []);
  } catch (e) {
    return [];
  }
};

const likeProduct = (productId: string, liked: boolean): void => {
  const service = getGQLClient();
  try {
    service
      .likeProduct({ productId, liked })
      .then((res: FetchResult<LikeProductResponse>) => {
        if (
          !(
            res.data &&
            res.data.catalog.likeProduct &&
            res.data.catalog.likeProduct.success
          )
        ) {
        }
      });
  } catch (e) {}
};

const CatalogService = {
  fetchProducts,
  fetchFilters,
  likeProduct,
};

export default CatalogService;
