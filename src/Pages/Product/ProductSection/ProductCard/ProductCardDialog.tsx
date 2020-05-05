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

export const ProductCardDialog: React.FC<{
  product: Product;
  open: boolean;
  handleClose: () => void;
}> = React.memo(({ product, open, handleClose }) => {

  return (
    <Dialog
      className={styles['root']}
      fullScreen
      open={open}
      onClose={handleClose}
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
        <ListItem button>
          <ListItemText primary="Price 1" secondary="Website 1" />
        </ListItem>
        <Divider />
        <ListItem button>
          <ListItemText primary="Price 2" secondary="Website 2" />
        </ListItem>
      </List>
    </Dialog>
  );
});
