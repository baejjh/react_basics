/*
 * Components have a state. The elements inside the DOM is not manipulated directly.
 * To populate search window, the returned data is the new state.
 * Changing the state will cause a refresh: this.setState().
 */

var MyComponent = React.createClass({
  getInitialState: function() {
    return { count: 5 } // generally a number that is passed
  },
  render: function() {
    return(
      <h1>{this.state.count}</h1>
    )
  }
});
