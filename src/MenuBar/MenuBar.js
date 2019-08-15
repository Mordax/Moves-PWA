import React from "react";
import "./MenuBar.css";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import i18next from "i18next";
import client from "../LangClient";

class MenuBar extends React.Component {
  constructor(props) {
    super(props);
    this.dataManager = this.props.manager;
    this.removeToken = this.dataManager.removeToken.bind(this);
    // this.client = client;
    this.getCurrentLanguageAndFlag = this.getCurrentLanguageAndFlag.bind(this);
  }

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
    let navIcon = document.getElementById("nav-icon");
    navIcon.classList.remove("change");
  }

  changeLanguage(lang) {
    i18next.changeLanguage(lang);
    console.log("emitted ", lang);
    client.emit("lang", lang);
  }

  getCurrentLanguageAndFlag() {
    switch (i18next.language) {
      case "en-CA":
        return (
          <React.Fragment>
            <img src="images/united-kingdom.svg" alt="UK flag" />
            EN
          </React.Fragment>
        );
      case "dk-DK":
        return (
          <React.Fragment>
            <img src="images/denmark.svg" alt="DK flag" />
            DK
          </React.Fragment>
        );
      case "fr-FR":
        return (
          <React.Fragment>
            <img src="images/france.svg" alt="FR flag" />
            FR
          </React.Fragment>
        );
      case "ar":
        return (
          <React.Fragment>
            <img src="images/morocco.svg" alt="MO flag" />
            AR
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <img src="images/united-kingdom.svg" alt="UK flag" />
            EN
          </React.Fragment>
        );
    }
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
            <h5>{t("Header")}</h5>
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
            
            <Link to="/emergency">
              <li id="emergency-button">
                <div className="button">
                  <img
                    src="images/phone-receiver.svg"
                    alt={t("EmergencyButton")}
                  />
                  EMERGENCY
                </div>
              </li>
            </Link>

            <li
              onClick={() => this.collapseAll()}
              className="navigation-item wide-item"
            >
              <Link to="/" aria-label="Home">
                {t("Home")}
              </Link>
            </li>

            <li
              onClick={() => this.collapseAll()}
              className="navigation-item wide-item"
            >
              {" "}
              <Link to="/help" aria-label="Help">
                {t("Help")}
              </Link>
            </li>

            <li
              onClick={() => this.collapseAll()}
              className="navigation-item wide-item"
            >
              {" "}
              <Link to="/information" aria-label="Information">
                {" "}
                {t("Information")}
              </Link>
            </li>

            <li
              onClick={() => this.collapseAll()}
              className="navigation-item wide-item"
            >
              {" "}
              <Link to="/about" aria-label="About">
                {" "}
                {t("About")}
              </Link>
            </li>

            <li
              onClick={() => this.collapseAll()}
              className="navigation-item wide-item"
            >
              <Link to="/contact" aria-label="Contact">
                {" "}
                {t("Contact")}
              </Link>
            </li>

            {this.dataManager.tokenIsValid() ? (
              <React.Fragment>
                <li
                  onClick={() => this.collapseAll()}
                  className="navigation-item wide-item"
                >
                  <Link to="/emergency"> {t("Emergency")}</Link>
                </li>

                <li
                  onClick={() => this.collapseAll()}
                  className="navigation-item wide-item"
                >
                  <Link to="/people"> {t("People")}</Link>
                </li>

                <li
                  onClick={() => this.collapseAll()}
                  className="navigation-item wide-item"
                >
                  <Link to="/alerts"> {t("Alerts")}</Link>
                </li>

                <li>
                  <Link className="wide-item" to="" onClick={this.removeToken}>
                    {t("Log out")}
                  </Link>
                </li>
              </React.Fragment>
            ) : (
              <li className="wide-item" onClick={() => this.collapseAll()}>
                <Link to="/login">{t("Log in")}</Link>
              </li>
            )}

            <li>
              <a
                className="button wide-item"
                id="language-button"
                onClick={e => this.showlanguage(e)}
              >
                {this.getCurrentLanguageAndFlag()}
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
          <li onClick={() => this.collapseAll()}>
            <Link to="/">{t("Home")}</Link>
          </li>

          <li onClick={() => this.collapseAll()}>
            <Link to="/help">{t("Help")}</Link>
          </li>

          <li onClick={() => this.collapseAll()}>
            <Link to="/information">{t("Information")} </Link>
          </li>

          <li onClick={() => this.collapseAll()}>
            <Link to="/about">{t("About")}</Link>
          </li>

          <li onClick={() => this.collapseAll()}>
            <Link to="/contact">{t("Contact")} </Link>
          </li>

          {this.dataManager.tokenIsValid() ? (
            <React.Fragment>
              <li onClick={() => this.collapseAll()}>
                <Link to="/emergency">{t("Emergency")}</Link>
              </li>

              <li onClick={() => this.collapseAll()}>
                <Link to="/people">{t("People")}</Link>
              </li>

              <li onClick={() => this.collapseAll()}>
                <Link to="/alerts">{t("Alerts")}</Link>
              </li>
            </React.Fragment>
          ) : (
            <></>
          )}
        </ul>

        <ul id="language-menu">
          <button
            onClick={() => {
              this.changeLanguage("en-CA");
              this.collapseAll();
            }}
          >
            <img
              className="button wide-item"
              src="images/united-kingdom.svg"
              alt="UK flag"
            />
            <li>EN</li>
          </button>
          <button
            onClick={() => {
              this.changeLanguage("dk-DK");
              this.collapseAll();
            }}
          >
            <img
              className="button wide-item"
              src="images/denmark.svg"
              alt="DK flag"
            />
            <li>DK</li>
          </button>
          <button
            onClick={() => {
              this.changeLanguage("fr-FR");
              this.collapseAll();
            }}
          >
            <img
              className="button wide-item"
              src="images/france.svg"
              alt="FR flag"
            />
            <li>FR</li>
          </button>
          <button
            onClick={() => {
              this.changeLanguage("ar");
              this.collapseAll();
            }}
          >
            <img
              className="button wide-item"
              src="images/morocco.svg"
              alt="MO flag"
            />
            <li>AR</li>
          </button>
        </ul>
        <div className="empty-space" />
      </>
    );
  }
}
export default withTranslation()(MenuBar);
