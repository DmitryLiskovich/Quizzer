import { UserInfo } from '../UserInfo/UserInfo';

export const routes = [
  {
    path: '/test',
    component: UserInfo,
    isPublic: false,
    name: 'Home'
  },
]