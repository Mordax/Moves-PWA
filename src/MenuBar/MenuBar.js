import React from 'react';
import "./MenuBar.css";
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

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
        const { t } = this.props;
        return (
            <div>
                <div className="menu-wrapper">
                    <button onClick={((e) => this.showlanguage(e))}>{t('Choose Language')}</button>
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
                    <Link to="/"><li>{t('Home')}</li></Link>
                    <Link to="/help"><li>{t('Help')}</li></Link>
                    <Link to="/information"><li>{t('Information')}</li></Link>
                    <Link to="/about"><li>{t('About')}</li></Link>
                    <Link to="/contact"><li>{t('Contact')}</li></Link>
                    <Link to="/emergency"><li>{t('Emergency')}</li></Link>
                    <Link to="/people"><li>{t('People')}</li></Link>
                    <Link to="/alerts"><li>{t('Alerts')}</li></Link>
                </ul>

                <ul id="language-menu">
                    <button onClick={() => i18next.changeLanguage('en')}><li>EN</li></button>
                    <button onClick={() => i18next.changeLanguage('dk')}><li>DK</li></button>
                    <button onClick={() => i18next.changeLanguage('fr')}><li>FR</li></button>
                    <button onClick={() => i18next.changeLanguage('ar')}><li>AR</li></button>
                </ul>

                <div className="grid-presentation">
                    <h2>{t('We can help you with')}: <br /></h2>
                    <h3>{t('Our help is free')}</h3>
                </div>

            </div>
        )
    }

  
}
export default withTranslation() (MenuBar);