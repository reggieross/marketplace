import React, { useCallback } from 'react';
import { FilterWrapper } from '../FilterWrapper';

export const Category: React.FC<{
  id: string;
  selectedId: string;
  openContentForId: (id: string) => void;
  onClose: () => void;
}> = React.memo(({ id, openContentForId, selectedId, onClose }) => {
  const content = <div />;
  return (
    <FilterWrapper
      title={'Category'}
      content={content}
      openContentForId={openContentForId}
      open={id === selectedId}
      id={id}
      onClose={onClose}
    />
  );
});
