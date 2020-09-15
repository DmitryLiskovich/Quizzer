const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Quiz = new Schema({
  config: {
    quiz_expire: Number,
    quiz_size: Number,
    quiz_keywords: String,
    quiz_title: String,
    quiz_get_res: Boolean,
    quiz_public: Boolean,
    times_passed: 0
  },
  questions: [Object],
})

const quiz = mongoose.model('quizzes', Quiz);

module.exports = quiz;
