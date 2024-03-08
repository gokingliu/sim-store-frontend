import React, { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import NotAuthorized from '@/views/403';
import Api from '@/apis';
import { PropsViewContent } from '@/types';

const ViewContent: FC<PropsViewContent> = () => {
  /** DisplayName */
  ViewContent.displayName = 'ViewContent';

  /** Data */
  const [auth, setAuth] = useState(true);

  /** Life Cycle Hook */
  useEffect(() => {
    getAuth();
  }, []);

  /** Method */
  const getAuth = () => {
    Api.QueryAuth({ uuid: '' })
      .then((res) => {
        setAuth(res.data.result);
      })
      .catch(() => {
        setAuth(true);
      });
  };

  /** ReactDOM */
  return <>{auth ? <Outlet /> : <NotAuthorized />}</>;
};

export default ViewContent;
