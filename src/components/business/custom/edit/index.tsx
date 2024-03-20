import React, { forwardRef, useEffect, useImperativeHandle, useState, FC, Ref } from 'react';
import { Form, Input, Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import ConfigForm from '@/components/common/config-form';
import { PropsCustomEdit, RequestCustomInfo } from '@/types';
import './index.less';
import Api from '@/apis';

const CustomEdit: FC<PropsCustomEdit> = forwardRef(({ info }: PropsCustomEdit, ref: Ref<{ openModal: () => void }>) => {
  /** DisplayName */
  CustomEdit.displayName = 'CustomEdit';

  /** Throw Method */
  useImperativeHandle(ref, () => ({
    openModal,
  }));

  /** Data */
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm(); // 表单 Ref
  const [buttonOkLoading, setButtonOkLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { t, i18n } = useTranslation();

  /** Life Cycle Hook */
  useEffect(() => {
    form.setFieldsValue(info.current);
  }, [info.current, form]);

  /** Method */
  const restForm = (value: boolean) => {
    setButtonOkLoading(value);
    setDisabled(value);
  };
  const openModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    restForm(true);
    form.submit();
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values: RequestCustomInfo) => {
    Api.PostCustomInfo(values)
      .then(() => {})
      .catch(() => {
        // TODO 联调后 value 改为 null
      })
      .finally(() => {
        restForm(false);
      });
  };

  /** ReactDOM */
  return (
    <Modal
      destroyOnClose
      title={t('编辑')}
      width="30%"
      maskClosable={false}
      open={isModalOpen}
      onOk={handleOk}
      okButtonProps={{ size: 'middle', disabled: buttonOkLoading }}
      onCancel={handleCancel}
      cancelButtonProps={{ size: 'middle' }}
    >
      <ConfigForm
        formConfig={{
          form,
          disabled,
          className: 'edit-form',
          name: 'edit-form',
          labelAlign: 'left',
          labelCol: { span: { zh: 3, en: 4 }[i18n.language] },
          wrapperCol: { span: { zh: 21, en: 20 }[i18n.language] },
          size: 'middle',
          onFinish,
        }}
        formItemConfigs={[
          {
            className: 'search-form__item',
            label: t('微信号'),
            name: 'wechat',
            children: <Input maxLength={10} placeholder="请输入微信号" />,
          },
          {
            className: 'search-form__item',
            label: t('滚屏文字'),
            name: 'info',
            children: <Input maxLength={128} placeholder="请输入滚屏文字" />,
          },
          {
            className: 'search-form__item',
            label: t('头图'),
            name: 'banner',
            children: <Input.TextArea maxLength={256} rows={4} placeholder="请输入头图链接" />,
          },
        ]}
      />
    </Modal>
  );
});

export default CustomEdit;
