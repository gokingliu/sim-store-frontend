import React, { FC } from 'react';
import { Col, List, Row } from 'antd';
import { PropsHomeList } from '@/types';
import CardBox from '@/components/common/cardbox';
import './index.less';

const HomeList: FC<PropsHomeList> = () => {
  /** DisplayName */
  HomeList.displayName = 'HomeList';

  /** Data */
  const data = Array.from({ length: 23 }).map((_, i) => ({
    href: 'https://ant.design',
    title: `ant design part ${i}`,
  }));

  /** Method */

  /** ReactDOM */
  return (
    <Row className="home-list">
      <Col className="home-content" span={24}>
        <CardBox title="产品排行分析">
          <div className="list-box">
            <List
              itemLayout="vertical"
              size="small"
              dataSource={data}
              renderItem={(item) => (
                <List.Item
                  key={item.title}
                  extra={
                    <img
                      width={100}
                      alt="logo"
                      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                  }
                >
                  <List.Item.Meta title={<a href={item.href}>{item.title}</a>} />
                </List.Item>
              )}
            />
          </div>
        </CardBox>
      </Col>
    </Row>
  );
};

export default HomeList;
