import React, { Component } from 'react';
import i18next from 'i18next';
import { withTranslation } from 'react-i18next';
import Card from './Card';
import FeedItem from './FeedItem';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: []
    };
    this.dataManager = require("../dataManager")()
  }
  //Get All Active Feed
  componentDidMount() {
    this.dataManager.getAllAnnouncement().then(data => {
        this.setState({
          feed: data.data
        })
      })
  }


  render() {
    const feed = this.state.feed;
    return (
      <div>
        <div className='al-feed-wrapper'>

          <div />
          {feed &&
            feed.map((item, index) => {
              
              return (
                  <Card key={item._id}>
                  <FeedItem
                      id={item._id}
                      author='Jessica, Martin & Alex'
                      category={item.category}
                      dateTime={item.dateCreated}
                      content={item.content}
                  />
                  </Card>
              );
              
            })}
        </div>
       
      </div>
    );
  }
}

export default withTranslation() (Feed);