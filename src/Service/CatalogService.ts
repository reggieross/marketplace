import { Product } from '../types/dataTypes';
import { getGQLService } from './GQLClient';
import { ProductTransformer } from './transformers/ProductTransformer';

const fetchProducts = async (categoryIds?: string[]): Promise<Product[]> => {
  const service = getGQLService();
  try {
    const products = await service.fetchProducts({ categoryIds });
    return ProductTransformer.transform(products.data.getProducts.products);
  } catch (e) {
    return [];
  }
};

const CatalogService = {
  fetchProducts,
};

export default CatalogService;
