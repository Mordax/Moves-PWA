import React from 'react';
import './style.css';
import Header from './Header/Header.js';
import Menubar from './MenuBar/MenuBar.js';
import CellContainer from './CellContainter/CellContainer.js';
import Cell from './Cell/Cell.js';
import Footer from './Footer/Footer.js';
import Content from './content.json'
import { Route, Switch } from 'react-router-dom'
import GenericContent from './GenericContent';


function App() {
  return (
    <div>        
      <Header/>
      <Menubar/>

      <Switch>
        <Route exact path="/" component={() => <CellContainer content={Content} />} />
        {
          Content.map((r, k) => 
            <Route exact path={"/content/" + r.name} component={() => <GenericContent params={r}/>} key={k}/>)
        }
      </Switch>
      <Footer/>  
    </div>
  );
}

export default App;
