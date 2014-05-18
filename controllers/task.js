var Task = require('../models/task.js');

var TaskController = {

  findById: function findById(id, callback) {
    Task.findById(id, function(error, task) {
      if ( task ) {
        callback(null, task);
      }
      else {
        callback(error);
      }
    });
  },

  post: function post(req, res) {
    new Task(req.body).save(function (error, task) {
      if ( error ) {
        // TODO
        console.error(error);
      }
      res.json(task);
    });
  },

  get: function get(req, res) {
    Task.find({}, function(error, tasks) {
      res.json(tasks);
    });
  },

  put: function put(req, res) {
    Task.findByIdAndUpdate(req.params.id, req.body, function(error, task) {
      if ( task ) {
        res.json(task);
      }
      else {
        res.send(400);
      }
    });
  }

};

module.exports = TaskController;
