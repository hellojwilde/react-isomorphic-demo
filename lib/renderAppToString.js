var Router = require('react-router');
var Routes = require('./Routes');

function renderAppToString(path, callback) {
  Router.renderRoutesToString(Routes, path, callback);
}

module.exports = renderAppToString;