import React, { forwardRef, useImperativeHandle, FC, Ref } from 'react';
import { Form, Input, message, Select } from 'antd';
import { PropsGoodsEdit, GoodsEditFormValue } from '@/types';
import ConfigForm from '@/components/common/config-form';

const GoodsEdit: FC<PropsGoodsEdit> = forwardRef(({ closeModal }: PropsGoodsEdit, ref: Ref<{ submit: () => void }>) => {
  /** DisplayName */
  GoodsEdit.displayName = 'GoodsEdit';

  /** Throw Method */
  useImperativeHandle(ref, () => ({
    submit,
  }));

  /** Data */
  const [form] = Form.useForm(); // 表单 Ref
  const [messageApi, contextHolder] = message.useMessage();

  /** Method */
  const submit = () => {
    form.submit();
  };
  const onFinish = (value: GoodsEditFormValue) => {
    try {
      console.log(value);
      closeModal();
    } catch (e) {
      console.error(e);
    }
  };

  /** ReactDOM */
  return (
    <>
      {contextHolder}
      <ConfigForm
        formConfig={{
          form,
          name: 'goods-edit',
          className: 'goods-edit',
          labelAlign: 'left',
          labelCol: { span: 4 },
          wrapperCol: { span: 20 },
          size: 'middle',
          onFinish,
          onFinishFailed: () => messageApi.error('请正确填写用户名和密码！'),
        }}
        formItemConfigs={[
          {
            label: '商品名称',
            name: 'name',
            rules: [{ required: true, message: '请输入商品名称' }],
            children: <Input maxLength={10} placeholder="请输入商品名称" />,
          },
          {
            label: '运营商',
            name: 'operator',
            rules: [{ required: true, message: '请选择运营商' }],
            children: (
              <Select
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled' },
                ]}
              />
            ),
          },
          {
            label: '月租',
            name: 'fee',
            rules: [{ required: true, message: '请选择月租' }],
            children: (
              <Select
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled' },
                ]}
              />
            ),
          },
          {
            label: '简介',
            name: 'description',
            rules: [{ required: true, message: '请输入简介' }],
            children: <Input maxLength={32} placeholder="请输入简介" />,
          },
          {
            label: '头图',
            name: 'poster',
            rules: [{ required: true, message: '请输入头图' }],
            children: <Input maxLength={64} placeholder="请输入头图" />,
          },
          {
            label: '年龄',
            name: 'age',
            rules: [{ required: true, message: '请输入年龄' }],
            children: <Input maxLength={10} placeholder="请输入年龄" />,
          },
          {
            label: '归属地',
            name: 'location',
            rules: [{ required: true, message: '请选择归属地' }],
            children: (
              <Select
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled' },
                ]}
              />
            ),
          },
          {
            label: '优惠期',
            name: 'discount',
            rules: [{ required: true, message: '请选择优惠期' }],
            children: (
              <Select
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                  { value: 'disabled', label: 'Disabled' },
                ]}
              />
            ),
          },
          {
            label: '套餐内容',
            name: 'combo',
            rules: [{ required: true, message: '请输入套餐内容' }],
            children: <Input maxLength={128} placeholder="请输入套餐内容" />,
          },
          {
            label: '优惠详情',
            name: 'details',
            rules: [{ required: true, message: '请输入优惠详情' }],
            children: <Input maxLength={1000} placeholder="请输入优惠详情" />,
          },
          {
            label: '商品链接',
            name: 'url',
            rules: [{ required: true, message: '请输入链接' }],
            children: <Input maxLength={64} placeholder="请输入链接" />,
          },
        ]}
      />
    </>
  );
});

export default GoodsEdit;
