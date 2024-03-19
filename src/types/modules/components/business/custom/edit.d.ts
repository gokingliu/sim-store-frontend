import { Ref } from 'react';
import { ResponseCustomInfo } from '@/types';

export interface PropsCustomEdit {
  ref: Ref<{ openModal: () => void }>;
  info: MutableRefObject<ResponseCustomInfo>;
}
