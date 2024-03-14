import React, { forwardRef, FC } from 'react';
import { Button, Flex, Form, Select } from 'antd';
import ConfigForm from '@/components/common/config-form';
import { PropsGoodsSearch, GoodsSearchForm } from '@/types';
import './index.less';

const GoodsSearch: FC<PropsGoodsSearch> = forwardRef((props, ref) => {
  /** DisplayName */
  GoodsSearch.displayName = 'GoodsSearch';

  /** Throw Method */

  /** Data */
  const [form] = Form.useForm();

  /** Method */
  const onFinish = (values: GoodsSearchForm) => {
    console.log('Finish:', values);
  };

  /** ReactDOM */
  return (
    <div className="search">
      <Button className="add" type="primary" size="middle">
        添加
      </Button>

      <ConfigForm
        formConfig={{
          form,
          className: 'search-form',
          layout: 'inline',
          name: 'search-form',
          size: 'middle',
          onFinish,
        }}
        formItemConfigs={[
          {
            className: 'search-form__item',
            label: '运营商',
            name: 'operator',
            children: (
              <Select
                allowClear
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
            className: 'search-form__item',
            label: '归属地',
            name: 'location',
            children: (
              <Select
                allowClear
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
            className: 'search-form__item',
            label: '优惠期',
            name: 'discount',
            children: (
              <Select
                allowClear
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
            className: 'search-form__item',
            label: '月租',
            name: 'fee',
            children: (
              <Select
                allowClear
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
            className: 'search-form__submit',
            children: (
              <Button type="primary" htmlType="submit" size="middle">
                查询
              </Button>
            ),
          },
        ]}
      />
    </div>
  );
});

export default GoodsSearch;
