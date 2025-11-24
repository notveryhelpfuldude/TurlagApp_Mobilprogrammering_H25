import { UserType } from "../types/usertype";

export const users: UserType[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admintest',
    role: 'admin',
    password: 'adminpass', // add password
  },
  {
    id: '2',
    name: 'Guide User',
    email: 'guidetest',
    role: 'guide',
    password: 'guidepass',
  },
  {
    id: '3',
    name: 'Tourist User',
    email: 'touristtest',
    role: 'tourist',
    password: 'touristpass',
  },
];

export default users;