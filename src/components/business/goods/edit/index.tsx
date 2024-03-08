import React, { forwardRef, FC, useImperativeHandle, Ref } from 'react';
import { Form, Input, message, Select } from 'antd';
import { PropsGoodsEdit } from '@/types';
import ConfigForm from '@/components/common/config-form';

const GoodsEdit: FC<PropsGoodsEdit> = forwardRef((props, ref: Ref<{ submit: () => void }>) => {
  /** DisplayName */
  GoodsEdit.displayName = 'GoodsEdit';

  /** Throw Method */
  useImperativeHandle(ref, () => ({
    submit,
  }));

  /** Data */
  const [form] = Form.useForm(); // 表单 Ref

  /** Method */
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  const submit = () => {
    form.submit();
  };
  const onFinish = () => {
    try {
    } catch (e) {
      console.error(e);
    }
  };

  /** ReactDOM */
  return (
    <ConfigForm
      formConfig={{
        form,
        name: 'goods-edit',
        className: 'goods-edit',
        onFinish,
        onFinishFailed: () => message.error('请正确填写用户名和密码！'),
      }}
      formItemConfigs={[
        {
          label: '商品名称',
          name: 'name',
          rules: [{ required: true, message: '请输入商品名称' }],
          children: <Input maxLength={10} placeholder="商品名称" />,
        },
        {
          label: '简介',
          name: 'description',
          rules: [{ required: true, message: '请输入简介' }],
          children: <Input maxLength={32} placeholder="简介" />,
        },
        {
          label: '头图',
          name: 'poster',
          rules: [{ required: true, message: '请输入头图' }],
          children: <Input maxLength={64} placeholder="头图" />,
        },
        {
          label: '年龄',
          name: 'age',
          rules: [{ required: true, message: '请输入年龄' }],
          children: <Input maxLength={10} placeholder="年龄" />,
        },
        {
          label: '归属地',
          name: 'location',
          rules: [{ required: true, message: '请选择归属地' }],
          children: (
            <Select
              defaultValue="lucy"
              onChange={handleChange}
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
              defaultValue="lucy"
              onChange={handleChange}
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
          children: <Input maxLength={128} placeholder="套餐内容" />,
        },
        {
          label: '优惠详情',
          name: 'details',
          rules: [{ required: true, message: '请输入优惠详情' }],
          children: <Input maxLength={1000} placeholder="优惠详情" />,
        },
        {
          label: '商品链接',
          name: 'url',
          rules: [{ required: true, message: '请输入链接' }],
          children: <Input maxLength={64} placeholder="链接" />,
        },
      ]}
    />
  );
});

export default GoodsEdit;
