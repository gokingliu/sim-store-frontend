import { AxiosResponse } from 'axios';
import { AxiosResponseData, ResponseCustomInfo, RequestCustomInfo } from '@/types';
import { http } from '@/http';

const Custom = {
  /**
   * @description 获取定制信息
   */
  GetCustomInfo(): Promise<AxiosResponse<AxiosResponseData<ResponseCustomInfo>>> {
    return http.get('/CustomInfo');
  },

  /**
   * @description 获取定制信息
   */
  PostCustomInfo(data: RequestCustomInfo): Promise<AxiosResponse<AxiosResponseData<null>>> {
    return http.post('/CustomInfoUpdate', data);
  },
};

export default Custom;
