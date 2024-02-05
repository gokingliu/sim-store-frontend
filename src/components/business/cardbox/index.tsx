import React, { FC } from 'react';
import { Card } from 'antd';
import { PropsCardBox } from '@/types/modules/components/cardbox';

const CardBox: FC<PropsCardBox> = ({ title, children }) => {
  /** DisplayName */
  CardBox.displayName = 'CardBox';

  /** Data */
  const headStyle = { minHeight: 46, color: '#fff', borderColor: '#171514', borderWidth: 2 };
  const bodyStyle = { display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100% - 46px)' };

  /** ReactDOM */
  return (
    <Card className="card" headStyle={headStyle} bodyStyle={bodyStyle} title={title}>
      {children}
    </Card>
  );
};

export default CardBox;
