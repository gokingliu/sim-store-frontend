import { RequestGoodsList } from '@/types';

export interface PropsGoodsSearch {
  add: (id: number, button: string, name: string) => void;
  search: (values: RequestGoodsList) => void;
}
