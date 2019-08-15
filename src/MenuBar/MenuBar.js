import React from "react";
import "./MenuBar.css";
import { Link } from "react-router-dom";

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

  render() {
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
                <img src="images/phone-receiver.svg" />
                EMERGENCY
              </a>
            </li>

            <li className="navigation-item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation-item">
              <Link to="/help">Need help?</Link>
            </li>
            <li className="navigation-item">
              {" "}
              <Link to="/information">Futher information</Link>
            </li>
            <li className="navigation-item">
              {" "}
              <Link to="/about">About us</Link>
            </li>
            <li className="navigation-item">
              {" "}
              <Link to="/contact">Contact</Link>
            </li>

            <li className="navigation-item">
              {" "}
              <Link to="/people">People</Link>
            </li>
            <li className="navigation-item">
              {" "}
              <Link to="/alerts">Annoucements</Link>
            </li>
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
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/help">
            <li>Need help?</li>
          </Link>
          <Link to="/information">
            <li>Futher information</li>
          </Link>
          <Link to="/about">
            <li>About us</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
          <Link to="/emergency">
            <li>Emergency Contact</li>
          </Link>
          <Link to="/people">
            <li>People</li>
          </Link>
          <Link to="/alerts">
            <li>Annoucements</li>
          </Link>
        </ul>

        <ul id="language-menu">
          <li>EN</li>
          <li>DK</li>
          <li>FR</li>
        </ul>
      </>
    );
  }
}
export default MenuBar;
