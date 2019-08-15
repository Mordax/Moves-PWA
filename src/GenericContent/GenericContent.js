import React, { Component } from "react";
import "./GenericContent.css";
import { withTranslation } from 'react-i18next';
import i18n from 'i18next';
import client from '../LangClient';

class GenericContent extends Component {
  constructor(props) {
    super(props);

    if (props.params) {
      this.state = {
        _slug: this.props.params.slug,
        _fullName: this.props.params.fullName,
        _title: this.props.params.title,
        _icon: this.props.params.icon,
        _content: this.props.params.content,
        _base: 'https://moves-backend-a.herokuapp.com',
        _markup : '',
        _data: []
      }
    } else {
      this.state = {
        _slug: this.props.normal.slug,
        _content: this.props.normal.content,
        _base: 'https://moves-backend-a.herokuapp.com',
        _markup : '',
        _data: []
      }
    }
    
    this.toggleLanguage = this.toggleLanguage.bind(this);
  }

  toggleLanguage(lang) {
    let ln = i18n.language;
    if (lang !== '') ln = lang;
    for(var i = 0, l = this.state._data.length; i < l; i++) {
      if (this.state._data[i].language === ln) {
        this.setState({_markup: this.state._data[i].content});
        return;
      }
    }
  }

  componentDidMount() {
    if(this.state._content) {
      fetch(this.state._base + this.state._content)
      .then(res => res.json())
      .then(data => {
        this.setState({_data: data.data}, () => this.toggleLanguage(''));
      })
      .catch(e => console.log(e));

      const self = this;
      this.eventEmitter = client.addListener('lang', function(data) {
        console.log('received ', data);
        self.toggleLanguage(data);
      });
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
