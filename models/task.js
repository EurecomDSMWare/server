var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var taskSchema = new Schema({
  recurrence_count: {
    type: Number,
    default: 0
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  assignee_id: {
    type: ObjectId,
    default: null
  },
  completed_at: {
    type: Date,
    default: null
  },
  updated_by_id: {
    type: ObjectId,
    default: null
  },
  recurrence_type: {
    type: String,
    default: null
  },
  deleted_at: {
    type: Date,
    default: null
  },
  user_id: ObjectId,
  title: String,
  recurring_parent_id: {
    type: ObjectId,
    default: null
  },
  note: {
    type: String,
    default: null
  },
  parent_id: {
    type: ObjectId,
    default: null
  },
  version: Number,
  list_id: String,
  type: {
    type: String,
    default: 'Task'
  },
  owner_id: ObjectId,
  due_date: {
    type: Date,
    default: null
  },
  created_by_id: ObjectId,
  created_at: {
    type: Date,
    default: Date.now
  },
  local_identifier:String,
  position: {
    type: Number,
    default: null
  },
  starred: {
    type: Boolean,
    default: false
  }
});

taskSchema.virtual('id').get(function() {
  return this._id;
});

// Output virtual fields also in JSON
taskSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('Task', taskSchema);
