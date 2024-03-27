import React, { useEffect, useRef, FC } from 'react';
import { Col, Row, Skeleton } from 'antd';
import { cloneDeep, debounce, type DebouncedFunc } from 'lodash-es';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import { useStoreSelector, StoreState } from '@/store';
import { useTranslation } from 'react-i18next';
import CardBox from '@/components/common/cardbox';
import { PropsHomeEcharts } from '@/types';
import { ECOptionConfig } from './index.config';
import './index.less';

echarts.use([CanvasRenderer, GridComponent, LineChart]);

const HomeEcharts: FC<PropsHomeEcharts> = ({ visit }) => {
  /** DisplayName */
  HomeEcharts.displayName = 'HomeEcharts';

  /** Data */
  const echartsDOM = useRef(null);
  const { t } = useTranslation();
  const { darkMode } = useStoreSelector((state: StoreState) => state.dark);

  /** Life Cycle Hook */
  useEffect(() => {
    let myCharts: echarts.ECharts | null = null;
    let echartsResize: DebouncedFunc<() => void>;
    if (visit) {
      myCharts = echarts.init(echartsDOM.current);
      const config = cloneDeep(ECOptionConfig);
      config.xAxis.data = visit?.days || [];
      config.series[0].data = visit?.page_view || [];
      if (darkMode) {
        config.xAxis.axisLine.lineStyle.color = 'hsla(225deg, 15%, 17%, 1)';
        config.xAxis.axisLabel.color = 'rgba(255, 255, 255, 0.6)';
        config.yAxis.splitLine.lineStyle.color = 'hsla(225deg, 15%, 17%, 1)';
        config.yAxis.axisLabel.color = 'rgba(255, 255, 255, 0.6)';
      }
      myCharts.setOption(config);

      echartsResize = debounce(() => myCharts?.resize(), 100, {
        leading: false,
        trailing: true,
      });
      window.addEventListener('resize', echartsResize);
    }

    return () => {
      if (visit) {
        window.removeEventListener('resize', echartsResize);
        myCharts?.dispose();
        echartsResize.cancel();
      }
    };
  }, [visit, darkMode]);

  /** ReactDOM */
  return (
    <Row className="echarts">
      <Col span={24}>
        <CardBox title={t('访问量分析')}>
          {visit ? <div ref={echartsDOM} className="echarts-dom" /> : <Skeleton active paragraph={{ rows: 5 }} />}
        </CardBox>
      </Col>
    </Row>
  );
};

export default HomeEcharts;
