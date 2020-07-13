const mongoose = require('./con');

var CourseSchema = mongoose.Schema({
  //_id: mongoose.Schema.Types.ObjectId,
  courseName: {
    type: String,
    required: true
  },
  courseId: {
    type: String
  },
  courseDuration: {
    type: String
  },
  courseFee: {
    type: String
  }
});

module.exports = mongoose.model('Course', CourseSchema);
