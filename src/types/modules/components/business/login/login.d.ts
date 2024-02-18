import { RequestLogin } from '@/types';

export interface FormLoginValues extends RequestLogin {
  remember: boolean;
}

export interface PropsLoginLoginForm {
  getValue: (val: boolean) => void;
}

export interface PropsLoginRegisterForm {
  getValue: (val: boolean) => void;
}
