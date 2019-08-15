import React from "react";
import "./style.css";
import { Route, Switch, Redirect } from "react-router-dom";

import Menubar from "./MenuBar/MenuBar.js";
import CellContainer from "./CellContainter/CellContainer.js";
import Footer from "./Footer/Footer.js";
import GenericContent from "./GenericContent/GenericContent.js";
import Emergency from "./Emergency/Emergency.js";
import People from "./People/People.js";
import Alert from "./Alert/Alert.js";
import Login from "./Login/Login.js";

import Content from './content.json';
import Geolocation from "./Geolocation";

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
        <Route exact path="/help" component={() => <GenericContent normal={{slug: 'help', content: '/api/content/slug/help'}}/>} />
        <Route exact path="/information" component={() => <GenericContent normal={{slug: 'information', content: '/api/content/slug/information'}}/>} />
        <Route exact path="/about" component={() => <GenericContent normal={{slug: 'about', content: '/api/content/slug/about'}}/>} />
        <Route exact path="/contact" component={() => <GenericContent normal={{slug: 'contactus', content: '/api/content/slug/contactus'}}/>} />

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
        <Route exact path="/geolocation" component={() => <Geolocation />} />

        <Route render={() => ( <Redirect to="/"/> )}/>
      </Switch>
      <Footer />
      </div>
    )
  }

}
export default App;