import React, { FC, useState } from 'react';
import { Menu, type MenuProps } from 'antd';
import { NavLink } from 'react-router-dom';
import { PropsSiderMenu } from '@/types';
import { FormatPainterOutlined, PayCircleOutlined, PieChartOutlined, ProfileOutlined } from '@ant-design/icons';

const SiderMenu: FC<PropsSiderMenu> = () => {
  /** DisplayName */
  SiderMenu.displayName = 'SiderMenu';

  /** Data */
  const rootSubmenuKeys = ['home', 'sub2', 'sub3', 'sub4'];
  const [openKeys, setOpenKeys] = useState(['home']);

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
      defaultSelectedKeys={['home']}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      items={[
        {
          key: 'home',
          label: <NavLink to="home">数据中心</NavLink>,
          icon: <PieChartOutlined />,
        },
        {
          key: 'sub2',
          label: '商品管理',
          icon: <ProfileOutlined />,
          children: [{ key: 'goods', label: <NavLink to="goods">商品管理列表</NavLink> }],
        },
        {
          key: 'sub3',
          label: '推广模块',
          icon: <PayCircleOutlined />,
          children: [{ key: 3, label: '推广渠道' }],
        },
        {
          key: 'sub4',
          label: '定制中心',
          icon: <FormatPainterOutlined />,
          children: [
            { key: 4, label: '首页滚动图' },
            { key: 5, label: '客服微信' },
          ],
        },
      ]}
    />
  );
};

export default SiderMenu;
