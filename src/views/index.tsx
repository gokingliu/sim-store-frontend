import React, { FC, useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { Layout, Space } from 'antd';
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
      <Layout.Header className="index-header">
        <Space>
          <img className="logo" src={Logo} alt="logo" />
          <>微信通讯录人数</>
        </Space>
      </Layout.Header>

      <Layout.Content className="index-content">
        {loading ? <Loading /> : auth ? <Outlet /> : <NotAuthorized />}
      </Layout.Content>
    </Layout>
  );
};

export default Index;
