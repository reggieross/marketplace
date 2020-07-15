import React from 'react';
import { Product } from '../../types/dataTypes';
import { StandardPage } from '@rbross07/component-lib';

interface AccountPageProps {
    products: Product[];
}

export const AccountPage: React.FC<{}> = React.memo(() => {
    return (
        <StandardPage pageId={'account'}>

        </StandardPage>
    );
});
