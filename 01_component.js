/*
 * Creating and mounting a component with an attribute

var MyComponent2 = React.createClass({
    render: function() {
        return(<h1> Hello, {this.props.name}!</h1>);
    }
});

React.renderComponent(<MyComponent2 name="Jenny" />, document.getElementById('myDiv'));

 */

"use strict";

var React = require('react');
var Title = require('react-document-title');
var link = require('react-router').link;

var About = React.createClass({

    render: function() {
        return (
            <Title title="About">
                <div>
                    <h1>About the Author Page</h1>
                    <link to="Home">Home</link>
                </div>
            </Title>
        )
    }
});

module.exports = About;


/*
 * Increased readability in JSX syntax
 */

var React = require('React');

var message =
  <div class="hello" onClick={someFunc}>
    <span>Hello, world!</span>
  </div>;

React.renderComponent(message, document.body);
