import React, { FC } from 'react';
import { Result } from 'antd';

const NotAuthorized: FC = () => (
  <Result
    status="403"
    title={<p style={{ color: '#fff' }}>403</p>}
    subTitle={<p style={{ color: '#fff' }}>抱歉，你无权访问该页面</p>}
  />
);

/** DisplayName */
NotAuthorized.displayName = 'NotAuthorized';

export default NotAuthorized;
