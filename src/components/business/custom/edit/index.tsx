import React, { forwardRef, useImperativeHandle, useState, FC, Ref } from 'react';
import { Form, Input, Modal } from 'antd';
import { PropsCustomEdit } from '@/types';
import ConfigForm from '@/components/common/config-form';
import './index.less';

const CustomEdit: FC<PropsCustomEdit> = forwardRef(({}, ref: Ref<{ openModal: () => void }>) => {
  /** DisplayName */
  CustomEdit.displayName = 'CustomEdit';

  /** Throw Method */
  useImperativeHandle(ref, () => ({
    openModal,
  }));

  /** Data */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm(); // 表单 Ref
  const { TextArea } = Input;

  /** Method */
  const openModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    form.submit();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values: null) => {
    console.log('Finish:', values);
  };

  /** ReactDOM */
  return (
    <Modal
      destroyOnClose
      title="编辑"
      width="30%"
      maskClosable={false}
      open={isModalOpen}
      onOk={handleOk}
      okButtonProps={{ size: 'middle' }}
      onCancel={handleCancel}
      cancelButtonProps={{ size: 'middle' }}
    >
      <ConfigForm
        formConfig={{
          form,
          className: 'edit-form',
          name: 'edit-form',
          labelAlign: 'left',
          labelCol: { span: 3 },
          wrapperCol: { span: 21 },
          size: 'middle',
          onFinish,
        }}
        formItemConfigs={[
          {
            className: 'search-form__item',
            label: '微信号',
            name: 'wechat',
            children: <Input maxLength={10} placeholder="请输入微信号" />,
          },
          {
            className: 'search-form__item',
            label: '滚屏文字',
            name: 'info',
            children: <Input maxLength={128} placeholder="请输入滚屏文字" />,
          },
          {
            className: 'search-form__item',
            label: '头图',
            name: 'banner',
            children: <TextArea maxLength={256} rows={4} placeholder="请输入头图链接" />,
          },
        ]}
      />
    </Modal>
  );
});

export default CustomEdit;
