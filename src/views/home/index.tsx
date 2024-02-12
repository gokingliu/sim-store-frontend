import React, { useEffect, useState, FC } from 'react';
import CardBox from '@/components/business/cardbox';
import Flipper from '@/components/business/flipper';
import Responsive from '@/components/common/responsive';
import Time from '@/components/business/time';
import './index.less';
import { baseEnv, WebSocketClient } from '@/http';
import { WebSocketHandler } from '@/types';

const Home: FC = () => {
  /** DisplayName */
  Home.displayName = 'Home';

  /** Data */
  const [addNum, setAddNum] = useState(0);
  const [originNum, setOriginNum] = useState(0);
  const [nowNum, setNowNum] = useState(0);
  const extraInfo = [
    { title: '当前人数', value: <p>{nowNum}</p> },
    { title: '初始人数', value: <p>{originNum}</p> },
    { title: '当前时间', value: <Time /> },
  ];

  /** Life Cycle Hook */
  useEffect(() => {
    const handler: WebSocketHandler = {
      onmessage: (res) => {
        const JSONRes = JSON.parse(res.data);
        setNowNum(JSONRes.nowNum);
        setOriginNum(JSONRes.originNum);
        setAddNum(JSONRes.nowNum - JSONRes.originNum);
      },
    };
    const webSocket = new WebSocketClient({ baseURL: `${baseEnv.ws}/QueryFriendsInfo`, handler });
    webSocket.send('{"apis":"info"}');
    const t = setInterval(() => {
      webSocket.send('{"apis":"info"}');
    }, 1000);
    return () => {
      webSocket.close();
      clearInterval(t);
    };
  }, []);

  /** ReactDOM */
  return (
    <Responsive
      extra={extraInfo.map((info, index) => (
        <CardBox key={index} title={info.title}>
          {info.value}
        </CardBox>
      ))}
    >
      <CardBox title="新增人数">
        <Flipper value={addNum} />
      </CardBox>
    </Responsive>
  );
};

export default Home;
