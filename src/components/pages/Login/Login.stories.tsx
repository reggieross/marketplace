import { storiesOf } from '@storybook/react';
import React from 'react';
import { Login } from './Login';
import { LocationState } from 'history';

storiesOf('Login Dialog', module).add('Default', () => {
  return <Login history={{} as LocationState} />;
});
