import React from 'react';
import styles from './App.module.scss';
import '@rbross07/component-lib/dest/static/css/main.component-lib.css';
import {Home} from "./Pages/Home/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {ProductPage} from "./Pages/Product/Product";
import {FourOhFour} from "./Pages/FourOhFour";

const App: React.FC = () => {
  return (
    <div className={styles['App']}>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'}  component={Home} />
          <Route path={'/products'}  component={ProductPage} />
          <Route component={FourOhFour} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
