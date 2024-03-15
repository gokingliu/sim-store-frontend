import { Ref } from 'react';

export interface PropsHomeMessage {
  ref: Ref<{ checkMessage: () => void }>;
  id: number;
}
