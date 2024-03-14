import React, { forwardRef, useEffect, useImperativeHandle, useState, useRef, ElementRef, FC, Ref } from 'react';
import { Modal } from 'antd';
import GoodsInfo from '@/components/business/goods/info';
import GoodsEdit from '@/components/business/goods/edit';
import GoodsRemoved from '@/components/business/goods/removed';
import { PropsGoodsModal, GoodsModalConfig } from '@/types';

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
    const removedRef = useRef<ElementRef<typeof GoodsRemoved>>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [config, setConfig] = useState<GoodsModalConfig | null>(null);

    /** Life Cycle Hook */
    useEffect(() => {
      switch (title) {
        case '详情':
          setConfig({ childrenNode: <GoodsInfo />, okButton: false, width: '80%' });
          break;
        case '下架':
          setConfig({
            childrenNode: <GoodsRemoved ref={removedRef} name="test" closeModal={closeModal} />,
            okButton: true,
            width: '20%',
          });
          break;
        case '编辑':
          setConfig({
            childrenNode: <GoodsEdit ref={editRef} closeModal={closeModal} />,
            okButton: true,
            width: '30%',
          });
          break;
      }
    }, [title]);

    /** Method */
    const openModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };
    const handleOk = () => {
      editRef.current?.submit();
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    /** ReactDOM */
    return (
      <Modal
        title={title}
        width={config?.width}
        maskClosable={false}
        open={isModalOpen}
        onOk={handleOk}
        okButtonProps={{ size: 'middle' }}
        onCancel={handleCancel}
        cancelButtonProps={{ size: 'middle' }}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <CancelBtn />
            {config?.okButton && <OkBtn />}
          </>
        )}
      >
        {config?.childrenNode}
      </Modal>
    );
  },
);

export default GoodsModal;
