import React from 'react';
import { Product } from '../../../types/dataTypes';
import CatalogService from '../../../Service/CatalogService';
import { ProductCard } from './ProductCard/ProductCard';
import styles from './ProductSection.module.scss';
import { LIMIT } from '../../../generated/globalTypes';

export const ProductSection: React.FC = React.memo(() => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [page] = React.useState<number>(1);
  React.useEffect(() => {
    CatalogService.fetchProducts(undefined, {
      page,
      limit: LIMIT.FIFTY,
    }).then(res => {
      setProducts(res);
    });
    // eslint-disable-next-line
  }, []);

  console.log(products.length);

  return (
    <div className={styles['root']}>
      {products.map(product => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
});
