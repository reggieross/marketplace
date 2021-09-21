import { Price, Product } from '../../types/dataTypes';
import {
  fetchProducts_catalog_products,
  fetchProducts_catalog_products_Price,
} from '../../generated/fetchProducts';

const transform = (products: fetchProducts_catalog_products[]): Product[] => {
  return products.reduce<Product[]>((acc, next) => {
    const prices = transformPrices(next.Price);
    if (prices.length > 0) {
      acc.push({
        id: next.id || '',
        name: next.name || '',
        prices: prices,
      });
    }

    return acc;
  }, []);
};

const transformPrices = (
  prices: fetchProducts_catalog_products_Price[]
): Price[] => {
  return prices.reduce<Price[]>((acc, price) => {
    if (price.amount) {
      acc.push({
        amount: price.amount || '',
        url: getURLForSite(price.site || ''),
        site: price.site || '',
        currency: price.currency || undefined,
      });
    }
    return acc;
  }, []);
};

const getURLForSite = (site: string) => {
  switch (site) {
    case 'HAVEN':
      return 'https://havenshop.com/';
    default:
      return '';
  }
};

export const ProductTransformer = {
  transform,
};
