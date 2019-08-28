import React from 'react';
import styles from './navLink.module.scss'
import classNames from 'classnames/bind';
import {Link} from "@rbross07/component-lib";

interface NavLinkProps {
  selected: boolean,
  id?: string,
  href: string,
  children: React.ReactNode,
  color?: string
}

export const NavLink: React.FC<NavLinkProps> = ({selected, id, href, children}) => {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('public-nav-link', 'nav-link-root', {'nav-link-selected': selected})}>
      <Link id={id} href={href}>
        {children}
      </Link>
    </div>
  );
};