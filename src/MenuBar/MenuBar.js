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
            {/* EN */}
          </React.Fragment>
        );
      case "dk-DK":
        return (
          <React.Fragment>
            <img src="images/denmark.svg" alt="DK flag" />
            {/* DK */}
          </React.Fragment>
        );
      case "fr-FR":
        return (
          <React.Fragment>
            <img src="images/france.svg" alt="FR flag" />
            {/* FR */}
          </React.Fragment>
        );
      case "ar":
        return (
          <React.Fragment>
            <img src="images/morocco.svg" alt="MO flag" />
            {/* AR */}
          </React.Fragment>
        );
      default:
        return (
          <React.Fragment>
            <img src="images/united-kingdom.svg" alt="UK flag" />
            {/* EN */}
          </React.Fragment>
        );
    }
  }

	render() {
    	const { t } = this.props;
    	return (
      		<>
        		<div className="menu-wrapper">
          			<div className="Mlogo-wrapper" onClick={() => this.collapseAll()}>
            			<Link to="/">
              				{" "}
              				<h1 className="green Mlogo">
                				MO<span>:</span>VES
              				</h1>
            			</Link>
          			</div>

          			<div className="MOVES-LOGO">
            			<Link to="/" aria-label="Home">
              				<h1 className="green">
                				MO<span>:</span>VES
              				</h1>
            			</Link>
            			<h5>{t("Header")}</h5>
          			</div>

          			<ul className="navigation">
            			{
							this.dataManager.tokenIsValid() ? (
              					<React.Fragment>
                					<li onClick={() => this.collapseAll()} className="navigation-item wide-item">
                  						<Link to="/emergency"> {t("Emergency")}</Link>
                					</li>

                					<li onClick={() => this.collapseAll()} className="navigation-item wide-item">
                  						<Link to="/people"> {t("People")}</Link>
                					</li>

                					<li onClick={() => this.collapseAll()} className="navigation-item wide-item">
                  						<Link to="/alerts"> {t("Alerts")}</Link>
                					</li>

                					<li>
                  						<Link className=" navigation-item wide-item" to="" onClick={this.removeToken}>
                    						{t("Log out")}
                  						</Link>
                					</li>
              					</React.Fragment>
            				) : (
              					<li className="navigation-item wide-item" onClick={() => this.collapseAll()}>
                					<Link to="/login">{t("Log in")}</Link>
              					</li>
							)
						}

            			<li onClick={() => this.collapseAll()} className="navigation-item wide-item">
              				{" "}
              				<Link to="/help" aria-label="Help">
                				{t("Help")}
              				</Link>
            			</li>

            			<li onClick={() => this.collapseAll()} className="navigation-item wide-item">
              				{" "}
              				<Link to="/information" aria-label="Information">
                				{" "}
                				{t("Information")}
              				</Link>
            			</li>

            			<li onClick={() => this.collapseAll()} className="navigation-item wide-item">
              				{" "}
              				<Link to="/about" aria-label="About">
                				{" "}
                				{t("About")}
              				</Link>
            			</li>

            			<li onClick={() => this.collapseAll()} className="navigation-item wide-item">
              				<Link to="/contact" aria-label="Contact">
                				{" "}
                				{t("Contact")}
              				</Link>
            			</li>

            			<li className=" navigation-item">
            				<a className="button language-button" id={`lb-${i18next.language}`} onClick={e => this.showlanguage(e)}>
                				{this.getCurrentLanguageAndFlag()}
              				</a>
            			</li>

            
              			<li id="emergency-button" className="button">
              				<Link to="/emergency">
                				EMERGENCY CALL
                			</Link>
              			</li>
            
            			{/** This li is for the 3 bar menu toggle button */}
            			<li id="menu-button">
              				<div className="container" id="nav-icon" onClick={u => this.shownav(u)}>
                				<div className="bar1" />
                				<div className="bar2" />
                				<div className="bar3" />
              				</div>
            			</li>
          			</ul>
        		</div>

        		<ul id="mobile-menu">
          			<div className="empty-space-mobile" />

          			<li className="">
            			<a className="button mobile-language-menu language-button" onClick={e => this.showlanguage(e)}>
              				{this.getCurrentLanguageAndFlag()}
            			</a>
          			</li>

          			<li onClick={() => this.collapseAll()}>
            			<Link to="/information">{t("Information")} </Link>
          			</li>

          			<li onClick={() => this.collapseAll()}>
            			<Link to="/help">{t("Help")}</Link>
          			</li>

          			<li onClick={() => this.collapseAll()}>
            			<Link to="/about">{t("About")}</Link>
          			</li>

          			<li onClick={() => this.collapseAll()}>
            			<Link to="/contact">{t("Contact")} </Link>
          			</li>

          			{
						this.dataManager.tokenIsValid() ? (
            				<React.Fragment>

              					<li onClick={() => this.collapseAll()} className="">
                					<Link to="/emergency"> {t("Emergency")}</Link>
              					</li>

              					<li onClick={() => this.collapseAll()} className="">
                					<Link to="/people"> {t("People")}</Link>
              					</li>

              					<li onClick={() => this.collapseAll()} className="">
                					<Link to="/alerts"> {t("Alerts")}</Link>
              					</li>

              					<li className="">
                					<Link to="" onClick={this.removeToken}>
                  						{t("Log out")}
                					</Link>
              					</li>

            				</React.Fragment>
          				) : (
            				<li className="" onClick={() => this.collapseAll()}>
              					<Link to="/login">{t("Log in")}</Link>
            				</li>
						)
					}
        		</ul>

        		<ul id="language-menu">
          			<div className="empty-space" />

          			<a onClick={() => { this.changeLanguage("en-CA"); this.collapseAll(); }}>
            			<img className="button wide-item" src="images/united-kingdom.svg" alt="UK flag"/>
            			<li>EN</li>
          			</a>

          			<a onClick={() => { this.changeLanguage("dk-DK"); this.collapseAll() ;}}>
            			<img className="button wide-item" src="images/denmark.svg" alt="DK flag"/>
            			<li>DK</li>
          			</a>

          			<a onClick={() => { this.changeLanguage("fr-FR"); this.collapseAll(); }}>
            			<img className="button wide-item" src="images/france.svg" alt="FR flag"/>
            			<li>FR</li>
          			</a>

          			<a onClick={() => { this.changeLanguage("ar"); this.collapseAll(); }}>
            			<img className="button wide-item" src="images/morocco.svg" alt="MO flag"/>
            			<li>AR</li>
          			</a>
        		</ul>

        		<div className="empty-space" />
      		</>
    	);
  	}
}
export default withTranslation()(MenuBar);
