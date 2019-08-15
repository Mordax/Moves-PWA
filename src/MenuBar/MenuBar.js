import React from "react";
import "./MenuBar.css";
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class MenuBar extends React.Component {
  shownav(u) {
    // Select And Icon and Togge "change class"
    let navIcon = document.getElementById("nav-icon");
    navIcon.classList.toggle("change");
    //select a language menu, and remove its "show class"
    let z = document.getElementById("language-menu");
    z.classList.remove("show");
    //select a mobile-meniu and show it
    let y = document.getElementById("mobile-menu");
    y.classList.toggle("show");
    //select body and apply overflow : hidden
    var body = document.getElementsByTagName("BODY")[0];
    body.classList.toggle("mobile-overflow-switch");
  }

  showlanguage(x) {
    x.target.classList.toggle("change");
    let z = document.getElementById("mobile-menu");
    z.classList.remove("show");
    let navIcon = document.getElementById("nav-icon");
    navIcon.classList.remove("change");
    let y = document.getElementById("language-menu");
    y.classList.toggle("show");
  }

  collapseAll() {
    let m = document.getElementById("mobile-menu");
    m.classList.remove("show");
    let l = document.getElementById("language-menu");
    l.classList.remove("show");
  }

  render() {
    const { t } = this.props;
    return (
      <>
        <div className="menu-wrapper">
          <div className="MOVES-LOGO">
            <h1>
              <b>MO:VES</b>
            </h1>
            <h5>The Moroccan Volunteer Emergency Service</h5>
          </div>
          <ul className="navigation">
            {/* <li>
              {" "}
              <button
                id="language-button"
                className="button"
                onClick={e => this.showlanguage(e)}
              >
                <img src="images/united-kingdom.svg" />
                EN
              </button>
            </li>
            <li>
              {" "}
              <button
                id="emergency-button"
                className="button"
                onClick={e => this.showlanguage(e)}
              >
                <img src="images/united-kingdom.svg" />
                EN
              </button>
            </li> */}
            <li id="emergency-button">
              <a className="button">
                <img src="images/phone-receiver.svg" alt={t('EmergencyButton')} />
                EMERGENCY
              </a>
            </li>
            <Link to="/">
              <li onClick={() => this.collapseAll()} className="navigation-item">
                {t('Home')}
              </li>
            </Link>
            <Link to="/help">
              <li onClick={() => this.collapseAll()} className="navigation-item">
                {t('Help')}
              </li>
            </Link>
            <Link to="/information">
              <li onClick={() => this.collapseAll()} className="navigation-item">
                {" "}
                {t('Information')}
              </li>
            </Link>
            <Link to="/about">
              <li onClick={() => this.collapseAll()} className="navigation-item">
                {" "}
                {t('About')}
              </li>
            </Link>
            <Link to="/contact">
              <li onClick={() => this.collapseAll()} className="navigation-item">
                {" "}
                {t('Contact')}
              </li>
            </Link>

            <Link to="/emergency">
              <li onClick={() => this.collapseAll()} className="navigation-item">
                {" "}
                {t('Emergency')}
              </li>
            </Link>
            <Link to="/people">
              <li onClick={() => this.collapseAll()} className="navigation-item">
                {" "}
                {t('People')}
              </li>
            </Link>
            <Link to="/alerts">
              <li onClick={() => this.collapseAll()} className="navigation-item">
                {" "}
                {t('Alerts')}
              </li>
            </Link>

            <li>
              <a
                className="button"
                id="language-button"
                onClick={e => this.showlanguage(e)}
              >
                <img src="images/united-kingdom.svg" />
                EN
              </a>
            </li>

            {/** This li is for the 3 bar menu toggle button */}
            <li id="menu-button">
              <div
                className="container"
                id="nav-icon"
                onClick={u => this.shownav(u)}
              >
                <div className="bar1" />
                <div className="bar2" />
                <div className="bar3" />
              </div>
            </li>
          </ul>
        </div>
        <hr />

        <ul id="mobile-menu">
          <Link to="/"><li onClick={() => this.collapseAll()}>{t('Home')}</li></Link>
          <Link to="/help"><li onClick={() => this.collapseAll()}>{t('Help')}</li></Link>
          <Link to="/information"><li onClick={() => this.collapseAll()}>{t('Information')}</li></Link>
          <Link to="/about"><li onClick={() => this.collapseAll()}>{t('About')}</li></Link>
          <Link to="/contact"><li onClick={() => this.collapseAll()}>{t('Contact')}</li></Link>
          <Link to="/emergency"><li onClick={() => this.collapseAll()}>{t('Emergency')}</li></Link>
          <Link to="/people"><li onClick={() => this.collapseAll()}>{t('People')}</li></Link>
          <Link to="/alerts"><li onClick={() => this.collapseAll()}>{t('Alerts')}</li></Link>
        </ul>

        <ul id="language-menu">
          <button onClick={() => {i18next.changeLanguage('en'); this.collapseAll();}}><li>EN</li></button>
          <button onClick={() => {i18next.changeLanguage('dk'); this.collapseAll();}}><li>DK</li></button>
          <button onClick={() => {i18next.changeLanguage('fr'); this.collapseAll();}}><li>FR</li></button>
          <button onClick={() => {i18next.changeLanguage('ar'); this.collapseAll();}}><li>AR</li></button>
        </ul>
      </>
    );
  }
}
export default withTranslation() (MenuBar);
