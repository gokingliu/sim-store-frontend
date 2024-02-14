import React, { FC, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Button, Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import SiderMenu from '@/components/business/sider-menu';
import Loading from '@/components/common/loading';
import NotAuthorized from './403';
import Logo from '../assets/img/logo.png';
import Api from '@/apis';
import './index.less';

const Index: FC = () => {
  /** DisplayName */
  Index.displayName = 'Index';

  /** Data */
  const [auth, setAuth] = useState(true);
  const [loading, setLoading] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  /** Router Params **/
  const { uuid } = useParams();

  /** Life Cycle Hook */
  useEffect(() => {
    getAuth();
  }, []);

  /** Method */
  const getAuth = () => {
    setLoading(true);
    Api.QueryAuth({ uuid: uuid ?? '' })
      .then((res) => {
        setAuth(res.data.result);
      })
      .catch(() => {
        setAuth(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
        </Layout.Header>
        <Layout.Content className="index-content">
          {loading ? <Loading /> : auth ? <Outlet /> : <NotAuthorized />}
        </Layout.Content>
      </Layout>
    </Layout>
  );
};

export default Index;
