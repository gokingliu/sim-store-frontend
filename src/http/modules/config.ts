import { EnvMap, HostNameEnvMap } from '@/types';

/**
 * 域名对应环境
 */
const hostNameEnvMap: HostNameEnvMap = {
  '120.48.44.102': 'production',
};

/**
 * 根据打包类型和域名，判断当前环境
 */
// import.meta.env.MODE
const env = import.meta.env.PROD ? hostNameEnvMap[location.host] || 'development' : import.meta.env.MODE;

/**
 * http 请求环境配置
 */
const envMap: EnvMap = {
  // 生产环境
  production: {
    http: 'https://120.48.44.102/http',
    ws: 'wss://120.48.44.102/ws',
  },
  // 测试环境
  test: {
    http: 'https://120.48.44.102/http',
    ws: 'wss://120.48.44.102/ws',
  },
  // 开发环境
  development: {
    http: 'https://120.48.44.102/http',
    ws: 'wss://120.48.44.102/ws',
  },
};

export const baseEnv = env ? envMap[env] : envMap.development;
