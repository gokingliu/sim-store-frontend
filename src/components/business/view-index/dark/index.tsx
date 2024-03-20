import React, { useEffect, useState, FC } from 'react';
import { Button } from 'antd';
import { BulbOutlined, SunOutlined } from '@ant-design/icons';
import { PropsDark } from '@/types';

const Dark: FC<PropsDark> = () => {
  /** DisplayName */
  Dark.displayName = 'Dark';

  /** Data */
  const [dark, setDark] = useState(false);

  /** Life Cycle Hook */
  useEffect(() => {
    const storageDark = localStorage.getItem('dark');
    setDark({ true: true, false: false }[storageDark || 'false'] as boolean);
  }, []);

  /** Method */
  const onChangeDark = () => {
    setDark(!dark);
    localStorage.setItem('dark', String(!dark));
  };

  /** ReactDOM */
  return <Button type="text" icon={dark ? <BulbOutlined /> : <SunOutlined />} onClick={onChangeDark} />;
};

export default Dark;
