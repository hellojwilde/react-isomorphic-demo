/**
 * @jsx React.DOM
 */

var React = require('react');

var AppHandler = React.createClass({

  getInitialState: function() {
    return {
      mode: "Server Rendering",
      counter: 0
    };
  },

  componentDidMount: function() {
    this.setState({
      mode: "Client Rendering"
    });

    window.setInterval(this.incrementCounter, 1000);
  },

  incrementCounter: function() {
    this.setState({counter: this.state.counter+1});
  },

  render: function() {
    return (
      <div>
        <header>
          Current mode: {this.state.mode} <br />
          {(this.state.counter > 0) ? this.state.counter + ' seconds' : ''}
        </header>

        <this.props.activeRouteHandler/>
      </div>
    );
  }

});

module.exports = AppHandler;