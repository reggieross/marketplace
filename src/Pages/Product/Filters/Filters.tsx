import React, { useCallback, useState } from 'react';
import styles from './Filters.module.scss';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Category } from './Category/Category';

export const Filters: React.FC<{}> = ({}) => {
  console.log('render');
  const [selectedId, setOpenContainerId] = useState<string>('');
  const onClose = () => setOpenContainerId('');

  return (
    <div className={styles['root']}>
      <div className={styles['filterIcon']}>
        <FilterListIcon />
      </div>
      <Category
        id={'category'}
        selectedId={selectedId}
        openContentForId={setOpenContainerId}
        onClose={onClose}
      />
      <Category
        id={'category-2'}
        selectedId={selectedId}
        openContentForId={setOpenContainerId}
        onClose={onClose}
      />
      <Category
        id={'category-3'}
        selectedId={selectedId}
        openContentForId={setOpenContainerId}
        onClose={onClose}
      />
    </div>
  );
};
