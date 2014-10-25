/**
 * @jsx React.DOM
 */

var RouteRoot = require('react-router').Routes;
var Route = require('react-router').Route;
var DefaultRoute = require('react-router').DefaultRoute;

var AppHandler = require('handlers/AppHandler');
var IndexHandler = require('handlers/IndexHandler');
var ColorHandler = require('handlers/ColorHandler');

var Routes = (
  <RouteRoot location="history">
    <Route handler={AppHandler}>
      <Route name="index" path="/" handler={IndexHandler}/>
      <Route name="color" path="/color/:color" handler={ColorHandler}/>
    </Route>
  </RouteRoot>
);

module.exports = Routes;
