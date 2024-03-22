import { createSlice } from '@reduxjs/toolkit';
import { StoreDataState, StoreDataItemState } from '@/types';

const DataSlice = createSlice({
  // 命名空间
  name: 'data',
  // state 数据初始值
  initialState: {
    operator: [
      { label: '中国电信', value: 1 },
      { label: '中国联通', value: 2 },
      { label: '中国移动', value: 3 },
      { label: '中国广电', value: 4 },
    ] as StoreDataItemState[],
    location: [
      { label: '吉林省', value: 'JL' },
      { label: '湖北省', value: 'HB' },
      { label: '江西省', value: 'JX' },
      { label: '广西壮族自治区', value: 'GX' },
      { label: '内蒙古自治区', value: 'NM' },
      { label: '甘肃省', value: 'GS' },
      { label: '河南省', value: 'HA' },
      { label: '江苏省', value: 'JS' },
      { label: '辽宁省', value: 'LN' },
      { label: '新疆维吾尔自治区', value: 'XJ' },
      { label: '山东省', value: 'SD' },
      { label: '浙江省', value: 'ZJ' },
      { label: '天津市', value: 'TJ' },
      { label: '湖南省', value: 'HN' },
      { label: '四川省', value: 'SC' },
      { label: '广东省', value: 'GD' },
      { label: '福建省', value: 'FJ' },
      { label: '西藏自治区', value: 'XZ' },
      { label: '北京市', value: 'BJ' },
      { label: '黑龙江省', value: 'HL' },
      { label: '河北省', value: 'HE' },
      { label: '上海市', value: 'SH' },
      { label: '海南省', value: 'HI' },
      { label: '山西省', value: 'SX' },
      { label: '陕西省', value: 'SN' },
      { label: '青海省', value: 'QH' },
      { label: '安徽省', value: 'AH' },
      { label: '云南省', value: 'YN' },
      { label: '宁夏回族自治区', value: 'NX' },
      { label: '重庆市', value: 'CQ' },
      { label: '贵州省', value: 'GZ' },
    ] as StoreDataItemState[],
    discount: [
      { label: '长期有效', value: 1 },
      { label: '到期续约', value: 2 },
      { label: '两年优惠', value: 3 },
      { label: '一年优惠', value: 4 },
    ] as StoreDataItemState[],
    fee: [
      { label: '9', value: 9 },
      { label: '19', value: 19 },
      { label: '29', value: 29 },
      { label: '39', value: 39 },
    ] as StoreDataItemState[],
  },
  // actions，在组件中可以直接通过 dispatch 进行触发
  reducers: {},
});

const actionData = (data: { key: keyof StoreDataState; value: string | number }) => (): string => {
  const currentValue = DataSlice.getInitialState()[data.key].find((item) => item.value === data.value);

  return currentValue?.label as string;
};

export { actionData };

export default DataSlice.reducer;
