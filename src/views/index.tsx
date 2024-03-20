import React, { FC, useState } from 'react';
import { Button, Flex, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import SiderMenu from '@/components/business/view-index/sider-menu';
import Dark from '@/components/business/view-index/dark';
import Language from '@/components/business/view-index/language';
import UserName from '@/components/business/view-index/username';
import ViewContent from '@/components/business/view-index/content';
import Logo from '../assets/img/logo.png';
import './index.less';

const Index: FC = () => {
  /** DisplayName */
  Index.displayName = 'Index';

  /** Data */
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="index">
      <Layout.Sider width={210} trigger={null} collapsible collapsed={collapsed}>
        <div className="sider-logo">
          <img className="logo" src={Logo} alt="logo" />
          <div className="logo-title" style={collapsed ? { display: 'none' } : void 0}>
            SIM Store
          </div>
        </div>

        <SiderMenu />
      </Layout.Sider>

      <Layout>
        <Layout.Header className="index-header">
          <Button
            className="header-button"
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
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
