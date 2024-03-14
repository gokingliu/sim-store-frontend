import { Ref } from 'react';

export interface PropsGoodsEdit {
  ref: Ref<{ submit: () => void }>;
  closeModal: () => void;
}

export interface GoodsEditFormValue {
  name: string;
  description: string;
  poster: string;
  age: string;
  location: string;
  discount: string;
  combo: string;
  details: string;
  url: string;
}
