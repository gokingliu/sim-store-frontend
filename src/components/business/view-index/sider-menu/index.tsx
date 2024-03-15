import React, { useState, FC } from 'react';
import { Menu, type MenuProps } from 'antd';
import { NavLink, useLocation } from 'react-router-dom';
import { PropsSiderMenu } from '@/types';
import { FormatPainterOutlined, PieChartOutlined, ProfileOutlined } from '@ant-design/icons';

const SiderMenu: FC<PropsSiderMenu> = () => {
  /** DisplayName */
  SiderMenu.displayName = 'SiderMenu';

  /** Data */
  const menuList = [
    {
      key: 'home',
      label: <NavLink to="home">数据中心</NavLink>,
      icon: <PieChartOutlined />,
    },
    {
      key: 'manage',
      label: '商品管理',
      icon: <ProfileOutlined />,
      children: [{ key: 'goods', label: <NavLink to="goods">商品管理列表</NavLink> }],
    },
    {
      key: 'diy',
      label: '定制中心',
      icon: <FormatPainterOutlined />,
      children: [{ key: 'custom', label: <NavLink to="custom">页面定制</NavLink> }],
    },
  ];
  const location = useLocation();
  const path = location.pathname.replace('/', '') || 'home';
  const menuIndex = menuList.findIndex((item) => item.children?.some((children) => children.key === path));
  const rootSubmenuKeys = ['home', 'manage', 'diy'];
  const [openKeys, setOpenKeys] = useState([rootSubmenuKeys[menuIndex === -1 ? 0 : menuIndex]]);

  /** Method */
  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  /** ReactDOM */
  return (
    <Menu
      theme="dark"
      mode="inline"
      defaultSelectedKeys={[path]}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      items={menuList}
    />
  );
};

export default SiderMenu;