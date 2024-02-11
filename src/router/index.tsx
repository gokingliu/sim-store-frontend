import React, { lazy, Suspense, FunctionComponent } from 'react';
import { useRoutes, BrowserRouter, RouteObject } from 'react-router-dom';

// 页面切换 Loading
const Loading = lazy(() => import('@/components/common/loading'));
// 路由页面容器
const RouteComponent = lazy(() => import('@/components/common/route-component'));
// 入口页面
const Index = lazy(() => import('@/views'));
// 首页
const Home = lazy(() => import('@/views/home'));
// 注册页面
const Login = lazy(() => import('@/views/login'));
// 403 页面
const NotAuthorized = lazy(() => import('@/views/403'));
// 404 页面
const NotFound = lazy(() => import('@/views/404'));

// 路由列表
const routerList: RouteObject[] = [
  {
    path: '/:uuid',
    element: <Index />,
    children: [{ index: true, element: <Home /> }],
  },
  {
    path: '/login',
    element: <RouteComponent element={<Login />} title="登录 - SIM Store" />,
  },
  {
    path: '/403',
    element: <Index />,
    children: [{ index: true, element: <NotAuthorized /> }],
  },
  // 匹配不到路径，跳转 404 页面
  { path: '*', element: <RouteComponent element={<NotFound />} title="404" /> },
];

// 避免兜底
const RenderRouter: FunctionComponent = () => {
  const element = useRoutes(routerList);
  return <Suspense fallback={<Loading />}>{element}</Suspense>;
};

// 渲染路由
const Router: FunctionComponent = () => (
  <BrowserRouter>
    <RenderRouter />
  </BrowserRouter>
);

export default Router;
