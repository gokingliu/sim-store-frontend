import { Ref } from 'react';

export interface PropsGoodsModal {
  ref: Ref<{ openModal: () => void }>;
  title: string;
}
