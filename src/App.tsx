import React from 'react';
import styles from './App.module.scss';
import '@rbross07/component-lib/dest/static/css/main.component-lib.css';
import {Home} from "./views/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Product} from "./views/Product";
import {FourOhFour} from "./views/FourOhFour";

const App: React.FC = () => {
  return (
    <div className={styles['App']}>
      <BrowserRouter>
        <Switch>
          <Route exact path={'/'}  component={Home} />
          <Route path={'/products'}  component={Product} />
          <Route path={'/account'}  component={Product} />
          <Route component={FourOhFour} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
