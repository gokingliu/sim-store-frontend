import React, { FC, forwardRef, Ref, useImperativeHandle, useState } from 'react';
import { Descriptions, Modal, type DescriptionsProps } from 'antd';
import Api from '@/apis';
import { PropsHomeMessage, ResponseMessageInfo } from '@/types';

/** Mock Data */
import { MockMessageData } from './mock.config';

const HomeMessage: FC<PropsHomeMessage> = forwardRef(({ id }, ref: Ref<{ checkMessage: () => void }>) => {
  /** DisplayName */
  HomeMessage.displayName = 'HomeMessage';

  /** Throw Method */
  useImperativeHandle(ref, () => ({
    checkMessage,
  }));

  /** Data */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [items, setItems] = useState<DescriptionsProps['items']>([]);

  /** Life Cycle Hook */

  /** Method */
  const handleData = (data: ResponseMessageInfo): DescriptionsProps['items'] => [
    {
      label: '标题',
      children: data.title,
    },
    {
      label: '内容',
      children: data.content,
    },
    {
      label: '发布时间',
      children: data.time,
    },
  ];
  const checkMessage = () => {
    setIsModalOpen(true);
    Api.PostMessageInfo(id)
      .then((res) => {
        setItems(handleData(res.data.result));
      })
      .catch(() => {
        // TODO 联调后 value 改为 null
        setItems(handleData(MockMessageData));
      });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  /** ReactDOM */
  return (
    <Modal
      destroyOnClose
      title="消息"
      width="30%"
      open={isModalOpen}
      onCancel={handleCancel}
      cancelButtonProps={{ size: 'middle' }}
      cancelText="关闭"
      footer={(_, { CancelBtn }) => <CancelBtn />}
    >
      <Descriptions bordered column={1} layout="vertical" size="small" items={items} />
    </Modal>
  );
});

export default HomeMessage;
