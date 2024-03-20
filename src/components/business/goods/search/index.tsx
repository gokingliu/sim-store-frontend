import React, { FC } from 'react';
import { Button, Form, Select } from 'antd';
import store from '@/store';
import { useTranslation } from 'react-i18next';
import ConfigForm from '@/components/common/config-form';
import { PropsGoodsSearch, RequestGoodsList } from '@/types';
import './index.less';

const GoodsSearch: FC<PropsGoodsSearch> = ({ add, search }) => {
  /** DisplayName */
  GoodsSearch.displayName = 'GoodsSearch';

  /** Data */
  const storeData = store.getState().data;
  const [form] = Form.useForm();
  const { t } = useTranslation();

  /** Method */
  const onFinish = (values: RequestGoodsList) => {
    search(values);
  };

  /** ReactDOM */
  return (
    <div className="search">
      <Button className="add" type="primary" size="middle" onClick={() => add(0, '添加', '')}>
        {t('添加')}
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
            label: t('运营商'),
            name: 'operator',
            children: <Select options={storeData.operator} placeholder={t('请选择运营商')} />,
          },
          {
            className: 'search-form__item',
            label: t('归属地'),
            name: 'location',
            children: <Select options={storeData.location} placeholder={t('请选择归属地')} />,
          },
          {
            className: 'search-form__item',
            label: t('优惠期'),
            name: 'discount',
            children: <Select options={storeData.discount} placeholder={t('请选择优惠期')} />,
          },
          {
            className: 'search-form__item',
            label: t('月租'),
            name: 'fee',
            children: <Select options={storeData.fee} placeholder={t('请选择月租')} />,
          },
          {
            className: 'search-form__submit',
            children: (
              <Button type="primary" htmlType="submit" size="middle">
                {t('查询')}
              </Button>
            ),
          },
        ]}
      />
    </div>
  );
};

export default GoodsSearch;
