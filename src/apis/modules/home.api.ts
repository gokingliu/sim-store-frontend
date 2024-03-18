import { AxiosResponse } from 'axios';
import {
  AxiosResponseData,
  ResponseOverview,
  ResponseMessage,
  ResponseMessageInfo,
  ResponseRanking,
  RequestAuthUUID,
  ResponseTime,
} from '@/types';
import { http } from '@/http';

const Home = {
  /**
   * @description 获取访问量、商品量
   */
  QueryOverview(): Promise<AxiosResponse<AxiosResponseData<ResponseOverview>>> {
    return http.get('/Overview');
  },

  /**
   * @description 获取系统消息
   */
  QueryMessage(): Promise<AxiosResponse<AxiosResponseData<ResponseMessage[]>>> {
    return http.get('/Message');
  },

  /**
   * @description 获取系统消息详情
   */
  PostMessageInfo(id: number): Promise<AxiosResponse<AxiosResponseData<ResponseMessageInfo>>> {
    return http.post('/MessageInfo', { id });
  },

  /**
   * @description 获取商品排行榜
   */
  PostRanking(number: number): Promise<AxiosResponse<AxiosResponseData<ResponseRanking[]>>> {
    return http.post('/Ranking', { number });
  },

  /**
   * @description 获取网络时间 (因为跨域，暂时没有使用)
   */
  QueryTime(): Promise<AxiosResponse<AxiosResponseData<ResponseTime>>> {
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
