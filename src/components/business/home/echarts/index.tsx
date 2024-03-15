import React, { useEffect, useRef, FC } from 'react';
import { Col, Row } from 'antd';
import { cloneDeep, debounce, type DebouncedFunc } from 'lodash-es';
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import { GridComponent } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
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

  /** Life Cycle Hook */
  useEffect(() => {
    let myCharts: echarts.ECharts | null = null;
    let echartsResize: DebouncedFunc<() => void>;
    if (visit) {
      myCharts = echarts.init(echartsDOM.current);
      const config = cloneDeep(ECOptionConfig);
      config.xAxis.data = visit?.days || [];
      config.series[0].data = visit?.page_view || [];
      myCharts.setOption(config);

      echartsResize = debounce(() => myCharts?.resize(), 100, {
        leading: true,
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
  }, [visit]);

  /** ReactDOM */
  return (
    <Row style={{ marginTop: '16px' }}>
      <Col span={24}>
        <CardBox title="访问量分析">
          <div ref={echartsDOM} className="echarts" />
        </CardBox>
      </Col>
    </Row>
  );
};

export default HomeEcharts;
