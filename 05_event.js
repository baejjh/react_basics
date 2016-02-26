/*
 * Low-level native events are wrapped and referred to as SyntheticEvent.
 */

var Counter = React.createClass({

  incrementCount: function() {
    this.setState({
      count: this.state.count + 1
    });
  },

  getInitialState: function() {
    return( count:; 0; ) // hardcoded for example
  },

  render: function() {
    return(
      <div class="my-component">
        <h1>Count {this.state.count}</h1>
        <button type="button" onClick={this.incrementCount}>
          Increment
        </button>
      </div>
    );
  }

});

React.renderComponent(
  <Counter/>,
  document.getElementById('mount-point')
);
