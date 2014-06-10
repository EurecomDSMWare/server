var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var listSchema = new Schema({
  title: String,
  created_at: Date,
  updated_at: {
    type: Date,
    default: Date.now
  },
  local_identifier: String,
  position: Number,
  type: String,
  owner_id: String
});

listSchema.virtual('id').get(function() {
  return this._id;
});

// Output virtual fields also in JSON
listSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('List', listSchema);
