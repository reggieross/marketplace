import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import styles from './shoppingCartLink.module.scss';

interface ShoppingCartLinkProps {
  itemCount: number
  color?: string
}

export class ShoppingCartLink extends React.Component<ShoppingCartLinkProps> {
  render() {
    const {itemCount, color} = this.props;
    return (
      <div style={{color}} className={styles['shopping-cart-link-root']}>
        <FontAwesomeIcon size={'lg'} icon={faShoppingCart} />
        {itemCount > 0 ? `(${itemCount})` : null}
      </div>
    )
  }
}