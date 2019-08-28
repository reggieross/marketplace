import React from 'react';
import styles from './chrome.module.scss';
import {Grid} from "@rbross07/component-lib";
import {Nav} from "./Nav/Nav";
import {Footer} from "./Footer/Footer";

interface ChromeProps {
    selectedId: string
    children: React.ReactNode;
}

export const Chrome: React.FC<ChromeProps> = ({
 selectedId,
 children,
}) => (
  <div>
    <Nav selectedId={selectedId} />
    <Grid className={styles['chrome-page-content']}>
        {children}
    </Grid>
    <Footer />
  </div>
);
export default Chrome;