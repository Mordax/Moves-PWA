import React, { Component } from "react";
import "./GenericContent.css";

class GenericContent extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      // Short name of the content piece
      _name: this.props.params.name,
      // A better worded name of the content
      _fullName: this.props.params.fullName,
      // Page title of the full content component
      _title: this.props.params.title,
      // URL to the icon of the content component
      _icon: this.props.params.icon,
      // Route for retriving text-content (HTML piece) of the content component
      _content: this.props.params.content
    };
  }

  // TODO: edit this according to Vidas's final wireframe
  render() {
    return (
      <div className="post-content">
        <h1>work in progress</h1>
        <h1>{this.props.params.name}</h1>
        <h1>{this.props.params.fullName}</h1>
        <h1>{this.props.params.title}</h1>
        <h1>{this.props.params.icon}</h1>
        <h1>{this.props.params.content}</h1>
      </div>
    );
  }
}

export default GenericContent;
