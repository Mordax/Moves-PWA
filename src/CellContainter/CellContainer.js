import React from "react";
import "./CellContainer.css";
import Cell from "../Cell/Cell.js";
import { Link } from "react-router-dom";

class CellContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content
    };
  }

  render() {
    return (
      <div className="cell-container">
        {this.state.content.map((value, key) => {
          const _path = "/content/" + value.name;
          return (
            <div className="square" key={key}>
              <Link to={_path} className="content">
                <Cell params={value} />
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CellContainer;
