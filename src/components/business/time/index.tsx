import React, { useEffect, useState, FC } from 'react';
import { getDateTime } from '@/utils';

const Time: FC = () => {
  /** DisplayName */
  Time.displayName = 'Time';

  /** Data */
  const [time, setTime] = useState('00:00:00');

  /** Life Cycle Hook */
  useEffect(() => {
    const handler = () => {
      const date = getDateTime();
      setTime(date);
    };
    handler();
    const t = setInterval(() => {
      handler();
    }, 490);
    return () => {
      clearInterval(t);
    };
  }, []);

  /** ReactDOM */
  return <p>{time}</p>;
};

export default Time;
