import React, { useEffect, useState, FC } from 'react';
import { Descriptions, Skeleton, type DescriptionsProps } from 'antd';
import Api from '@/apis';
import { useStoreDispatch } from '@/store';
import { actionData } from '@/store/modules/data.store';
import { useTranslation } from 'react-i18next';
import { PropsGoodsInfo, ResponseGoodsListItem } from '@/types';
import './index.less';

/** Mock Data */
import { MockGoodsListItemData } from './mock.config';

const GoodsInfo: FC<PropsGoodsInfo> = ({ id }) => {
  /** DisplayName */
  GoodsInfo.displayName = 'GoodsInfo';

  /** Data */
  const dispatch = useStoreDispatch(); // 调用 store 方法
  const [goodsListItem, setGoodsListItem] = useState<DescriptionsProps['items']>();
  const { t } = useTranslation();

  /** Life Cycle Hook */
  useEffect(() => {
    const handleData = (goodsListItem: ResponseGoodsListItem): DescriptionsProps['items'] => {
      const data = {
        ...goodsListItem,
        operator: t(dispatch(actionData({ key: 'operator', value: goodsListItem.operator }))),
        location: t(dispatch(actionData({ key: 'location', value: goodsListItem.location }))),
        discount: t(dispatch(actionData({ key: 'discount', value: goodsListItem.discount }))),
      };

      return [
        { label: t('商品名称'), children: data.name },
        { label: t('运营商'), children: data.operator },
        { label: t('月租'), children: data.fee },
        { label: t('归属地'), children: data.location },
        { label: t('年龄'), span: { xl: 2, xxl: 2 }, children: data.age },
        { label: t('简介'), span: { xl: 2, xxl: 2 }, children: data.description },
        { label: t('优惠期'), span: { xl: 2, xxl: 2 }, children: data.discount },
        {
          label: t('商品链接'),
          span: { xl: 2, xxl: 2 },
          children: (
            <a href={data.url} target="_blank" rel="noreferrer">
              {data.url}
            </a>
          ),
        },
        {
          label: t('套餐内容'),
          span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
          children: <span className="white-space"> {data.combo.replaceAll('；', '\n')} </span>,
        },
        {
          label: t('优惠详情'),
          span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
          children: <span className="white-space"> {data.details.replaceAll('；', '\n')} </span>,
        },
      ];
    };

    Api.QueryGoodsListItem(id)
      .then((res) => {
        setGoodsListItem(handleData(res.data.result));
      })
      .catch(() => {
        // TODO 联调后 value 改为 null
        setGoodsListItem(handleData(MockGoodsListItemData));
      });
  }, [id, dispatch]);

  /** ReactDOM */
  return (
    <Skeleton className="skeleton" loading={!goodsListItem} active paragraph={{ rows: 5 }}>
      <Descriptions
        bordered
        size="small"
        column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
        items={goodsListItem}
      />
    </Skeleton>
  );
};

export default GoodsInfo;
