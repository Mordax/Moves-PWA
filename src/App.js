import React from 'react';
import './style.css';
import { Route, Switch } from 'react-router-dom';

import Header from './Header/Header.js';
import Menubar from './MenuBar/MenuBar.js';
import CellContainer from './CellContainter/CellContainer.js';
import Footer from './Footer/Footer.js';
import Content from './content.json';
import GenericContent from './GenericContent/GenericContent.js';
import Help from './Help/Help.js';
import Information from './Information/Information.js';
import About from './About/About.js';
import ContactUs from './ContactUs/ContactUs.js';
import Emergency from './Emergency/Emergency.js';
import People from './People/People.js';
import Alert from './Alert/Alert.js';
import Login from './Login/Login.js';


function App() {
  return (
    <div> 

      <Header/>
      <Menubar/>

      <Switch>
        <Route exact path="/" component={() => <CellContainer content={Content} />} />
        <Route exact path="/help" component={() => <Help />} />
        <Route exact path="/information" component={() => <Information />} />
        <Route exact path="/about" component={() => <About />} />
        <Route exact path="/contact" component={() => <ContactUs />} />
        <Route exact path="/emergency" component={() => <Emergency />} />
        <Route exact path="/people" component={() => <People />} />
        <Route exact path="/alerts" component={() => <Alert />} />

        {
          Content.map((r, k) => 
            <Route exact path={"/content/" + r.name} component={() => <GenericContent params={r}/>} key={k}/>)
        }

      <Route exact path = '/api/useraccounts/login' render = { () => (
                        <Login/>
      			    ) }/>
      </Switch>
      <Footer/>  
    </div>
  );
}

export default App;
