import React, { useRef, useState, ElementRef, FC } from 'react';
import { Avatar, Button, List, Skeleton } from 'antd';
import GoodsSearch from '@/components/business/goods/search';
import GoodsModal from '@/components/business/goods/modal';
import './index.less';

const Goods: FC = () => {
  /** DisplayName */
  Goods.displayName = 'Goods';

  /** Data */
  const modalRef = useRef<ElementRef<typeof GoodsModal>>(null);
  const [initLoading, setInitLoading] = useState(false);
  const [title, setTitle] = useState('');
  const data = Array.from({ length: 20 }).map(() => ({
    name: '移动-新尊卡',
    poster: 'https://pps.1064m2m.cn/public/20240307/496bdf974fd83505144d95500e270efb.png',
    description: '29元135G+通话0.1/分钟',
    discount: 0, // 0: 长期有效, 1: 到期续约, 2: 两年优惠, 3: 一年优惠
    place: 'HI', // HI: 海南
    url: 'https://hk.yunhaoka.cn/#/pages/goods/details?goods_id=72870872&share_id=238161&channel=1826&type=10',
  }));

  /** Life Cycle Hook */

  /** Method */
  const openModal = (name: string) => {
    setTitle(name);
    modalRef.current?.openModal();
  };

  /** ReactDOM */
  return (
    <>
      <GoodsSearch />

      <List
        className="goods"
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Skeleton avatar={{ shape: 'square', size: 96 }} title={false} loading={initLoading} active>
              <List.Item.Meta
                avatar={<Avatar shape="square" size={96} src={item.poster} />}
                title={
                  <a href={item.url} target="_blank" rel="noreferrer">
                    {item.name}
                  </a>
                }
                description={item.description}
              />
              {[{ name: '详情' }, { name: '下架' }, { name: '编辑' }].map((item, index) => (
                <Button key={index} type="link" size="small" onClick={() => openModal(item.name)}>
                  {item.name}
                </Button>
              ))}
            </Skeleton>
          </List.Item>
        )}
      />

      <GoodsModal ref={modalRef} title={title} />
    </>
  );
};
export default Goods;
