import { Ref } from 'react';

export interface PropsGoodsRemoved {
  ref: Ref<{ post: () => void }>;
  closeModal: () => void;
  loadingFC: (loading: boolean) => void;
  data: {
    id: number;
    name: string;
  };
}
