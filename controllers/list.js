var List = require('../models/list.js');

var ListController = {

  findById: function findById(id, callback) {
    List.findById(id, function(error, list) {
      if ( list ) {
        callback(null, list);
      }
      else {
        callback(error);
      }
    });
  },

  post: function post(req, res) {
    req.body.owner_id = req.ownerId;
    new List(req.body).save(function (error, list) {
      if ( error ) {
        // TODO
        console.error(error);
      }
      res.json(list);
    });
  },

  get: function get(req, res) {
    List.find({
      owner_id: req.ownerId
    }, function(error, lists) {
      res.json(lists);
    });
  },

  remove: function remove(req, res) {
    List.remove({_id: req.param})
  },

};

module.exports = ListController;
