import { AxiosResponse } from 'axios';
import { AxiosResponseData, RequestAuthUUID, ResponseTime } from '@/types';
import { http } from '@/http';

const Home = {
  /**
   * @description 获取网络时间 (因为跨域，暂时没有使用)
   */
  GetTime(): Promise<AxiosResponse<AxiosResponseData<ResponseTime>>> {
    return http.get('https://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp');
  },

  /**
   * @description 获取 UUID 权限
   */
  QueryAuth(data: RequestAuthUUID): Promise<AxiosResponse<AxiosResponseData<boolean>>> {
    return http.post('/QueryAuth', data);
  },
};

export default Home;
