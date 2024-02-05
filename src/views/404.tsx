import React, { FC } from 'react';
import { Result } from 'antd';

const NotFound: FC = () => (
  <Result
    status="404"
    title={<p style={{ color: '#fff' }}>404</p>}
    subTitle={<p style={{ color: '#fff' }}>抱歉，你访问的页面不存在</p>}
  />
);

/** DisplayName */
NotFound.displayName = 'NotFound';

export default NotFound;
