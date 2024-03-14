import { ReactNode, Ref } from 'react';

export interface PropsGoodsModal {
  ref: Ref<{ openModal: () => void }>;
  title: string;
}

export interface GoodsModalConfig {
  childrenNode: ReactNode;
  okButton: boolean;
  width: string;
}
