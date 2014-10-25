/**
 * @jsx React.DOM
 */

var React = require('react');
var Link = require('react-router').Link;
var ColorSwitcher = require('components/ColorSwitcher');

var ColorHandler = React.createClass({

  render: function() {
    return (
      <div style={{backgroundColor: this.props.params.color}}>
        <Link to="index">Go Home</Link>
        <h1>Color: {this.props.params.color}</h1>
        <ColorSwitcher/>
      </div>
    );
  }

});

module.exports = ColorHandler;