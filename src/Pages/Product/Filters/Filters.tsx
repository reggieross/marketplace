import React, { useCallback, useState } from 'react';
import styles from './Filters.module.scss';
import FilterListIcon from '@material-ui/icons/FilterList';
import ClearIcon from '@material-ui/icons/Clear';
import { Brand } from './Brand/Brand';
import classNames from 'classnames';
import { Button } from '../../../components/Button/Button';

export const Filters: React.FC<{}> = React.memo(({}) => {
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
          <Button clickEventName={''} ariaLabel={'apply-filter-button'}>Apply </Button>
        </div>
      </div>
    </div>
  );
});
