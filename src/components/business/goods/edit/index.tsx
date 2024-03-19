import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState, FC, Ref } from 'react';
import { Form, Input, Select } from 'antd';
import Api from '@/apis';
import store from '@/store';
import ConfigForm from '@/components/common/config-form';
import { PropsGoodsEdit, GoodsEditFormValue } from '@/types';

/** Mock Data */
import { MockGoodsListItemData } from '../info/mock.config';

const GoodsEdit: FC<PropsGoodsEdit> = forwardRef(
  ({ id, loadingFC, closeModal }: PropsGoodsEdit, ref: Ref<{ submit: () => void }>) => {
    /** DisplayName */
    GoodsEdit.displayName = 'GoodsEdit';

    /** Throw Method */
    useImperativeHandle(ref, () => ({
      submit,
    }));

    /** Data */
    const storeData = store.getState().data;
    const [form] = Form.useForm(); // 表单 Ref
    const initialValues = useRef<GoodsEditFormValue>();
    const [disabled, setDisabled] = useState(false);

    /** Life Cycle Hook */
    useEffect(() => {
      id &&
        Api.QueryGoodsListItem(id)
          .then((res) => {
            initialValues.current = res.data.result;
            form.setFieldsValue(initialValues.current);
          })
          .catch(() => {
            // TODO 联调后 value 改为 null
            initialValues.current = MockGoodsListItemData;
            form.setFieldsValue(initialValues.current);
          });
    }, [id, form]);

    /** Method */
    const restForm = (value: boolean) => {
      loadingFC(value);
      setDisabled(value);
    };
    const submit = () => {
      restForm(true);
      form.submit();
    };
    const onFinish = (value: GoodsEditFormValue) => {
      try {
        Api.PostGoodsListItem(value)
          .then((res) => {
            if (res.data.code) closeModal();
          })
          .catch(() => {
            // TODO
          })
          .finally(() => {
            restForm(false);
          });
      } catch (e) {
        restForm(false);
      }
    };
    const onFinishFailed = () => {
      restForm(false);
    };

    /** ReactDOM */
    return (
      <ConfigForm
        formConfig={{
          form,
          disabled,
          name: 'goods-edit',
          className: 'goods-edit',
          labelAlign: 'left',
          labelCol: { span: 4 },
          wrapperCol: { span: 20 },
          size: 'middle',
          onFinish,
          onFinishFailed,
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
            children: <Select options={storeData.operator} placeholder="请选择运营商" />,
          },
          {
            label: '月租',
            name: 'fee',
            rules: [{ required: true, message: '请选择月租' }],
            children: <Select options={storeData.fee} placeholder="请选择月租" />,
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
            children: <Select options={storeData.location} placeholder="请选择归属地" />,
          },
          {
            label: '优惠期',
            name: 'discount',
            rules: [{ required: true, message: '请选择优惠期' }],
            children: <Select options={storeData.discount} placeholder="请选择优惠期" />,
          },
          {
            label: '套餐内容',
            name: 'combo',
            rules: [{ required: true, message: '请输入套餐内容' }],
            children: <Input.TextArea rows={3} maxLength={128} placeholder="请输入套餐内容" />,
          },
          {
            label: '优惠详情',
            name: 'details',
            rules: [{ required: true, message: '请输入优惠详情' }],
            children: <Input.TextArea rows={4} maxLength={1000} placeholder="请输入优惠详情" />,
          },
          {
            label: '商品链接',
            name: 'url',
            rules: [{ required: true, message: '请输入链接' }],
            children: <Input maxLength={64} placeholder="请输入链接" />,
          },
        ]}
      />
    );
  },
);

export default GoodsEdit;
