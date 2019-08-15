import React from "react";
import "./CellContainer.css";
import Cell from "../Cell/Cell.js";
import { Link } from "react-router-dom";

class CellContainer extends React.Component {
  constructor(props) {
    super(props)
    try {
      let z = document.getElementById("mobile-menu");
      z.classList.remove("show");
      let y = document.getElementById("language-menu");
      y.classList.remove("show");
    } catch(e) {

    }
    this.state = {
      content: this.props.content
    };
  }

  render() {
    return (
      <div className="cell-container">
        {this.state.content.map((value, key) => {
          const _path = "/content/" + value.slug;
          return (
            <div className="square" key={key}>
              <Link to={_path} className="content">
                <Cell params={value} />
              </Link>
            </div>
          );
        })}
        <div className="square">
          <Link to={'/geolocation'} className="content">
            <Cell params={{"slug": "geolocation", "icon": "/images/contact.png"}} />
          </Link>
        </div>
      </div>
    );
  }
}

export default CellContainer;
