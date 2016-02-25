/*
 * Isomorphic Application using front-end React and back-end Node (server.js on outermost directory)
 */

/*
 * Implementation written in file app.js
 * @jsx React.DOM
 */

var React = require('react');
var TweetsApp = require('./components/TweetsApp.react');

// Snag initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById("initial-state").innerHTML);

// Render components, picking up where React left off on server
React.renderComponent(
  <TweetsApp tweets={initialState} />,
  document.getElementById('react-app')
);

/*
 * Rendering component in views directory

<section id="react-app">{{{ markup }}}</section> //template for original bootstrap
<script id="intital-state" type="application/json">{{{state}}}</script>

 */

/*
 * Creating and mounting component in components/TweetsApp.react file
 */

var React = require('react');
var Tweets = require('./Tweets.react.js');
var Loader = require('./Loader.react.js');
var AnnounceBar = require('./AnnounceBar.react.js');
var Schedule = require('./Schedule.react.js');
var Jumbotron = require('react-bootstrap').Jumbotron;
...

// Export TweetsApp component
module.exports = TweetsApp = React.createClass({
  tweetData: {
    ...
  },

  displayNewTweets: function() {
    if (this.tweetData.newTweetsAvail) {
      this.tweetsData.newTweetsAvail = false;
      ...
    }
  },

  // Method to add a tweet to timeline
  addTweet: function(tweet) {
    // Get current state
    var updated = this.state.tweets;
    // Increment unread count
    var count = this.state.count + 1;
    // Increment skip count
    var skip = this.state.skip + 1;
    ...
  },

  // Method to show unread tweets
  showNewTweets: function() {
    // Get current state
    var updated = this.state.tweets;
    // Mark active tweets
    updated.forEach(function(tweet){
      tweet.active = true;
    });
    // Set application state (active tweets + reset unread count)
    this.setState({tweets: updated, count: 0});
  },

  // Method to check if more tweets should be loaded by scroll position
  checkWindowScroll: function() {
    // Get scroll position & window data
    var h = Math.max(document.documentElement.clientHeight,
      window.innerHeight || 0);
    var s = (document.body.scrollTop ||
      document.documentElement.scrollTop || 0);
    var scrolled = ( h + s ) > document.body.offsetHeight;

    // If sufficient scroll, change pagination and page itself (incomplete)
    if (scrolled && !this.state.paging && !this.state.done) {
      // Set application state (pagination)
      this.setState({paging: true, page: this.state.page + 1 });
      // Get next page of tweets from server
      this.getPage(this.state.page);
    }
  },

  // Render the component
  render: function() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} className="small-padding-panel">
            <Panel className = "small-padding-panel">
              <img src="#" className="center-block" />
              <AnnounceBar announcement={this.state.announcement} />
            </Panel>
          </Col>
        </Row>
      </Grid>
  }

});
