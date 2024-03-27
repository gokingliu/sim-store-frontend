import React, { FC, forwardRef, Ref, useImperativeHandle, useState } from 'react';
import { Descriptions, Modal, type DescriptionsProps } from 'antd';
import { useTranslation } from 'react-i18next';
import { useResponsive } from '@/components/common/responsive';
import Api from '@/apis';
import { PropsHomeMessage, ResponseMessageInfo } from '@/types';

/** Mock Data */
import { MockMessageData } from './mock.config';

const HomeMessage: FC<PropsHomeMessage> = forwardRef(
  ({ id }: PropsHomeMessage, ref: Ref<{ checkMessage: () => void }>) => {
    /** DisplayName */
    HomeMessage.displayName = 'HomeMessage';

    /** Throw Method */
    useImperativeHandle(ref, () => ({
      checkMessage,
    }));

    /** Data */
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [items, setItems] = useState<DescriptionsProps['items']>([]);
    const { t } = useTranslation();
    const desktop = useResponsive();

    /** Method */
    const handleData = (data: ResponseMessageInfo): DescriptionsProps['items'] => [
      {
        label: t('标题'),
        children: data.title,
      },
      {
        label: t('内容'),
        children: data.content,
      },
      {
        label: t('发布时间'),
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
        title={t('消息')}
        width={desktop ? '600px' : 'calc(100% - 32px)'}
        open={isModalOpen}
        onCancel={handleCancel}
        cancelButtonProps={{ size: 'middle' }}
        cancelText={t('关闭')}
        footer={(_, { CancelBtn }) => <CancelBtn />}
      >
        <Descriptions bordered column={1} layout="vertical" size="small" items={items} />
      </Modal>
    );
  },
);

export default HomeMessage;
