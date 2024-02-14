import React, { FC } from 'react';
import { Card } from 'antd';
import { PropsCardBox } from '@/types';

const CardBox: FC<PropsCardBox> = ({ title, children }) => {
  /** DisplayName */
  CardBox.displayName = 'CardBox';

  /** Data */
  const styles = {
    header: { minHeight: 46, color: '#171514', borderColor: '#eee', borderWidth: 2 },
    body: { display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100% - 46px)' },
  };

  /** ReactDOM */
  return (
    <Card className="card" styles={styles} title={title}>
      {children}
    </Card>
  );
};

export default CardBox;
