const register = require('./register/register');
const auth = require('./auth/auth');
const createQuiz = require('./createQuiz/createQuiz');

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
  }
]