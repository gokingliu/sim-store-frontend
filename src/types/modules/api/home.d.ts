// GetTime 接口

export interface ResponseTime {
  api: string;
  v: string;
  ret: string[];
  data: {
    t: number;
  };
}

export interface RequestAuthUUID {
  uuid: string;
}
