import React, { FC } from 'react';
import { Button } from 'antd';
import { BulbOutlined, SunOutlined } from '@ant-design/icons';
import { useStoreDispatch, useStoreSelector, StoreState } from '@/store';
import { actionDarkState, setDarkModeClass } from '@/store/modules/dark.store';
import { PropsDark } from '@/types';

const Dark: FC<PropsDark> = () => {
  /** DisplayName */
  Dark.displayName = 'Dark';

  /** Data */
  const dispatch = useStoreDispatch(); // 调用 store 方法
  const { darkMode } = useStoreSelector((state: StoreState) => state.dark);

  /** Method */
  const onChangeDark = () => {
    localStorage.setItem('dark', String(!darkMode));
    dispatch(setDarkModeClass(!darkMode));
    dispatch(actionDarkState(!darkMode));
  };

  /** ReactDOM */
  return <Button type="text" icon={darkMode ? <BulbOutlined /> : <SunOutlined />} onClick={onChangeDark} />;
};

export default Dark;
