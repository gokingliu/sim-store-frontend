import { ReactNode, Ref } from 'react';

export interface PropsGoodsModal {
  ref: Ref<{ openModal: () => void }>;
  goodsItem: {
    id: number;
    button: string;
    name: string;
  };
}

export interface GoodsModalConfig {
  childrenNode: ReactNode;
  okButton: boolean;
  width: string;
}
