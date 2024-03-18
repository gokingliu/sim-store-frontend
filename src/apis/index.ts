import { Canceler } from 'axios';
import Goods from './modules/goods.api';
import Home from './modules/home.api';
import User from './modules/user.api';

export type AxiosCanceler = Canceler;

export default {
  ...Goods,
  ...Home,
  ...User,
};
