import { RequestLogin } from '@/types';

export interface FormLoginValues extends RequestLogin {
  remember: boolean;
}

export interface PropsLogin {
  getValue: (val: boolean) => void;
}
