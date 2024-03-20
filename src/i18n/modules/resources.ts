import SiderMenu from '@/components/business/view-index/sider-menu/translate.json';
import UserName from '@/components/business/view-index/username/translate.json';

import Home from '@/views/home/translate.json';
import HomeEcharts from '@/components/business/home/echarts/translate.json';
import HomeList from '@/components/business/home/list/translate.json';
import HomeMessage from '@/components/business/home/message/translate.json';
import HomeOverview from '@/components/business/home/overview/translate.json';

import Goods from '@/views/goods/translate.json';
import GoodsEdit from '@/components/business/goods/edit/translate.json';
import GoodsInfo from '@/components/business/goods/info/translate.json';
import GoodsList from '@/components/business/goods/list/translate.json';
import GoodsModal from '@/components/business/goods/modal/translate.json';
import GoodsRemoved from '@/components/business/goods/removed/translate.json';
import GoodsSearch from '@/components/business/goods/search/translate.json';

import Custom from '@/views/custom/translate.json';
import CustomEdit from '@/components/business/custom/edit/translate.json';

export const resources = {
  en: {
    translation: {
      ...SiderMenu,
      ...UserName,
      ...Home,
      ...HomeEcharts,
      ...HomeList,
      ...HomeMessage,
      ...HomeOverview,
      ...Goods,
      ...GoodsEdit,
      ...GoodsInfo,
      ...GoodsList,
      ...GoodsModal,
      ...GoodsRemoved,
      ...GoodsSearch,
      ...Custom,
      ...CustomEdit,
    },
  },
};
