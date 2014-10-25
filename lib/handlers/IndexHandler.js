/**
 * @jsx React.DOM
 */

var React = require('react');
var ColorSwitcher = require('components/ColorSwitcher');

var IndexHandler = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Home</h1>
        <ColorSwitcher/>
      </div>
    );
  }

});

module.exports = IndexHandler;