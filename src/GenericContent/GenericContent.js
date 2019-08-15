import React, { Component } from "react";
import "./GenericContent.css";

class GenericContent extends Component {
  constructor(props) {
    super(props);
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
      _content: this.props.params.content,
      _base: 'https://moves-backend-a.herokuapp.com',
      _markup : '',
    }
  }

  componentDidMount() {
    fetch(this.state._base + this.state._content)
    .then(res => res.json())
    .then(data => this.setState({_markup: data.data[0].content + data.data[1].content}))
    .catch(e => console.log(e));
  }

  fetchLanguage() {

  }

  fetchContent() {

  }

  render() {
    const markup = this.state._markup;
    console.log(markup);
    return(
      <div dangerouslySetInnerHTML={{__html: markup}} />
    )
  }
}

export default GenericContent;
