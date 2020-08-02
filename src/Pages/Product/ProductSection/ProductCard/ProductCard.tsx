import React from 'react';
import { Card } from '../../../../components/Card/Card';
import { Product } from '../../../../types/dataTypes';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './ProductCard.module.scss';
import { ProductCardDialog } from './ProductCardDialog';
import CatalogService from '../../../../Service/CatalogService';

export const ProductCard: React.FC<{ product: Product }> = React.memo(
  ({ product }) => {
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [isLiked, setIsLiked] = React.useState(product.isLiked || false);
    const handleClickOpen = () => {
      setDialogOpen(true);
    };

    const handleClose = () => {
      setDialogOpen(false);
    };

    const likeProduct = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsLiked(true);
      CatalogService.likeProduct(product.id, true);
    };

    const unlikeProduct = (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsLiked(false);
      CatalogService.likeProduct(product.id, false);
    };

    const likeIcon = isLiked ? (
      <FavoriteIcon aria-label={'unlike-icon'} onClick={unlikeProduct} />
    ) : (
      <FavoriteBorderIcon aria-label={'like-icon'} onClick={likeProduct} />
    );
    const subHeader = (
      <div className={styles['subHeader']}>
        <h4>Brand</h4>
        <div>Found on 3 sites</div>
      </div>
    );
    const footer = (
      <div className={styles['footer']}>
        <span>Lowest price </span>
        {likeIcon}
      </div>
    );
    return (
      <>
        <Card
          title={product.name}
          footer={footer}
          subHeader={subHeader}
          onCardClick={handleClickOpen}
        />
        <ProductCardDialog
          product={product}
          open={dialogOpen}
          handleClose={handleClose}
        />
      </>
    );
  }
);
