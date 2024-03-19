import { Canceler } from 'axios';
import Custom from './modules/custom.api';
import Goods from './modules/goods.api';
import Home from './modules/home.api';
import User from './modules/user.api';

export type AxiosCanceler = Canceler;

export default {
  ...Custom,
  ...Goods,
  ...Home,
  ...User,
};
