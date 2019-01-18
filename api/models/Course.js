const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = Schema({
  code: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
})

module.exports = Course = mongoose.model('courses', CourseSchema);
