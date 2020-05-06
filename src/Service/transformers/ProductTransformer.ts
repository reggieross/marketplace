import {Product} from "../../types/dataTypes";
import {fetchProducts_catalog_products} from "../../generated/fetchProducts";


const transform = (products: fetchProducts_catalog_products[]): Product[] => {
  return products.reduce<Product[]>((acc, next) => {
    acc.push({
      name: next.name || '',
      prices: []
    });
    return acc;
  }, []);
};


export const ProductTransformer = {
  transform
};