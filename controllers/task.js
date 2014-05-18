var Task = require('../models/task.js');

var TaskController = {

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
  }

};

module.exports = TaskController;
