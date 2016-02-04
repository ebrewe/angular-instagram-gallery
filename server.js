var express = require('express');
var app = express();

var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override'); 

var port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());

app.listen(port);
console.log('app listening on port ' + port);