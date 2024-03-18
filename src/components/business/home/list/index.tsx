import React, { FC } from 'react';
import { Col, List, Row, Skeleton } from 'antd';
import { PropsHomeList, ResponseRanking } from '@/types';
import CardBox from '@/components/common/cardbox';
import './index.less';

const HomeList: FC<PropsHomeList> = ({ ranking }) => {
  /** DisplayName */
  HomeList.displayName = 'HomeList';

  /** ReactDOM */
  return (
    <Row className="home-list">
      <Col className="home-content" span={24}>
        <CardBox title="产品排行分析">
          <div className="list-box">
            <Skeleton className="skeleton" loading={!ranking?.length} active paragraph={{ rows: 15 }}>
              <List
                itemLayout="vertical"
                size="small"
                dataSource={ranking as ResponseRanking[]}
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
            </Skeleton>
          </div>
        </CardBox>
      </Col>
    </Row>
  );
};

export default HomeList;
