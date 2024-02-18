import React, { useEffect, FC } from 'react';
import { Flex } from 'antd';
import HomeEcharts from '@/components/business/home/echarts';
import HomeList from '@/components/business/home/list';
import HomeOverView from '@/components/business/home/overview';
import './index.less';
import { baseEnv, WebSocketClient } from '@/http';
import { WebSocketHandler } from '@/types';

const Home: FC = () => {
  /** DisplayName */
  Home.displayName = 'Home';

  /** Data */

  /** Life Cycle Hook */
  useEffect(() => {
    const handler: WebSocketHandler = {
      onmessage: (res) => {
        const JSONRes = JSON.parse(res.data);
        return JSONRes;
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
    <Flex className="home" vertical={true}>
      <HomeOverView />

      <HomeEcharts />

      <HomeList />
    </Flex>
  );
};

export default Home;
