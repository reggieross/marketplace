import React from 'react';
import styles from './Button.module.scss';
import classNames from 'classnames';

export const Button: React.FC<{
  onClick?: () => void;
  rounded?: boolean;
  filled?: boolean;
  ariaLabel?: string;
}> = React.memo(
  ({ onClick, rounded = false, filled = false, ariaLabel, children }) => {
    return (
      <button
        aria-label={ariaLabel}
        className={classNames(styles['root'], { [styles['filled']]: filled })}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }
);
