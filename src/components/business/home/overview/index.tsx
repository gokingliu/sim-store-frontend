import React, { FC } from 'react';
import { Col, Flex, Row } from 'antd';
import { PropsHomeOverView } from '@/types';
import CardBox from '@/components/common/cardbox';
import './index.less';

const HomeOverView: FC<PropsHomeOverView> = () => {
  /** DisplayName */
  HomeOverView.displayName = 'HomeOverView';

  /** Data */

  /** Method */

  /** ReactDOM */
  return (
    <Row className="home-overview">
      <Col className="home-content" span={7}>
        <CardBox title="访问总量">
          <Flex className="card-box" vertical={true} align="center">
            <div className="main-number">{123}</div>
            <div>昨日访问量：222</div>
          </Flex>
        </CardBox>
      </Col>

      <Col className="home-content" span={10}>
        <CardBox title="最新消息">
          <Flex className="card-box" vertical={true} align="center">
            <a>新年快乐</a>
            <a>系统公告</a>
            <a>产品下架通知</a>
            <a>下架通知</a>
            <a>下架通知</a>
          </Flex>
        </CardBox>
      </Col>

      <Col className="home-content" span={7}>
        <CardBox title="商品总量">
          <Flex className="card-box" vertical={true} align="center">
            <div className="main-number">{123}</div>
            <div>下架商品数：333</div>
          </Flex>
        </CardBox>
      </Col>
    </Row>
  );
};

export default HomeOverView;
