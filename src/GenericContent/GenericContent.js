import React, { Component } from "react";
import "./GenericContent.css";
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';

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
      _data: []
    }
  }

  componentDidMount() {
    fetch(this.state._base + this.state._content)
    .then(res => res.json())
    .then(data => {
      this.setState({_data: data.data}, () => this.toggleLanguage());
    })
    .catch(e => console.log(e));
  }

  toggleLanguage() {
    const ln = i18n.language;
    console.log(ln);
    console.log(this.state._data.map(c => c.language));
    for(var i = 0, l = this.state._data.length; i < l; i++) {
      if (this.state._data[i].language === ln) {
        this.setState({_markup: this.state._data[i].content});
      }
    }
  }

  render() {
    const markup = this.state._markup;
    return(
      <div className="post-content" dangerouslySetInnerHTML={{__html: markup}} />
    )
  }
}

export default withTranslation() (GenericContent);
