import React, { useCallback } from 'react';
import { FilterWrapper } from '../FilterWrapper/FilterWrapper';
import {Chip} from "../../../../components/Chip/Chip";
import styles from './Brand.module.scss'

export const Brand: React.FC<{
  id: string;
  selectedId: string;
  openContentForId: (id: string) => void;
  onClose: () => void;
}> = React.memo(({ id, openContentForId, selectedId, onClose }) => {


  const content = (
    <div className={styles['contentContainer']}>
      <div className={styles['popularSection']}>
        <p>Popular</p>
        <Chip name={'some-brand'} />
        <Chip name={'some-brand'} />
        <Chip name={'some-brand'} />
        <Chip name={'some-brand'} />
        <Chip name={'some-brand'} />
        <Chip name={'some-brand'} />
        <Chip name={'some-brand'} />
      </div>
      <div className={styles['brandSection']}>
        <p>Brands</p>
        <Chip name={'some-brand'} />
        <Chip name={'some-brand'} />
        <Chip name={'some-brand'} />
        <Chip name={'some-brand'} />
        <Chip name={'some-brand'} />
        <Chip name={'some-brand'} />
        <Chip name={'some-brand'} />
      </div>
    </div>
  );
  return (
    <FilterWrapper
      title={'Brand'}
      content={content}
      openContentForId={openContentForId}
      open={id === selectedId}
      id={id}
      onClose={onClose}
    />
  );
});
