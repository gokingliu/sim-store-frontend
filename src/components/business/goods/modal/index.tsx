import React, { forwardRef, useEffect, useImperativeHandle, useState, useRef, ElementRef, FC, Ref } from 'react';
import { Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import GoodsInfo from '@/components/business/goods/info';
import GoodsEdit from '@/components/business/goods/edit';
import GoodsRemoved from '@/components/business/goods/removed';
import { PropsGoodsModal, GoodsModalConfig } from '@/types';

const GoodsModal: FC<PropsGoodsModal> = forwardRef(
  ({ goodsItem: { id, button, name } }: PropsGoodsModal, ref: Ref<{ openModal: () => void }>) => {
    /** DisplayName */
    GoodsModal.displayName = 'GoodsModal';

    /** Throw Method */
    useImperativeHandle(ref, () => ({
      openModal,
    }));

    /** Data */
    const editRef = useRef<ElementRef<typeof GoodsEdit>>(null);
    const removedRef = useRef<ElementRef<typeof GoodsRemoved>>(null);
    const [buttonOkLoading, setButtonOkLoading] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [config, setConfig] = useState<GoodsModalConfig | null>(null);
    const { t } = useTranslation();

    /** Life Cycle Hook */
    useEffect(() => {
      switch (button) {
        case '详情':
          setConfig({ childrenNode: <GoodsInfo id={id} />, okButton: false, width: '70%' });
          break;
        case '下架':
          setConfig({
            childrenNode: (
              <GoodsRemoved ref={removedRef} data={{ id, name }} loadingFC={loadingFC} closeModal={closeModal} />
            ),
            okButton: true,
            width: '20%',
          });
          break;
        case '添加':
        case '编辑':
          setConfig({
            childrenNode: <GoodsEdit ref={editRef} id={id} loadingFC={loadingFC} closeModal={closeModal} />,
            okButton: true,
            width: '30%',
          });
          break;
      }
    }, [id, button, name]);

    /** Method */
    const openModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setButtonOkLoading(false);
      setIsModalOpen(false);
    };
    const loadingFC = (loading: boolean) => {
      setButtonOkLoading(loading);
    };
    const handleOk = () => {
      setButtonOkLoading(true);
      switch (button) {
        case '下架':
          removedRef.current?.post();
          break;
        case '添加':
        case '编辑':
          editRef.current?.submit();
          break;
      }
    };
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    /** ReactDOM */
    return (
      <Modal
        destroyOnClose
        title={`${t(button)} ${name && '-'} ${name}`}
        width={config?.width}
        maskClosable={false}
        open={isModalOpen}
        onOk={handleOk}
        okButtonProps={{ size: 'middle', loading: buttonOkLoading }}
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
