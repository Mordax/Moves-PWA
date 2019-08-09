import React from 'react';
import "./MenuBar.css"

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
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Need help?</a></li>
                    <li><a href="#">Futher information</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>

                <ul id="language-menu">
                    <li><a href="#">language</a></li>
                    <li><a href="#">language</a></li>
                    <li><a href="#">language</a></li>
                    <li><a href="#">language</a></li>
                    <li><a href="#">language</a></li>
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