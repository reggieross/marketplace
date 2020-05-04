import React, { ReactElement } from 'react';
import styles from './Card.module.scss';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

export const Card: React.FC<{
  footer?: ReactElement;
  href?: string;
  imgURL?: string;
  subHeader?: ReactElement;
  title: string;
}> = ({ href, imgURL, title, subHeader, footer }) => {
  return (
    <div className={styles['root']}>
      <figure className={styles['imageContainer']}>
        <a href={href}>
          <div
            className={styles['image']}
            style={{
              backgroundImage:
                'url(https://img.ssensemedia.com/images/b_white,c_lpad,g_south,h_706,w_470/c_scale,h_280/f_auto,dpr_2.0/201404M202014_1/versace-red-biggie-sunglasses-hoodie.jpg)',
            }}
          />
          <div className={styles['overlay']}>
            <ExitToAppIcon />
          </div>
        </a>
      </figure>
      <div className={styles['textContainer']}>
        <div className={styles['titleContainer']}>
          <h4>{title}</h4>
          <div>{subHeader}</div>
        </div>
        <div className={styles['cardFooter']}>{footer}</div>
      </div>
    </div>
  );
};
