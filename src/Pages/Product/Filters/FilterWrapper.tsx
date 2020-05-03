import React, { ReactElement } from 'react';
import styles from './FilterWrapper.module.scss';
import classNames from 'classnames';

export const FilterWrapper: React.FC<{
  title: string;
  id: string;
  open: boolean;
  content: ReactElement;
  openContentForId: (id: string) => void;
  onClose: () => void;
}> = React.memo(({ title, content, openContentForId, id, open, onClose }) => {
  const onOpen = () => {
    openContentForId(id);
  };

  return (
    <div className={styles['root']}>
      <div
        onClick={open ? onClose : onOpen}
        className={classNames(styles['titleContainer'], {
          [styles['open']]: open,
        })}
      >
        {title}
      </div>
      {open && (
        <div className={styles['filterContentContainer']}>{content}</div>
      )}
    </div>
  );
});
