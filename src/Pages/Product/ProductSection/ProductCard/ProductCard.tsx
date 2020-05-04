import React from 'react';
import { Card } from '../../../../components/Card/Card';
import { Product } from '../../../../types/dataTypes';

export const ProductCard: React.FC<{ product: Product }> = React.memo(
  ({ product }) => {
    const subHeader = <div>View prices </div>;
    const footer = <div>Lowest price </div>;
    return <Card title={product.name} footer={footer} subHeader={subHeader} />;
  }
);
