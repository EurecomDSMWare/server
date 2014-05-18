var List = require('../models/list.js');

var ListController = {

  post: function post(req, res) {
    new List(req.body).save(function (error, list) {
      if ( error ) {
        // TODO
        console.error(error);
      }
      res.json(list);
    });
  },

  get: function get(req, res) {
    List.find({}, function(error, lists) {
      res.json(lists);
    });
  }

};

module.exports = ListController;
