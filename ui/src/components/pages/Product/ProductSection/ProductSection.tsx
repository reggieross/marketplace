import React from 'react';
import { Product } from '../../../../types/dataTypes';
import CatalogService from '../../../../Service/CatalogService';
import { ProductCard } from './ProductCard/ProductCard';
import styles from './ProductSection.module.scss';
import { LIMIT } from '../../../../generated/globalTypes';
import { CookieMonster, CookieType } from '@rross_llc/component-lib';

export const ProductSection: React.FC = React.memo(() => {
  const [products, setProducts] = React.useState<Product[]>([]);
  const [page] = React.useState<number>(1);
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  React.useEffect(() => {
    const token: string = CookieMonster.getCookie(CookieType.ACCESS_TOKEN);
    if (!token) {
      setIsLoggedIn(false);
    }
  }, []);

  React.useEffect(() => {
    CatalogService.fetchProducts(undefined, {
      page,
      limit: LIMIT.FIFTY,
    }).then(res => {
      setProducts(res);
    });
  }, []);

  return (
    <div className={styles['root']}>
      {products.map(product => (
        <ProductCard key={`${product.name}_${product.id}`} product={product} showLikeIcon={isLoggedIn}/>
      ))}
    </div>
  );
});
