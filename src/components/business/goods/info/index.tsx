import React, { FC } from 'react';
import { Descriptions, type DescriptionsProps } from 'antd';
import { PropsGoodsInfo } from '@/types';

const GoodsInfo: FC<PropsGoodsInfo> = () => {
  /** DisplayName */
  GoodsInfo.displayName = 'GoodsInfo';

  /** Data */
  const items: DescriptionsProps['items'] = [
    {
      label: '商品名称',
      children: '移动｜新尊卡',
    },
    {
      label: '运营商',
      children: '移动',
    },
    {
      label: '月租',
      children: '19元',
    },
    {
      label: '归属地',
      children: '海南',
    },
    {
      label: '年龄',
      span: { xl: 2, xxl: 2 },
      children: '18-60岁',
    },
    {
      label: '简介',
      span: { xl: 2, xxl: 2 },
      children: '29元135G+通话0.1/分钟',
    },
    {
      label: '优惠期',
      span: { xl: 2, xxl: 2 },
      children: '长期有效',
    },
    {
      label: '商品链接',
      span: { xl: 2, xxl: 2 },
      children: (
        <a href="https://www.baidu.com/" target="_blank" rel="noreferrer">
          https://www.baidu.com/
        </a>
      ),
    },
    {
      label: '套餐内容',
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
      children: (
        <>
          原月租:29元=30G定向；
          <br />
          优惠后:29元=155G通用+30定向+100分钟通话
          <br />
          套外流量5元/G，套外语音0.1元/分钟，短信0.1/一条。
        </>
      ),
    },
    {
      label: '优惠详情',
      span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
      children: (
        <>
          激活时强充100元，才可享受以下优惠；
          <br />
          1、激活后48小时内到账155G通用+100分钟（赠送12个月），到期自动续约；
        </>
      ),
    },
  ];

  /** ReactDOM */
  return <Descriptions bordered size="small" column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }} items={items} />;
};

export default GoodsInfo;
