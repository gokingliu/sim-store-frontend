import { ResponseGoodsList } from '@/types';

export interface PropsGoodsList {
  handleListItem: (id: number, button: string, name: string) => void;
  goodsList: ResponseGoodsList[] | null;
}
