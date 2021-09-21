import { storiesOf } from '@storybook/react';
import React from 'react';
import { Pagination } from './Pagination';
storiesOf('base_components/Pagination', module).add('Default', () => {
  return <Pagination numPages={10} currentPage={2} onPageClick={() => {}} />;
});
