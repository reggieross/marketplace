import React from 'react';
import styles from './App.module.scss';
import '@rbross07/component-lib/dest/static/css/main.component-lib.css';
import {Home} from "./views/Home";

const App: React.FC = () => {
  return (
    <div className={styles['App']}>
      <Home />
    </div>
  );
};

export default App;
