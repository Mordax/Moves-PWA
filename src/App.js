import React from 'react';
import './style.css';
import { Route, Switch } from 'react-router-dom';

import Header from './Header/Header.js';
import Menubar from './MenuBar/MenuBar.js';
import CellContainer from './CellContainter/CellContainer.js';
import Footer from './Footer/Footer.js';
import GenericContent from './GenericContent/GenericContent.js';
import Help from './Help/Help.js';
import Information from './Information/Information.js';
import About from './About/About.js';
import ContactUs from './ContactUs/ContactUs.js';
import Emergency from './Emergency/Emergency.js';
import People from './People/People.js';
import Alert from './Alert/Alert.js';
import Login from './Login/Login.js';


import Content from './content.json';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    }
    this.setLoggedInState = this.setLoggedInState.bind(this)
  }

  setLoggedInState(state){
    this.setState({
      loggedIn: state
    })
  }

  render(){
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
        <Route exact path="/emergency" component={() => this.state.loggedIn ? <Emergency /> : <Login loggedInState={this.setLoggedInState}/>} />
        <Route exact path="/people" component={() => this.state.loggedIn ? <People /> : <Login loggedInState={this.setLoggedInState}/>} />
        <Route exact path="/alerts" component={() => this.state.loggedIn ? <Alert /> : <Login loggedInState={this.setLoggedInState}/> } />
        <Route exact path ="/api/useraccounts/login" render = { () => ( <Login loggedInState={this.setLoggedInState}/> ) }/>

        {
          Content.map((r, k) => 
            <Route exact path={"/content/" + r.slug} component={() => <GenericContent params={r}/>} key={k}/>)
        }
        
      </Switch>
      <Footer/>  
    </div>
    )
      }
}

export default App;
