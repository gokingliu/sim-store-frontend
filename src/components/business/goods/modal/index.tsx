import React, { forwardRef, useImperativeHandle, useState, useRef, ElementRef, FC, Ref, ReactNode } from 'react';
import { Modal } from 'antd';
import GoodsInfo from '@/components/business/goods/info';
import GoodsEdit from '@/components/business/goods/edit';
import { PropsGoodsModal } from '@/types';

const GoodsModal: FC<PropsGoodsModal> = forwardRef(
  ({ title }: PropsGoodsModal, ref: Ref<{ openModal: () => void }>) => {
    /** DisplayName */
    GoodsModal.displayName = 'GoodsModal';

    /** Throw Method */
    useImperativeHandle(ref, () => ({
      openModal,
    }));

    /** Data */
    const editRef = useRef<ElementRef<typeof GoodsEdit>>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    /** Method */
    const openModal = () => {
      setIsModalOpen(true);
    };
    const handleOk = () => {
      editRef.current?.submit();
      // setIsModalOpen(false);
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    const childrenComp = () => {
      switch (title) {
        case '编辑':
          return <GoodsEdit ref={editRef} />;
        default:
          return <div />;
      }
    };

    /** ReactDOM */
    return (
      <Modal
        title={title}
        width="50%"
        maskClosable={false}
        open={isModalOpen}
        onOk={handleOk}
        okButtonProps={{ size: 'middle' }}
        onCancel={handleCancel}
        cancelButtonProps={{ size: 'middle' }}
      >
        {childrenComp()}
      </Modal>
    );
  },
);

export default GoodsModal;
