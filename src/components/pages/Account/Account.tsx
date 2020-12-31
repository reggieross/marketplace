import React from 'react';
import { Product } from '../../../types/dataTypes';
import { AuthenticatedPage } from '@rross_llc/component-lib';

interface AccountPageProps {
  products: Product[];
}

export const AccountPage: React.FC<{}> = React.memo(() => {
  const onUnauthenticated = () => {
    window.location.href = '/login';
  };
  return (
    <AuthenticatedPage onUnauthenticated={onUnauthenticated} pageId={'account'}>
      <div>Account Info</div>
    </AuthenticatedPage>
  );
});
