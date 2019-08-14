import React from 'react';
import "./Header.css";
import { withTranslation } from 'react-i18next';

class Header extends React.Component {
    render(){
        const { t } = this.props;
        return (
            <div>
                <header>
                    <div className="header-content-wrapper">
                        <h1><b>MO:VES</b></h1>
                        <h5>{t('Header')}</h5>
                        <hr />
                        <a href="#" className="emergency-call-wrapper">
                            <img src="images/phone.png" alt="" />
                            <div className="phone-numbers">
                                <h4>+212 (0) 688-840-686</h4>
                                <h4>+45 51 34 13 70</h4>
                            </div>
                        </a>
                    </div>
                </header>
            </div>
        )
    }

}

export default withTranslation() (Header);