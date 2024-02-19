import React, { FC, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Loading from '@/components/common/loading';
import NotAuthorized from '@/views/403';
import Api from '@/apis';
import { PropsViewIndex } from '@/types';

const ViewIndex: FC<PropsViewIndex> = () => {
  /** DisplayName */
  ViewIndex.displayName = 'ViewIndex';

  /** Data */
  const [auth, setAuth] = useState(true);
  const [loading, setLoading] = useState(true);

  /** Life Cycle Hook */
  useEffect(() => {
    getAuth();
  }, []);

  /** Method */
  const getAuth = () => {
    setLoading(true);
    Api.QueryAuth({ uuid: '' })
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

  /** ReactDOM */
  return <>{loading ? <Loading /> : auth ? <Outlet /> : <NotAuthorized />}</>;
};

export default ViewIndex;
