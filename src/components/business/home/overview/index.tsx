import React, { ElementRef, FC, useRef } from 'react';
import { Button, Col, Flex, Row } from 'antd';
import CardBox from '@/components/common/cardbox';
import HomeMessage from '@/components/business/home/message';
import { PropsHomeOverView } from '@/types';
import './index.less';

const HomeOverView: FC<PropsHomeOverView> = ({ visit, goods, message }) => {
  /** DisplayName */
  HomeOverView.displayName = 'HomeOverView';

  /** Data */
  const messageRef = useRef<ElementRef<typeof HomeMessage>>(null);

  /** Method */
  const checkMessage = () => {
    messageRef.current?.checkMessage();
  };

  /** ReactDOM */
  return (
    <>
      <Row className="home-overview">
        <Col className="home-content" span={7}>
          <CardBox title="访问总量">
            <Flex className="card-box" vertical={true} align="center">
              <div className="main-number">{visit?.total}</div>
              <div>昨日访问量：{visit?.page_view.at(-2)}</div>
            </Flex>
          </CardBox>
        </Col>

        <Col className="home-content" span={10}>
          <CardBox title="最新消息">
            <Flex className="card-box" vertical={true} align="center">
              {message?.map((item) => (
                <Button type="link" size="small" key={item.id} onClick={checkMessage}>
                  {item.title}
                </Button>
              ))}
            </Flex>
          </CardBox>
        </Col>

        <Col className="home-content" span={7}>
          <CardBox title="商品总量">
            <Flex className="card-box" vertical={true} align="center">
              <div className="main-number">{goods?.total}</div>
              <div>下架商品数：{goods?.off}</div>
            </Flex>
          </CardBox>
        </Col>
      </Row>

      <HomeMessage ref={messageRef} id={1} />
    </>
  );
};

export default HomeOverView;
