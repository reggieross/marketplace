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
      console.log(res);
      setProducts(res);
    });
  }, []);

  return (
    <div className={styles['root']}>
      {products.map(product => (
        <ProductCard key={`${product.name}_${product.id}`} product={product} />
      ))}
    </div>
  );
});
