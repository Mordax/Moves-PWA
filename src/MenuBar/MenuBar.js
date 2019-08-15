import React from 'react';
import "./MenuBar.css";
import { Link } from 'react-router-dom';

class MenuBar extends React.Component {

    constructor(props){
        super(props);
        this.dataManager = this.props.manager;
        this.removeToken = this.dataManager.removeToken.bind(this);
    }

    shownav(x) {
        x.target.classList.toggle("change");
        let z = document.getElementById("language-menu");
        z.classList.remove("show");
        let y = document.getElementById("mobile-menu");
        y.classList.toggle("show");
    }

    showlanguage(x) {
        x.target.classList.toggle("change");
        let z = document.getElementById("mobile-menu");
        z.classList.remove("show");
        let y = document.getElementById("language-menu");
        y.classList.toggle("show");
    }

    render(){
        return (
            <div>
                <div className="menu-wrapper">
                    <button onClick={((e) => this.showlanguage(e))}>Choose Language</button>
                    <button id="menu-button" onClick={((e) => this.shownav(e))}>
                        <div className="container">
                            <div className="bar1"></div>
                            <div className="bar2"></div>
                            <div className="bar3"></div>
                        </div>
                    </button>
                </div>
                <hr />

                <ul id="mobile-menu">
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/help"><li>Need help?</li></Link>
                    <Link to="/information"><li>Futher information</li></Link>
                    <Link to="/about"><li>About us</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    { this.dataManager.tokenIsValid() ? 
                        <React.Fragment>
                            <Link to="/emergency"><li>Emergency Contact</li></Link>
                            <Link to="/people"><li>People</li></Link>
                            <Link to="/alerts"><li>Annoucements</li></Link>
                            <Link to="" onClick={this.removeToken}><li>Log out</li></Link>
                        </React.Fragment> :
                            <Link to="/api/useraccounts/login"><li>Log in</li></Link>
                    }
                </ul>

                <ul id="language-menu">
                    <li>EN</li>
                    <li>DK</li>
                    <li>FR</li>
                </ul>

                <div className="grid-presentation">
                    <h2>We can help you with: <br /></h2>
                    <h3>Our help is free and confidential</h3>
                </div>
            </div>
        )
    }
}
export default MenuBar;