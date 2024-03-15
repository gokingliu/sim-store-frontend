import React, { FC } from 'react';
import { Col, List, Row } from 'antd';
import { PropsHomeList } from '@/types';
import CardBox from '@/components/common/cardbox';
import './index.less';

const HomeList: FC<PropsHomeList> = ({ ranking }) => {
  /** DisplayName */
  HomeList.displayName = 'HomeList';

  /** ReactDOM */
  return (
    ranking && (
      <Row className="home-list">
        <Col className="home-content" span={24}>
          <CardBox title="产品排行分析">
            <div className="list-box">
              <List
                itemLayout="vertical"
                size="small"
                dataSource={ranking}
                renderItem={(item) => (
                  <List.Item key={item.id} extra={<img width={100} alt="poster" src={item.poster} />}>
                    <List.Item.Meta
                      title={
                        <a href={item.url} target="_blank" rel="noreferrer">
                          {item.name}
                        </a>
                      }
                    />
                  </List.Item>
                )}
              />
            </div>
          </CardBox>
        </Col>
      </Row>
    )
  );
};

export default HomeList;
