import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { baseEnv } from './config';
import { AxiosResponseData } from '@/types';

class HttpClient {
  axios; // Axios 实例

  constructor(commonOptions: AxiosRequestConfig) {
    this.axios = axios.create({ ...commonOptions });

    // 应用拦截器
    this.axios.interceptors.request.use(this.requestSuccessHandle, this.requestErrorHandle);
    this.axios.interceptors.response.use(this.responseSuccessHandle, this.responseErrorHandle);
  }

  /**
   * @description 拦截器
   */
  // 请求成功拦截器
  requestSuccessHandle = (config: InternalAxiosRequestConfig) => config;

  // 请求失败拦截器
  requestErrorHandle = (e: AxiosError) => Promise.reject(e);

  // 回包成功拦截器
  responseSuccessHandle = (response: AxiosResponse<AxiosResponseData<never>>) => {
    let msg = '未知错误';
    if (!response || !response.data) msg = '接口错误';
    if (Number.isInteger(response.data.code) || response.data.msg || response.data.result) return response;

    console.error('responseSuccessHandle: ', msg);
    return Promise.reject(response);
  };

  // 回包失败拦截器
  responseErrorHandle = (e: AxiosError) => {
    let msg = '未知错误';
    if (!e.response || !e.response.data) msg = '网络错误';

    console.error('responseErrorHandle: ', msg);
    return Promise.reject(e);
  };

  /**
   * @description get post put delete 请求方法
   */
  get = (url: string, options: AxiosRequestConfig = {}) => this.axios.get(url, { ...options });

  post = (url: string, data = {}, options: AxiosRequestConfig = {}) => this.axios.post(url, data, { ...options });

  put = (url: string, data = {}, options: AxiosRequestConfig = {}) => this.axios.put(url, data, { ...options });

  delete = (url: string, options: AxiosRequestConfig = {}) => this.axios.delete(url, { ...options });
}

export const http = new HttpClient({
  baseURL: baseEnv.http,
  headers: { 'x-requested-with': 'XMLHttpRequest' },
  timeout: 60000,
  withCredentials: true,
});
