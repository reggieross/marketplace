import React from 'react';
import styles from './App.module.scss';
import '@rbross07/component-lib/dist/css/main.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ProductPage} from "./Pages/Product/Product";
import {FourOhFour} from "./Pages/FourOhFour";

const App: React.FC = () => {
  return (
    <div className={styles['App']}>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} component={ProductPage} />
          <Route component={FourOhFour} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
