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

// Extract the authorization information from each request
app.use(function (req, res, next) {
  if ( req.headers.authorization ) {
    req.ownerId = req.headers.authorization.replace('Bearer ', '');
  }
  next();
});

var task = require('./controllers/task.js')
app.get('/me/tasks', task.get);
app.post('/me/tasks', task.post);

var list = require('./controllers/list.js');
app.get('/me/lists', list.get);
app.post('/me/lists', list.post);

app.post('/login', require('./controllers/login.js'))

app.delete('/:id', function(req, res) {

  // Find out if it's a list or task
  list.findById(req.params.id, function(error, list) {
    if ( list ) {
      list.remove();
      // This is what wunderlist API responds
      res.send({});
    }
    else {
      task.findById(req.params.id, function(error, task) {
        if ( task ) {
          task.remove();
          // This is what wunderlist API responds
          res.send({});
        }
        else {
          // Object not found => reply bad request
          res.send(400);
        }
      });
    }
  });

});

app.put('/:id', task.put);

app.listen(process.argv[2]);
