import React, { useCallback, useState } from 'react';
import styles from './Filters.module.scss';
import FilterListIcon from '@material-ui/icons/FilterList';
import ClearIcon from '@material-ui/icons/Clear';
import { Brand } from './Brand/Brand';
import classNames from 'classnames';
import { Button } from '../../../components/Button/Button';
import { Brand as IBrand } from '../../../types/dataTypes';
import CatalogService from '../../../Service/CatalogService';

export const Filters: React.FC<{}> = React.memo(({}) => {
  console.log('render');
  const [selectedId, setOpenContainerId] = useState<string>('');
  const onClose = () => setOpenContainerId('');

  const isOpen = selectedId !== '';
  return (
    <div className={styles['root']}>
      <div
        className={classNames(styles['icon'], {
          [styles['open']]: isOpen,
        })}
        onClick={isOpen ? onClose : undefined}
      >
        {isOpen ? <ClearIcon /> : <FilterListIcon />}
      </div>
      <Brand
        id={'brand'}
        selectedId={selectedId}
        openContentForId={setOpenContainerId}
        onClose={onClose}
      />
      <div>
        <div className={styles['buttonContainer']}>
          <Button ariaLabel={'apply-filter-button'}>Apply </Button>
        </div>
      </div>
    </div>
  );
});
