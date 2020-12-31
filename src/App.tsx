import React from 'react';
import styles from './App.module.scss';
import '@rross_llc/component-lib/dist/css/main.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ProductPage } from './components/pages/Product/Product';
import { FourOhFour } from './components/pages/FourOhFour';
import { AccountPage } from './components/pages/Account/Account';
import {Login} from "./components/pages/Login/Login";

const App: React.FC = () => {
  return (
    <div className={styles['App']}>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'} component={ProductPage} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/account'} component={AccountPage} />
          <Route component={FourOhFour} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
