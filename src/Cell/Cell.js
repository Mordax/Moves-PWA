import React from "react";
import "./Cell.css";

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: this.props.params.order,
      name: this.props.params.name,
      fullName: this.props.params.fullName,
      title: this.props.params.title,
      icon: this.props.params.icon,
      content: this.props.params.content
    };
  }

  render() {
    return (
      <>
        <img src={this.state.icon} alt="" />

        <h3 className="cell-text">{this.state.fullName}</h3>
      </>
    );
  }
}
export default Cell;
