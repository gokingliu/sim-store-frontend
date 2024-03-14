import React, { Suspense, FunctionComponent } from 'react';
import loadable from '@loadable/component';
import { useRoutes, BrowserRouter, Navigate, RouteObject } from 'react-router-dom';

// 页面切换 Loading
const Loading = loadable(() => import('@/components/common/loading'));
// 注册页面
const Login = loadable(() => import('@/views/login'));
// 403 页面
const NotAuthorized = loadable(() => import('@/views/403'));
// 404 页面
const NotFound = loadable(() => import('@/views/404'));
// 入口页面
const Index = loadable(() => import('@/views'));
// 首页
const Home = loadable(() => import('@/views/home'));
// 商品管理
const Goods = loadable(() => import('@/views/goods'));
// 页面定制
const Custom = loadable(() => import('@/views/custom'));

// 路由列表
const routerList: RouteObject[] = [
  {
    path: '/',
    element: <Index />,
    children: [
      { index: true, element: <Navigate replace to="home" /> },
      { path: 'home', element: <Home /> },
      { path: 'goods', element: <Goods /> },
      { path: 'custom', element: <Custom /> },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/403',
    element: <Index />,
    children: [{ index: true, element: <NotAuthorized /> }],
  },
  // 匹配不到路径，跳转 404 页面
  { path: '*', element: <NotFound /> },
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
