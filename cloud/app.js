var express = require('express');
var renderAppToString = require('cloud/renderAppToString.js');

var app = express();

app.set('views', 'cloud/views');
app.set('view engine', 'ejs');
app.use(express.bodyParser());

app.get('*', function(req, res) {
  renderAppToString(req.originalUrl, function(e, ar, s) {
    res.render('page', { content: s });
  });
});

app.listen();
