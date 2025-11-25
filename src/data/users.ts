import { UserType } from "../types/usertype";

export const users: UserType[] = [
  {
    id: '1',
    name: 'Admin User',
    email: 'admin',
    role: 'admin',
    password: '123',
  },
  {
    id: '2',
    name: 'Guide User',
    email: 'guide',
    role: 'guide',
    password: '123',
  },
  {
    id: '3',
    name: 'Tourist User',
    email: 'tourist',
    role: 'tourist',
    password: '123',
  },
];

export default users;