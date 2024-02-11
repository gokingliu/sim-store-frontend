import { Canceler } from 'axios';
import Home from './modules/home.api';
import User from './modules/user.api';

export type AxiosCanceler = Canceler;

export default {
  ...Home,
  ...User,
};
