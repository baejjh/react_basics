"use strict";

var React = require('react');
var Title = require('react-document-title');
var link = require('react-router').link;
require('isomorphic-fetch');

var Home = React.createClass({

    componentWillMount: function() {
        fetch('//offline-news-api.herokuapp.com/stories')
        .then(function (response) {
            if (response.status >= 400) {
                throw new Error("Bad response from the server");
            }
            return response.json();
        })
        .then(function (stories) {
        this.setState({stories: stories});
        }
        .bind(this));
    },

    render: function() {
        console.log(this.state);
        return(
            <Title title="Home">
                <div>
                    <h1>My HomePage</h1>
                    <Link to="About Me">About</Link>
                    <Link to="/foo">Foo</Link>
                </div>
            </Title>
        );
    }

});

module.exports = Home;

/*
 * componentWillRender
 * componentDidMount - Continue to additional function after a component is mounted (callback?)
 * componentWillUnmount - Make change and reviews it from the HTML
 */
