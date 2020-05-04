import {Product} from "../../types/dataTypes";
import {fetchProducts_getProducts_products} from "../../generated/fetchProducts";


const transform = (products: fetchProducts_getProducts_products[]): Product[] => {
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