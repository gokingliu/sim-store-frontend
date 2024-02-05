export type ENV = 'production' | 'test' | 'development';

export interface HostNameEnvMap {
  [key: string]: ENV;
}

export interface EnvMap {
  [key: string]: {
    http: string;
    ws: string;
  };
}

export interface AxiosResponseData<T> {
  code: number;
  msg: string;
  result: T;
}

export interface WebSocketHandler {
  onopen?: (e?) => void;
  onmessage?: (e?) => void;
  onclose?: (e?) => void;
  onerror?: (e?) => void;
}

export interface WebSocketOptions {
  baseURL: string;
  handler: WebSocketHandler;
  binaryType?: string;
  bufferCap?: number;
}
