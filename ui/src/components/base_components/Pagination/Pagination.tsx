import React from 'react';
import styles from './Pagination.module.scss';
import classNames from 'classnames';

export const Pagination: React.FC<{
  numPages: number;
  currentPage: number;
  onPageClick: (page: number) => void;
}> = ({ numPages, currentPage, onPageClick }) => {
  const nextDisabled = currentPage + 1 >= numPages;
  const prevDisabled = currentPage - 1 <= 0;
  return (
    <div className={styles['root']}>
      <div
        onClick={!prevDisabled ? () => onPageClick(currentPage - 1) : undefined}
        className={classNames(styles['navigation-arrows'], {
          [styles['disabled']]: prevDisabled,
        })}
      >
        prev
      </div>
      {[...new Array(numPages).keys()].map(key => {
        return (
          <div
            onClick={() => onPageClick(key + 1)}
            className={classNames(styles['page'], {
              [styles['active']]: key === currentPage - 1,
            })}
          >
            {key + 1}
          </div>
        );
      })}
      <div
        onClick={!nextDisabled ? () => onPageClick(currentPage - 1) : undefined}
        className={classNames(styles['navigation-arrows'], {
          [styles['disabled']]: nextDisabled,
        })}
      >
        next
      </div>
    </div>
  );
};
