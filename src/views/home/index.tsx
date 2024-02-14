import React, { useEffect, FC } from 'react';
import { Col, Flex, Row } from 'antd';
import CardBox from '@/components/business/cardbox';
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
        console.log(JSONRes);
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
    <Flex className="home">
      <Row className="home-overview">
        <Col className="home-content" span={7}>
          <CardBox title="访问总量">123</CardBox>
        </Col>

        <Col className="home-content" span={10}>
          <CardBox title="最新消息">123</CardBox>
        </Col>

        <Col className="home-content" span={7}>
          <CardBox title="商品总量">123</CardBox>
        </Col>
      </Row>
    </Flex>
  );
};

export default Home;
