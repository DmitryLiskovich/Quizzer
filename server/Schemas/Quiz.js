const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Quiz = new Schema({
  config: {
    quiz_expire: Number,
    quiz_size: Number,
    quiz_keywords: String,
    quiz_get_res: Boolean,
    quiz_public: Boolean,
  },
  questions: [Object],
})

const quiz = mongoose.model('quizzes', Quiz);

module.exports = quiz;
