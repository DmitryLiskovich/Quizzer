const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  email: String,
  f_name: String,
  l_name: String,
  position: String,
  company: String,
  password: String,
  quizzes: Array,
})

const user = mongoose.model('user', User);

module.exports = user;
