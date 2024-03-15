// QueryOverview 接口 ｜ 获取访问量、商品量
export interface ResponseOverview {
  visit:
    | {
        total: number;
        days: string[];
        page_view: number[];
      }
    | undefined;
  goods:
    | {
        total: number;
        off: number;
      }
    | undefined;
}

// QueryMessage 接口 ｜ 获取系统消息
export interface ResponseMessage {
  id: number;
  title: string;
}

// QueryMessage 接口 ｜ 获取系统消息详情
export interface ResponseMessageInfo {
  title: string;
  content: string;
  time: string;
}

// PostRanking 接口 ｜ 获取商品排行榜
export interface ResponseRanking {
  id: number;
  name: string;
  poster: string;
  url: string;
}

// QueryTime 接口 | 获取网络时间
export interface ResponseTime {
  api: string;
  v: string;
  ret: string[];
  data: {
    t: number;
  };
}

// QueryAuth 接口 | 获取 UUID 权限
export interface RequestAuthUUID {
  uuid: string;
}
