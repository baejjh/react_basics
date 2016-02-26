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

  // Set the initial component state
  getInitialState: function(props) {
    props = props || this.props;

    this tweetData.updated = props.tweets;

    // Set initial state using props
    return {
      tweets: props.tweets, // top-level component
      count: 0,
      page: 0,
      done: false,
      announcement: "Send an announcement to your users!"
    };

  },

  displayNewTweets: function() {
    if (this.tweetData.newTweetsAvail) { // only if there is a new tweet
      this.tweetData.newTweetsAvail = false;
      this.setState({ // update the state of the component
        tweets: this.tweetData.updated, // goes into render function of Tweets.react.js and inject the component into the virtual DOM
        count: this.tweetData.count,
        skip: this.tweetData.skip,
        announcement: this.tweetData.announcement
      });
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

  // Called directly after component rendering, only on client
  componentDidMount: function() {
    // Preserve self reference
    var self = this;
    // Initialize socket.io
    var socket = io.connect();
    // Upon tweet event emission
    socket.on('tweet', function(data){
      // Add a tweet to queue
      self.addTweet(data);
    });

    socket.on('announce', function(data){
      self.tweetData.announcement = data;
      self.tweetData.newTweetsAvail = true;
      self.displayNewTweets();
    })
  },

  // Render the component
  render: function() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col xs={12} className="small-padding-panel">
            <Panel className = "small-padding-panel">
              <img src="#" className="center-block" />
              <AnnounceBar announcement={this.state.announcement} /> // TweetsApp component is passed to Tweets sub-component
            </Panel>
          </Col>
        </Row>
      </Grid>
  }

});

/*
 * In public/Tweets.react.js (sub-component of TweetsApp.react)
 */

  render: function() {
    // Build list items of single tweet components using map
    var content = this.props.tweets.map(function(tweet) {
      return (
        <Tweet key={tweet._id} tweet={tweet} />
      )
    });

    // Return ul filled with our mapped tweets
    return (
      <ListGroup>
        <ReactTransitionGroup transitionName="example">
          {content}
        </ReactTransitionGroup>
      </ListGroup>
    );

    ...

    var imgUrl = tweet.avatar;
    imgUrl = imgUrl.replace(/normal/, "bigger");
    counter++;
    return(
      <ListGroupItem className={bgColor}>
    )
  }

/*
 * In public/routes.js
 */

  index: function() {

    // Render React to a string, passing in fetched tweets
    var MyComponent = React.createFactory(TweetsApp);
    var markup = React.renderToString( // send string to server in order to optimize page load
      MyComponent({
        tweets: tweets // database to collect the tweets
      })
    );

    // Render 'home' template
    res.render('home', {
      // Pass rendered react markup
      markup: markup,
      // Pass current state to client side
      state: JSON.stringify(tweets)
    })
  }
