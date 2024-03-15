import { ResponseMessage, ResponseOverview } from '@/types';

export interface PropsHomeOverView extends ResponseOverview {
  message: ResponseMessage[] | null;
}
