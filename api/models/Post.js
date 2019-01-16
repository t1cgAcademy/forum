const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = Schema({
  courseID: {
    type: Schema.Types.ObjectId,
    required: true
  },
  parentID: {
    type: Schema.Types.ObjectId,
    required: false
  },
  date: {
    type: Date,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
});



module.exports = Post = mongoose.model('posts', PostSchema);
