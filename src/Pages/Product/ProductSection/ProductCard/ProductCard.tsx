import React from 'react';
import { Card } from '../../../../components/Card/Card';
import { Product } from '../../../../types/dataTypes';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import styles from './ProductCard.module.scss';
import { ProductCardDialog } from './ProductCardDialog';

export const ProductCard: React.FC<{ product: Product }> = React.memo(
  ({ product }) => {
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const handleClickOpen = () => {
      setDialogOpen(true);
    };

    const handleClose = () => {
      setDialogOpen(false);
    };

    const likeProduct = () => {};
    const unlikeProduct = () => {};
    const likeIcon = product.isLiked ? (
      <FavoriteIcon onClick={unlikeProduct} />
    ) : (
      <FavoriteBorderIcon onClick={likeProduct} />
    );
    const subHeader = <div>View prices </div>;
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
          onImageClick={handleClickOpen}
        />{' '}
        <ProductCardDialog
          product={product}
          open={dialogOpen}
          handleClose={handleClose}
        />
      </>
    );
  }
);
