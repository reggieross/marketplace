import React from 'react';
import { Product } from '../../types/dataTypes';
import { StandardPage } from '@rross_llc/component-lib';
import { Filters } from './Filters/Filters';
import { ProductSection } from './ProductSection/ProductSection';

interface ProductPageProps {
  products: Product[];
}

export const ProductPage: React.FC = React.memo(() => {
  return (
    <StandardPage pageId={'products'}>
      <Filters />
      <ProductSection />
    </StandardPage>
  );
});
