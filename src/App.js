import React from "react";
import "./style.css";
import { Route, Switch, Redirect } from "react-router-dom";

import Menubar from "./MenuBar/MenuBar.js";
import CellContainer from "./CellContainter/CellContainer.js";
import Footer from "./Footer/Footer.js";
import GenericContent from "./GenericContent/GenericContent.js";
import Help from "./Help/Help.js";
import Information from "./Information/Information.js";
import About from "./About/About.js";
import ContactUs from "./ContactUs/ContactUs.js";
import Emergency from "./Emergency/Emergency.js";
import People from "./People/People.js";
import Alert from "./Alert/Alert.js";
import Login from "./Login/Login.js";

import Content from './content.json';

class App extends React.Component {

  constructor(props){
    super(props);
    this.dataManager = require("./dataManager")()
  }

  render(){
    return (
      <div>        
      {/* <Header/> */}
      <Menubar manager={this.dataManager}/>

      <Switch>
        <Route
          exact
          path="/"
          component={() => <CellContainer content={Content} />}
        />
        <Route exact path="/help" component={() => <Help />} />
        <Route exact path="/information" component={() => <Information />} />
        <Route exact path="/about" component={() => <About />} />
        <Route exact path="/contact" component={() => <ContactUs />} />
        
        <Route exact path="/emergency" component={() => this.dataManager.tokenIsValid() ? <Emergency /> : <></>} />
        <Route exact path="/people" component={() => this.dataManager.tokenIsValid() ? <People manager={this.dataManager}/> : <></>} />
        <Route exact path="/alerts" component={() => this.dataManager.tokenIsValid() ? <Alert /> : <></> } />
        <Route exact path ="/login" render = {()=> ( 
          this.dataManager.tokenIsValid() ? <Redirect to="/"/> :  <Login manager={this.dataManager} history={this.props.history}/>
        )}/>

        {Content.map((r, k) => (
          <Route
            exact
            path={"/content/" + r.slug}
            component={() => <GenericContent params={r} />}
            key={k}
          />
        ))}

      </Switch>
      <Footer />
      </div>
    )
  }

}
export default App;