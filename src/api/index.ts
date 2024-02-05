import { Canceler } from 'axios';
import Home from './modules/home.api';

export type AxiosCanceler = Canceler;

export default {
  ...Home,
};
