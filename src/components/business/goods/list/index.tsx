import React, { FC } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import { PropsGoodsList, ResponseGoodsList } from '@/types';
import './index.less';

const GoodsList: FC<PropsGoodsList> = ({ goodsList, handleListItem }) => {
  /** DisplayName */
  GoodsList.displayName = 'GoodsList';

  /** Method */
  const openModal = (id: number, button: string, name: string) => {
    handleListItem(id, button, name);
  };

  /** ReactDOM */
  return (
    <Skeleton className="goods skeleton" paragraph={{ rows: 15 }} loading={!goodsList?.length} active>
      <List
        className="goods list"
        itemLayout="horizontal"
        dataSource={goodsList as ResponseGoodsList[]}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar shape="square" size={96} src={item.poster} />}
              title={
                <a href={item.url} target="_blank" rel="noreferrer">
                  {item.name}
                </a>
              }
              description={item.description}
            />
            {[{ name: '详情' }, { name: '下架' }, { name: '编辑' }].map((button, index) => (
              <Button key={index} type="link" size="small" onClick={() => openModal(item.id, button.name, item.name)}>
                {button.name}
              </Button>
            ))}
          </List.Item>
        )}
      />
    </Skeleton>
  );
};

export default GoodsList;
