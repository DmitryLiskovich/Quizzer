const register = require('./register/register');
const auth = require('./auth/auth');
const createQuiz = require('./createQuiz/createQuiz');
const quizzes = require('./quizzes/quizzes');

module.exports = [
  {
    path: '/register',
    func: register
  },
  {
    path: '/auth',
    func: auth
  },
  {
    path: '/createQuiz',
    func: createQuiz
  },
  {
    path: '/quizzes',
    func: quizzes
  },
]