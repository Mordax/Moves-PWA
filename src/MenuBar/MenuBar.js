/* eslint-disable no-unused-vars */
import React from 'react';
import "./MenuBar.css";
import { Link } from 'react-router-dom';
import { useTranslation, withTranslation, Trans } from 'react-i18next';

class MenuBar extends React.Component {

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
        const {t, i18n } = this.props;
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
                    <Link to="/emergency"><li>Emergency Contact</li></Link>
                    <Link to="/people"><li>People</li></Link>
                    <Link to="/alerts"><li>Annoucements</li></Link>
                </ul>

                <ul id="language-menu">
                    <li>EN</li>
                    <li>DK</li>
                    <li>FR</li>
                </ul>

                <div className="grid-presentation">
                    <h2>{t('We can help you with')}: <br /></h2>
                    <h3>Our help is free and confidential</h3>
                </div>

            </div>
        )
    }

  
}
export default withTranslation() (MenuBar);