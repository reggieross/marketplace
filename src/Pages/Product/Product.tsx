import React from 'react';
import CatalogService from '../../Service/CatalogService';
import { Product } from '../../types/dataTypes';
import { StandardPage } from '@rbross07/component-lib';

interface ProductPageProps {
  products: Product[];
}

export const ProductPage: React.FC<{}> = React.memo(() => {
  const [products, setProducts] = React.useState<Product[]>([]);
  React.useEffect(() => {
    CatalogService.fetchProducts().then(res => {
      setProducts(res);
    });
  }, []);

  return (
    <StandardPage pageId={'products'}>
      <div> Testing</div>
    </StandardPage>
  );
});
