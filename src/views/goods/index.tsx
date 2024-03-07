import React, { useState, FC } from 'react';
import { Avatar, List, Skeleton } from 'antd';
import './index.less';

const Goods: FC = () => {
  /** DisplayName */
  Goods.displayName = 'Goods';

  /** Data */
  const [initLoading, setInitLoading] = useState(true);
  const data = Array.from({ length: 20 }).map((_, i) => ({
    poster: `https://randomuser.me/api/portraits/women/${i}.jpg`,
    content: `ant design part ${i}`,
    discount: 0, // 0: 长期有效, 1: 到期续约, 2: 两年优惠, 3: 一年优惠
    place: 'HI', // HI: 海南
  }));

  /** Life Cycle Hook */

  /** ReactDOM */
  return (
    <List
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <List.Item actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}>
          <Skeleton avatar title={false} loading={initLoading} active>
            <List.Item.Meta
              avatar={<Avatar src={item.poster} />}
              title={<a href="https://ant.design">{item.content}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>{item.content}</div>
          </Skeleton>
        </List.Item>
      )}
    />
  );
};
export default Goods;
