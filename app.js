var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var cors = require('cors');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/wunderlist');

// Enable CORS requests
app.use(cors());

app.use(bodyParser());
app.use(methodOverride());

var task = require('./controllers/task.js')
app.get('/me/tasks', task.get);
app.post('/me/tasks', task.post);

var list = require('./controllers/list.js');
app.get('/me/lists', list.get);
app.post('/me/lists', list.post);

app.post('/login', require('./controllers/login.js'))

app.listen(process.argv[2]);
