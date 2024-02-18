import React, { FC, useState } from 'react';
import { Menu, type MenuProps } from 'antd';
import { PropsSiderMenu } from '@/types';
import { FormatPainterOutlined, PayCircleOutlined, PieChartOutlined, ProfileOutlined } from '@ant-design/icons';

const SiderMenu: FC<PropsSiderMenu> = () => {
  /** DisplayName */
  SiderMenu.displayName = 'SiderMenu';

  /** Data */
  const rootSubmenuKeys = ['sub1', 'sub2', 'sub3', 'sub4'];
  const [openKeys, setOpenKeys] = useState(['sub1']);

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
      defaultSelectedKeys={['sub1']}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      items={[
        {
          key: 'sub1',
          label: '数据中心',
          icon: <PieChartOutlined />,
        },
        {
          key: 'sub2',
          label: '商品管理',
          icon: <ProfileOutlined />,
          children: [
            { key: 1, label: '在售商品管理' },
            { key: 2, label: '下架商品列表' },
          ],
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
