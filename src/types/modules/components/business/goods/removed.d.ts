import { Ref } from 'react';

export interface PropsGoodsRemoved {
  ref: Ref<{ post: () => void }>;
  closeModal: () => void;
  name: string;
}
