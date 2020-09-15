import axios from 'axios';

export class Requests {
  url = 'http://localhost:2000'

  async getAllUsers() {
    return await axios.get(this.url+'/users');
  }

  async registerNewUser(data) {
    return await axios.post(this.url + '/register', data);
  }

  async login(data) {
    return await axios.post(this.url + '/auth', data);
  }

  async addQuiz(quiz) {
    return await axios.post(this.url + '/createQuiz', quiz);
  }

  async getQuizzes() {
    return await axios.get(this.url + '/quizzes');
  }

  async getQuiz(id) {
    return await axios.get(this.url + '/quizzes/'+id);
  }
}