import React, { Component } from 'react'
import './Alert.css'

/* Copy Paste Code:
<Card>
  <FeedItem id="5" author="Martin Andersen" category="Alerts" dateTime="2019-12-27" content="<h1>title</h1>">
  </FeedItem>
</Card>
*/

export default class FeedItem extends Component {

state = { id:  'randomId_' + Math.floor((Math.random() * 1000000000000) + 1) };

  render() {
    return <div>
      <div className='al-FeedItemAutorAndBtnContainer'>
            <div className='al-FeedItemBtnArea'>
                <div className='al-FeedItemBtn' onClick={this.showPopupHandler}>...</div>
            </div>
            <div className='al-FeedItemAuthor'>
                <div className='al-FeedItemName'>{this.props.author} ➤ {this.props.category}</div>
                <div className='al-FeedItemDate'>{this.props.dateTime}</div>
                
            </div>
      </div>
      <hr></hr>
      <div id={this.state.id}></div>
      
    </div>
  }

  // INIT -------------------------------

componentDidMount() {
  // good for AJAX: fetch, ajax, or subscriptions.
// invoked once (client-side only).
  // fires before initial 'render'
  if (this.props.content) {
    let html = this.props.content;
    document.getElementById(this.state.id).innerHTML = html;
  }
}
  

  // Methods -------------------------------
  
  showPopupHandler(){
    alert('TODO: Popup')
  }

  // Default Props -------------------------------
  // Set default props
  static defaultProps = {
    author: "Author - Prop Not Defined",
    category: "Category - Prop Not Defined",
    dateTime: "dateTime - Prop Not Defined",
    content: "Content - Prop Not Defined",
  }

}