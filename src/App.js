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
import Geolocation from "./GeoLocation/Geolocation";

class App extends React.Component {

  constructor(props){
    super(props);
    // DataManager is passed into components to be used for saving/fetching from indexedDB, localStorage and backend API
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
        
        {/* These are protected routes and should ONLY render if a valid token is valid, else redirect them to the login page*/}
        <Route exact path="/emergency" component={() => this.dataManager.tokenIsValid() ? <Emergency /> : <Redirect
          to={{
            pathname: "/login",
            state: { referrer: '/emergency' } // Reference route, used to return back to this page
          }}
        />} />
        <Route exact path="/people" component={() => this.dataManager.tokenIsValid() ? <People manager={this.dataManager}/> : <Redirect
          to={{
            pathname: "/login",
            state: { referrer: '/people' } // Reference route, used to return back to this page
          }}
        />} />
        <Route exact path="/alerts" component={() => this.dataManager.tokenIsValid() ? <Alert /> : <Redirect
          to={{
            pathname: "/login",
            state: { referrer: '/alerts' } // Reference route, used to return back to this page
          }}
        />} />
        <Route exact path ="/login" render = {()=> ( 
          this.dataManager.tokenIsValid() ? <Redirect to="/"/> :  <Login manager={this.dataManager} history={this.props.history}/>
        )}/>

        {/* Map every object in content array to a Route tag and pass in the value as a parameter*/}
        {Content.map((value, index) => (
          <Route
            exact
            path={"/content/" + value.slug}
            component={() => <GenericContent params={value} />}
            key={index}
          />
        ))}

        <Route exact path="/geolocation" component={() => <Geolocation />} />

        {/* Catch all unrecognized routes and redirect to home page*/}
        <Route render={() => ( <Redirect to="/"/> )}/>
      </Switch>
      <Footer />
      </div>
    )
  }

}
export default App;