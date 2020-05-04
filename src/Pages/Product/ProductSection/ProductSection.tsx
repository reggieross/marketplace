import React from 'react';
import { Product } from '../../../types/dataTypes';
import CatalogService from '../../../Service/CatalogService';
import { ProductCard } from './ProductCard/ProductCard';
import styles from './ProductSection.module.scss'

export const ProductSection: React.FC<{}> = React.memo(({}) => {
  const [products, setProducts] = React.useState<Product[]>([]);
  React.useEffect(() => {
    CatalogService.fetchProducts().then(res => {
      setProducts(res);
    });
  }, []);

  return (
    <div className={styles['root']}>
      {products.map(product => (
        <ProductCard key={product.name} product={product} />
      ))}
    </div>
  );
});
