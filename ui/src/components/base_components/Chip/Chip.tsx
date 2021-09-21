import React from 'react';
import styles from './Chip.module.scss';
import ClearIcon from '@material-ui/icons/Clear';

export const Chip: React.FC<{
  name: string;
  onSelect?: () => void;
  onRemove?: () => void;
}> = ({ name, onSelect, onRemove }) => {
  return (
    <div className={styles['root']} onClick={onSelect}>
      {onRemove && (
        <span onClick={onRemove}>
          <ClearIcon />{' '}
        </span>
      )}
      <span>{name}</span>
    </div>
  );
};
