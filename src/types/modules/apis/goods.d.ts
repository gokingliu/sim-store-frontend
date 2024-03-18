// PostGoodsList 接口 ｜ 获取商品列表
export interface RequestGoodsList {
  operator: number;
  location: string;
  discount: number;
  fee: number;
}

// PostGoodsList 接口 ｜ 获取商品列表
export interface ResponseGoodsList {
  id: number;
  name: string;
  poster: string;
  description: string;
  url: string;
}

// QueryGoodsListItem 接口 ｜ 获取商品详情
export interface ResponseGoodsListItem {
  id: number;
  name: string;
  operator: number | string;
  fee: number;
  description: string;
  poster: string;
  age: string;
  location: string;
  discount: number | string;
  combo: string;
  details: string;
  url: string;
}

// PostGoodsListItem 接口 ｜ 添加/修改商品
export interface RequestGoodsListItem extends ResponseGoodsListItem {}
