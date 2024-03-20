import React, { useEffect, useState, FC } from 'react';
import { Flex } from 'antd';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import Api from '@/apis';
import HomeEcharts from '@/components/business/home/echarts';
import HomeList from '@/components/business/home/list';
import HomeOverView from '@/components/business/home/overview';
import { ResponseOverview, ResponseMessage, ResponseRanking } from '@/types';
import './index.less';

/** Mock Data */
import { MockOverviewData, MockMessageData, MockRankingData } from './mock.config';

const Home: FC = () => {
  /** DisplayName */
  Home.displayName = 'Home';

  /** Data */
  const [overviewData, setOverviewData] = useState<ResponseOverview | null>(null);
  const [messageData, setMessageData] = useState<ResponseMessage[] | null>(null);
  const [rankingData, setRankingData] = useState<ResponseRanking[] | null>(null);
  const { t } = useTranslation();

  /** Life Cycle Hook */
  useEffect(() => {
    getOverview();
    getMessage();
    postRanking(10);
  }, []);

  /** Method */
  const getOverview = () => {
    Api.QueryOverview()
      .then((res) => {
        setOverviewData(res.data.result);
      })
      .catch(() => {
        // TODO 联调后 value 改为 null
        setOverviewData(MockOverviewData);
      });
  };
  const getMessage = () => {
    Api.QueryMessage()
      .then((res) => {
        setMessageData(res.data.result);
      })
      .catch(() => {
        // TODO 联调后 value 改为 null
        setMessageData(MockMessageData);
      });
  };
  const postRanking = (number: number) => {
    Api.PostRanking(number)
      .then((res) => {
        setRankingData(res.data.result);
      })
      .catch(() => {
        // TODO 联调后 value 改为 null
        setRankingData(MockRankingData);
      });
  };

  /** ReactDOM */
  return (
    <>
      <Helmet>
        <title>{t('数据中心')} - SIM Store</title>
      </Helmet>

      <Flex className="home" vertical={true}>
        <HomeOverView visit={overviewData?.visit} goods={overviewData?.goods} message={messageData} />

        <HomeEcharts visit={overviewData?.visit} />

        <HomeList ranking={rankingData} />
      </Flex>
    </>
  );
};

export default Home;
