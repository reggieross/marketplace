import classNames from 'classnames/bind';
import React from 'react';
import styles from './nav.module.scss';
import {NavLink} from "./NavLink/NavLink";
import {ShoppingCartLink} from "./ShoppingCart/ShoppingCartLink";
import {AccountLink} from "./Account/accountLink";

interface NavProps {
  selectedId: string;
}

interface NavState {
  scroll?: number;
  top?: number;
  height?: number;
}

export class Nav extends React.Component<NavProps, NavState> {
  constructor(props: NavProps) {
    super(props);
    this.state = {};
    this.handleScroll = this.handleScroll.bind(this);
  }

  public componentDidMount() {
    const el = document.querySelector('nav');
    //@ts-ignore
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener('scroll', this.handleScroll);
  }

  public render(): any {
    const { selectedId } = this.props;
    const cx = classNames.bind(styles);
    return (
      //@ts-ignore
      <nav
        className={cx(
          'nav-root',
          //@ts-ignore
          { 'nav-fixed' : this.state.scroll > this.state.top}
        )}>
        <div className={styles['nav-inner-container']}>
          <div className={styles['nav-link-container']}>
            <NavLink selected={selectedId === 'products'} href={'/products'}>Products</NavLink>
            <NavLink selected={selectedId === 'new-arrivals'} href={'/products'}>New Arrivals</NavLink>
            <NavLink selected={selectedId === 'sale'} href={'/products/sale'}>Sale</NavLink>
          </div>

          <div className={styles['nav-link-container']}>
            <AccountLink color={'white'} />
            <ShoppingCartLink color={'white'} itemCount={1}/>
          </div>
        </div>
      </nav>
    );
  }

  private handleScroll() {
    this.setState({ scroll: window.scrollY });
  }
}
