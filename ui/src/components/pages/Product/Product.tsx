import React from 'react';
import { StandardPage } from '@rross_llc/component-lib';
import { Filters } from './Filters/Filters';
import { ProductSection } from './ProductSection/ProductSection';

export const ProductPage: React.FC = React.memo(() => {
  return (
    <StandardPage pageId={'products'}>
      <Filters />
      <ProductSection />
    </StandardPage>
  );
});
