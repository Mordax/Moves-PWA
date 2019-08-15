import React from "react";
import "./Cell.css";
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: this.props.params.order,
      slug: this.props.params.slug,
      fullName: this.props.params.fullName,
      title: this.props.params.title,
      icon: this.props.params.icon,
      content: this.props.params.content
    };
  }

  render() {
    const { t } = this.props;
    const fn = "contentNames." + this.state.slug;
    return (
      <>
        <img src={this.state.icon} alt="" />

        <h3 className="cell-text">{t(fn)}</h3>
      </>
    );
  }
}
export default withTranslation() (Cell);
