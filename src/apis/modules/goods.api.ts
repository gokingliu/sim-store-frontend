import { AxiosResponse } from 'axios';
import {
  AxiosResponseData,
  RequestGoodsList,
  RequestGoodsListItem,
  ResponseGoodsList,
  ResponseGoodsListItem,
} from '@/types';
import { http } from '@/http';

const Goods = {
  /**
   * @description 获取商品列表
   */
  PostGoodsList(data: RequestGoodsList): Promise<AxiosResponse<AxiosResponseData<ResponseGoodsList[]>>> {
    return http.post('/GoodsList', data);
  },

  /**
   * @description 获取商品详情
   */
  QueryGoodsListItem(goodsId: number): Promise<AxiosResponse<AxiosResponseData<ResponseGoodsListItem>>> {
    return http.get(`/GoodsInfo?id=${goodsId}`);
  },

  /**
   * @description 下架商品
   */
  DeleteGoodsListItem(goodsId: number): Promise<AxiosResponse<AxiosResponseData<null>>> {
    return http.delete(`/GoodsDelete?id=${goodsId}`);
  },

  /**
   * @description 添加/修改商品
   */
  PostGoodsListItem(data: RequestGoodsListItem): Promise<AxiosResponse<AxiosResponseData<null>>> {
    return http.post('/GoodsUpdate', data);
  },
};

export default Goods;
