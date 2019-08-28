import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@rbross07/component-lib/dest/static/css/main.caa19371.css';
import { Content, ProductSection } from "@rbross07/component-lib";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Content > Some Content</Content>
       <ProductSection products={[{name: 'string'}, {name: 'some-other-string'}]}/>
      </header>
    </div>
  );
};

export default App;
