import React, { useRef, useState, ElementRef, FC } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import GoodsModal from '@/components/business/goods/modal';
import './index.less';

const Goods: FC = () => {
  /** DisplayName */
  Goods.displayName = 'Goods';

  /** Data */
  const modalRef = useRef<ElementRef<typeof GoodsModal>>(null);
  const [initLoading, setInitLoading] = useState(false);
  const data = Array.from({ length: 20 }).map((_, i) => ({
    poster: `https://randomuser.me/api/portraits/women/${i}.jpg`,
    title: `ant design part ${i}`,
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team',
    discount: 0, // 0: 长期有效, 1: 到期续约, 2: 两年优惠, 3: 一年优惠
    place: 'HI', // HI: 海南
    url: 'https://ant.design',
  }));

  /** Life Cycle Hook */

  /** Method */
  const handleOK = () => {};
  const handleCancel = () => {};
  const openModal = () => {
    modalRef.current?.openModal();
  };

  /** ReactDOM */
  return (
    <>
      <List
        className="goods"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Skeleton avatar={{ shape: 'square', size: 96 }} title={false} loading={initLoading} active>
              <List.Item.Meta
                avatar={<Avatar shape="square" size={96} src={item.poster} />}
                title={<a href={item.url}>{item.title}</a>}
                description={item.description}
              />
              <Button type="link" size="small" onClick={openModal}>
                Link1
              </Button>
              <Button type="link" size="small">
                Link2
              </Button>
            </Skeleton>
          </List.Item>
        )}
      />

      <GoodsModal OK={handleOK} Cancel={handleCancel} ref={modalRef}>
        <div>1111</div>
      </GoodsModal>
    </>
  );
};
export default Goods;
