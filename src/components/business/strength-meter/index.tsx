import React, { FC } from 'react';
import { Progress } from 'antd';
import { zxcvbn } from '@zxcvbn-ts/core';
import { PropsStrengthMeter } from '@/types';

const StrengthMeter: FC<PropsStrengthMeter> = ({ password }) => {
  /** DisplayName */
  StrengthMeter.displayName = 'StrengthMeter';

  /** Data */
  const { score } = zxcvbn(password);
  const percent = (score / 4) * 100;
  const strokeColor = {
    0: '#e74242',
    1: '#ed6f6f',
    2: '#efbd47',
    3: '#55d18780',
    4: '#55d187',
  }[score];

  /** ReactDOM */
  return <Progress percent={percent} showInfo={false} strokeColor={strokeColor} />;
};

export default StrengthMeter;
