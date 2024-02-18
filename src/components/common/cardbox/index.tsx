import React, { FC } from 'react';
import { Card } from 'antd';
import { PropsCardBox } from '@/types';
import './index.less';

const CardBox: FC<PropsCardBox> = ({ title, children }) => {
  /** DisplayName */
  CardBox.displayName = 'CardBox';

  /** ReactDOM */
  return (
    <Card className="card" title={title}>
      {children}
    </Card>
  );
};

export default CardBox;
