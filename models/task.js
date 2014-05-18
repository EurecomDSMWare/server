var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var taskSchema = new Schema({
  recurrence_count: Number,
  updated_at: {
    type: Date,
    default: Date.now
  },
  assignee_id: ObjectId,
  completed_at: Date,
  updated_by_id: ObjectId,
  recurrence_type: String,
  deleted_at: Date,
  id: ObjectId,
  user_id: ObjectId,
  title: String,
  recurring_parent_id: ObjectId,
  note: String,
  parent_id: ObjectId,
  version: Number,
  list_id: String,
  type: String,
  owner_id: ObjectId,
  due_date: Date,
  created_by_id: ObjectId,
  created_at: ObjectId,
  local_identifier:String,
  position: Number,
  starred: Boolean
});

module.exports = mongoose.model('Task', taskSchema);
