/**
 * @jsx React.DOM
 */

var React = require('react');
var Link = require('react-router').Link;

var ColorSwitcher = React.createClass({

  propTypes: {
    colors: React.PropTypes.array
  },

  getDefaultProps: function() {
    return {
      colors: ['red', 'green', 'blue']
    };
  },

  render: function() {
    return (
      <ul>
        {this.props.colors.map(function (color) {
          return (
            <li key={color}>
              <Link to="color" params={{color: color}}>{color}</Link>
            </li>
          );
        })}
      </ul>
    );
  }

});

module.exports = ColorSwitcher;