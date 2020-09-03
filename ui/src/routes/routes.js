import { Home } from '../components/Home/Home';
import { Quizzes } from '../components/Quizzes/Quizzes';
import { CreateQuizz } from '../components/Quiz/Quiz';
import { UserProfile } from '../components/UserProfile/Layout';
import { Signin } from '../components/Signin/Signin';
import { Signup } from '../components/Signup/Signup';

export const routes = [
  {
    path: '/',
    component: Home,
    isPublic: true,
    name: 'Home',
  },
  {
    path: '/quizzes',
    component: Quizzes,
    isPublic: true,
    name: 'Quizzes',
  },
  {
    path: '/new-quiz',
    component: CreateQuizz,
    isPublic: false,
    name: 'New Quiz',
  },
  {
    path: '/user-profile',
    component: UserProfile,
    isPublic: false,
    name: 'User Profile',
  },
  {
    path: '/signin',
    component: Signin,
    isPublic: true,
    name: 'Signin',
    notForRegistred: true,
  },
  {
    path: '/signup',
    component: Signup,
    isPublic: true,
    name: 'Signup',
    notForRegistred: true,
  },
]