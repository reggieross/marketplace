import { Brand, Product } from '../types/dataTypes';
import { getGQLService } from './GQLClient';
import { ProductTransformer } from './transformers/ProductTransformer';
import { BrandTransformer } from './transformers/BrandTransformer';

const fetchProducts = async (brandIds?: string[]): Promise<Product[]> => {
  const service = getGQLService();
  try {
    const products = await service.fetchProducts({ brandIds });
    return ProductTransformer.transform(products.data.catalog.products);
  } catch (e) {
    return [];
  }
};

const fetchFilters = async (brandIds?: string[]): Promise<Brand[]> => {
  const service = getGQLService();
  try {
    const products = await service.fetchFilters({});
    const filters = products.data.catalog.filters;
    return BrandTransformer.transform(filters ? filters.brand : []);
  } catch (e) {
    return [];
  }
};

const CatalogService = {
  fetchProducts,
  fetchFilters,
};

export default CatalogService;
