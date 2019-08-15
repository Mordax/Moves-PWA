import React from "react";
import "./Footer.css";
import { withTranslation } from "react-i18next";

class Footer extends React.Component {
  render() {
    const { t } = this.props;
    return (
      <div>
        <footer>
          <h2 className="our-mission">{t("Our Mission")}</h2>
          <p>
            {t("Our help is")} <b>{t("Free")}</b> {t("Mission Blurb")}
          </p>
        </footer>
      </div>
    );
  }
}

export default withTranslation()(Footer);
