import {  Brand } from '../../types/dataTypes';
import { fetchFilters_catalog_filters_brand } from '../../generated/fetchFilters';

const transform = (brands: fetchFilters_catalog_filters_brand[]): Brand[] => {
  return brands.reduce<Brand[]>((acc, next) => {
    acc.push({
      name: next.name || '',
      id: next.id || '',
    });
    return acc;
  }, []);
};

export const BrandTransformer = {
  transform,
};
