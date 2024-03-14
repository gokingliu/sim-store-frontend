import React, { ElementRef, FC, useRef } from 'react';
import { Button, Descriptions, Flex, type DescriptionsProps } from 'antd';
import { Helmet } from 'react-helmet';
import CustomEdit from '@/components/business/custom/edit';
import './index.less';

const Custom: FC = () => {
  /** DisplayName */
  Custom.displayName = 'Custom';

  /** Data */
  const editRef = useRef<ElementRef<typeof CustomEdit>>(null);
  const items: DescriptionsProps['items'] = [
    {
      label: '微信号',
      children: 'Go886567',
    },
    {
      label: '滚屏文字',
      children:
        'span 是 Description.Item 的数量。 span={2} 会占用两个 DescriptionItem 的宽度。当同时配置 style 和 labelStyle（或 contentStyle）时，两者会同时作用。样式冲突时，后者会覆盖前者',
    },
    {
      label: '头图',
      children: (
        <>
          <img
            width={470}
            style={{ marginRight: '16px' }}
            alt="logo"
            src="https://simhaoka.com/profile/upload/comm/seller_benner.png"
          />
          <img
            width={470}
            style={{ marginRight: '16px' }}
            alt="logo"
            src="https://xddhaoka.com/profile/upload/2023/06/01/default1.png"
          />
          <img width={470} alt="logo" src="https://xddhaoka.com/profile/upload/2023/06/01/default2.png" />
        </>
      ),
    },
  ];

  /** Life Cycle Hook */

  /** Method */
  const openModal = () => {
    editRef.current?.openModal();
  };

  /** ReactDOM */
  return (
    <Flex className="custom" justify="flex-start" vertical>
      <Helmet>
        <title>页面定制 - SIM Store</title>
      </Helmet>

      <Descriptions bordered column={1} layout="vertical" size="small" items={items} />

      <Button className="button" type="primary" size="middle" onClick={openModal}>
        修改
      </Button>

      <CustomEdit ref={editRef} />
    </Flex>
  );
};

export default Custom;
