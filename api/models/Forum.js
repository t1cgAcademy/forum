const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = Schema({
  date: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  replies: {
    type: [CommentSchema],
    required: true,
  },
});

const PostSchema = Schema({
  date: {
    type: Date,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  replies: {
    type: [CommentSchema],
    required: true,
  },
});

const ForumSchema = Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  history: {
    type: [PostSchema],
    required: true
  },
});

module.exports = Forum = mongoose.model('forum', ForumSchema);
module.exports = Post = mongoose.model('post', PostSchema);
module.exports = Comment = mongoose.model('comment', CommentSchema);
