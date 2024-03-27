import React, { FC } from 'react';
import { Button, Dropdown, Flex, Form, Select } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import store from '@/store';
import { useTranslation } from 'react-i18next';
import { useResponsive } from '@/components/common/responsive';
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
  const desktop = useResponsive();

  /** Method */
  const onFinish = (values: RequestGoodsList) => {
    search(values);
  };

  /** ReactDOM */
  return (
    <Flex className="search" align="center" justify="space-between">
      <Button className="add" type="primary" size="middle" onClick={() => add(0, '添加', '')}>
        {t('添加')}
      </Button>

      <Dropdown.Button
        className="search-dropdown"
        icon={<DownOutlined />}
        placement="bottom"
        type="primary"
        onClick={() => form.submit()}
        dropdownRender={() => (
          <ConfigForm
            formConfig={{
              form,
              className: `search-form ${desktop ? 'pc' : 'mobile'}`,
              layout: 'inline',
              name: 'search-form',
              labelAlign: 'left',
              labelCol: { span: 7 },
              wrapperCol: { span: 17 },
              size: 'middle',
              onFinish,
            }}
            formItemConfigs={[
              {
                className: 'search-form__item',
                label: t('运营商'),
                name: 'operator',
                children: (
                  <Select
                    options={storeData.operator.map((item) => ({ ...item, label: t(item.label) }))}
                    placeholder={t('请选择运营商')}
                    allowClear
                  />
                ),
              },
              {
                className: 'search-form__item',
                label: t('归属地'),
                name: 'location',
                children: (
                  <Select
                    options={storeData.location.map((item) => ({ ...item, label: t(item.label) }))}
                    placeholder={t('请选择归属地')}
                    allowClear
                  />
                ),
              },
              {
                className: 'search-form__item',
                label: t('优惠期'),
                name: 'discount',
                children: (
                  <Select
                    options={storeData.discount.map((item) => ({ ...item, label: t(item.label) }))}
                    placeholder={t('请选择优惠期')}
                    allowClear
                  />
                ),
              },
              {
                className: 'search-form__item',
                label: t('月租'),
                name: 'fee',
                children: (
                  <Select
                    options={storeData.fee.map((item) => ({ ...item, label: t(item.label) }))}
                    placeholder={t('请选择月租')}
                    allowClear
                  />
                ),
              },
            ]}
          />
        )}
      >
        查询
      </Dropdown.Button>
    </Flex>
  );
};

export default GoodsSearch;
