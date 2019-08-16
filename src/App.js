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
import Geolocation from "./Geolocation";

import Content from './content.json';

/**
 * All parts of UI have been broken down into different components
 * 
 * The GenericContent component is responsible in rendering all the individual
 * content pages, and all other contents that is to be rendered in the
 * center such as Help, About Us, Further Information and Contact Us
 * 
 * In add routing and rendering all content pages will be done thru the
 * configuration file named "content.json". "content.json" contains an array
 * of objects that include the "slug", path to get content from database, path
 * to locally cached icon, and full name and title. Thus each object can be 
 * rendered on the home page as square cells, and content to be fetched when
 * the content page is to be rendered individually.
 * 
 * The Emergency, People, Alert and Geolocation components has been fetched
 * from other teams. They do not behave the same as on other team's UI due
 * to style conflicts and dependency. All foreign components has been modified
 * to fit our own styles.
 */

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

        {/* Redirect with state is used to keep user at their desired route after log in */}
        <Route exact path="/emergency" component={() => this.dataManager.tokenIsValid() ? <Emergency /> : <Redirect
          to={{
            pathname: "/login",
            state: { referrer: '/emergency' }
          }}
        />} />
        <Route exact path="/people" component={() => this.dataManager.tokenIsValid() ? <People manager={this.dataManager}/> : <Redirect
          to={{
            pathname: "/login",
            state: { referrer: '/people' }
          }}
        />} />
        <Route exact path="/alerts" component={() => this.dataManager.tokenIsValid() ? <Alert /> : <Redirect
          to={{
            pathname: "/login",
            state: { referrer: '/alerts' }
          }}
        />} />
        <Route exact path ="/login" render = {()=> ( 
          this.dataManager.tokenIsValid() ? <Redirect to="/"/> :  <Login manager={this.dataManager} history={this.props.history}/>
        )}/>

        {/* All individual content pages are configured in content.json, it can be modified to open all */}
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