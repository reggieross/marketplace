import { storiesOf } from '@storybook/react';
import React from 'react';
import { Chip } from './Chip';
storiesOf('base_components/Chip', module)
  .add('Default', () => {
    return (
      <div>
        <Chip name={'Brand'} /> <Chip name={'Brand 3'} />
        <Chip name={'Brand 1'} /> <Chip name={'Brand 4'} />
        <Chip name={'Brand 2'} /> <Chip name={'Brand 5'} />
      </div>
    );
  })
  .add('Remove Chip', () => {
    const onClick = () => {};
    return (
      <div>
        <Chip name={'Brand'} onRemove={onClick} />
        <Chip name={'Brand 3'} onRemove={onClick} />
        <Chip name={'Brand 1'} onRemove={onClick} />
        <Chip name={'Brand 4'} onRemove={onClick} />
        <Chip name={'Brand 2'} onRemove={onClick} />
        <Chip name={'Brand 5'} onRemove={onClick} />
      </div>
    );
  });
