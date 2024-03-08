import { Ref } from 'react';

export interface PropsGoodsModal {
  ref: Ref<{ openModal: () => void }>;
  children: ReactNode;
  OK: () => void;
  Cancel: () => void;
}
