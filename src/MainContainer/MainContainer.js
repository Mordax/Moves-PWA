import React from 'react';
import { Route, Switch } from 'react-router-dom'
import "./MainContainer.css"
import Header from '../Header/Header.js';
import CellContainer from '../CellContainter/CellContainer.js';
import Footer from '../Footer/Footer.js';
import Menubar from '../MenuBar/MenuBar.js'
import Content from '../content.json'

class MainContainer extends React.Component {
    render() {
        return (
            <div>        
                <Header/>
                <Menubar/>

                <Switch>
                    <Route exact path = '/' render = { () => (
                        <CellContainer content={Content}/>
      			    ) }/>
                </Switch>

                <Footer/>  
            </div>
        )
    }
}

export default MainContainer;