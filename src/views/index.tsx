import React, { FC, useState } from 'react';
import { Button, Drawer, Flex, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import SiderMenu from '@/components/business/view-index/sider-menu';
import Dark from '@/components/business/view-index/dark';
import Language from '@/components/business/view-index/language';
import UserName from '@/components/business/view-index/username';
import ViewContent from '@/components/business/view-index/content';
import { useResponsive } from '@/components/common/responsive';
import Logo from '../assets/img/logo.png';
import './index.less';

const Index: FC = () => {
  /** DisplayName */
  Index.displayName = 'Index';

  /** Data */
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);
  const desktop = useResponsive();
  const layoutSider = (
    <Layout.Sider width={210} trigger={null} collapsible collapsed={desktop ? collapsed : false}>
      <div className="sider-logo">
        <img className="logo" src={Logo} alt="logo" />
        <div className="logo-title" style={collapsed && desktop ? { display: 'none' } : void 0}>
          SIM Store
        </div>
      </div>

      <SiderMenu closeDrawer={() => setOpen(false)} />
    </Layout.Sider>
  );

  return (
    <Layout className="index">
      {desktop ? (
        layoutSider
      ) : (
        <Drawer className="sider-drawer" placement="left" width={210} open={open} onClose={() => setOpen(false)}>
          {layoutSider}
        </Drawer>
      )}

      <Layout>
        <Layout.Header className="index-header">
          <Button
            type="text"
            icon={!collapsed && desktop ? <MenuFoldOutlined /> : <MenuUnfoldOutlined />}
            onClick={desktop ? () => setCollapsed(!collapsed) : () => setOpen(true)}
          />

          <Flex gap="small" align="center">
            <Dark />

            <Language />

            <UserName />
          </Flex>
        </Layout.Header>

        <Layout.Content className="index-content">
          <ViewContent />
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default Index;
