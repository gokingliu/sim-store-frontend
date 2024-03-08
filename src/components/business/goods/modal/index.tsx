import React, { forwardRef, useImperativeHandle, useState, FC, Ref } from 'react';
import { Modal } from 'antd';
import { PropsGoodsModal } from '@/types';

const GoodsModal: FC<PropsGoodsModal> = forwardRef(
  ({ children, OK, Cancel }: PropsGoodsModal, ref: Ref<{ openModal: () => void }>) => {
    /** DisplayName */
    GoodsModal.displayName = 'GoodsModal';

    /** 抛出组件方法 */
    useImperativeHandle(ref, () => ({
      openModal,
    }));

    /** Data */
    const [isModalOpen, setIsModalOpen] = useState(false);

    /** Method */
    const openModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      OK();
      setIsModalOpen(false);
    };
    const handleCancel = () => {
      Cancel();
      setIsModalOpen(false);
    };

    /** Method */

    /** ReactDOM */
    return (
      <Modal
        title="Basic Modal"
        width="50%"
        maskClosable={false}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    );
  },
);

export default GoodsModal;
