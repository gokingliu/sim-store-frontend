import React, { Suspense, FunctionComponent } from 'react';
import loadable from '@loadable/component';
import { useLocation, useRoutes, BrowserRouter, Navigate } from 'react-router-dom';
import { RouterList } from './routerList.config';

// 页面切换 Loading
const Loading = loadable(() => import('@/components/common/loading'));

// 避免兜底
const RenderRouter: FunctionComponent = () => {
  const element = useRoutes(RouterList);
  return <Suspense fallback={<Loading />}>{element}</Suspense>;
};

// 判断路由权限
const AuthRouter: FunctionComponent<{ token: string }> = (props) => {
  const { pathname } = useLocation();
  const handledPathName = pathname.split('?')[0];

  // 需要鉴权的页面，无 Token 时，跳转登陆页面
  if (!props.token) return <Navigate replace to="/login" />;

  // 有 Token 时，用户主动跳转 login 页面，需要帮用户返回到首页
  if (handledPathName === '/login') return <Navigate replace to="/home" />;

  // 其他情况正常跳转
  return <></>;
};

// 渲染路由
const Router: FunctionComponent<{ token: string }> = (props) => (
  <BrowserRouter>
    <RenderRouter />
    <AuthRouter token={props.token} />
  </BrowserRouter>
);

export default Router;
