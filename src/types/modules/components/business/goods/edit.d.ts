import { Ref } from 'react';
import { ResponseGoodsListItem } from '@/types';

export interface PropsGoodsEdit {
  ref: Ref<{ submit: () => void }>;
  loadingFC: (loading: boolean) => void;
  closeModal: () => void;
  id: number;
}

export interface GoodsEditFormValue extends ResponseGoodsListItem {}
