import React from 'react';
import styles from './ProductCardDialog.module.scss';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import { Product } from '../../../../types/dataTypes';
import { Slide } from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions';

const Transition = React.forwardRef<unknown, TransitionProps>((props, ref) => (
  //@ts-ignore
  <Slide direction="up" ref={ref} {...props} />
));

export const ProductCardDialog: React.FC<{
  product: Product;
  open: boolean;
  handleClose: () => void;
}> = React.memo(({ product, open, handleClose }) => {
  const items = product.prices.map((price, index) => {
    return (
      <ListItem onClick={() => window.open(price.url)} button key={index}>
        <ListItemText primary={price.amount} secondary={price.site} />
      </ListItem>
    );
  });
  return (
    <Dialog
      aria-labelledby={'price-aggregate-dialogue'}
      className={styles['root']}
      fullScreen
      open={open}
      onClose={handleClose}
      TransitionComponent={Transition}
    >
      <AppBar className={styles['appBar']}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={styles['title']}>
            {product.name}
          </Typography>
        </Toolbar>
      </AppBar>
      <List>
        <Divider />
        {items}
      </List>
    </Dialog>
  );
});
