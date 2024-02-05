import React, { FC } from 'react';
import { Result, Spin } from 'antd';
import { PropsLoading } from 'src/types';

const Loading: FC<PropsLoading> = (props) => <Result icon={<Spin size="default" />} title={props.message} />;

/** DisplayName */
Loading.displayName = 'Loading';

export default Loading;
