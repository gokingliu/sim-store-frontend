import React, { FC, useEffect, useRef } from 'react';
import { Col, Row } from 'antd';
import { debounce } from 'lodash-es';
import * as echarts from 'echarts/core';
import { LineChart, type LineSeriesOption } from 'echarts/charts';
import { GridComponent, type GridComponentOption } from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';
import type { ComposeOption } from 'echarts/core';
import { PropsHomeEcharts } from '@/types';
import CardBox from '@/components/common/cardbox';

type ECOption = ComposeOption<LineSeriesOption | GridComponentOption>;
echarts.use([CanvasRenderer, GridComponent, LineChart]);

const HomeEcharts: FC<PropsHomeEcharts> = () => {
  /** DisplayName */
  HomeEcharts.displayName = 'HomeEcharts';

  /** Data */
  const echartsDOM = useRef(null);
  const option: ECOption = {
    grid: {
      left: '0',
      right: '0',
      top: '3%',
      bottom: '3%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        show: false,
        alignWithLabel: true,
      },
      axisLabel: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.4)',
      },
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.4)',
      },
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        label: {
          show: true,
          position: 'top',
          fontSize: 14,
          color: '#0052d9',
        },
      },
    ],
  };

  /** Method */

  /** Life Cycle Hook */
  useEffect(() => {
    const myChart = echarts.init(echartsDOM.current);
    myChart.setOption(option);
    const echartsResize = debounce(() => myChart?.resize(), 100, {
      leading: true,
      trailing: true,
    });
    window.addEventListener('resize', echartsResize);
    return () => {
      window.removeEventListener('resize', echartsResize);
    };
  }, []);

  /** ReactDOM */
  return (
    <Row style={{ marginTop: '16px' }}>
      <Col span={24}>
        <CardBox title="访问量分析">
          <div ref={echartsDOM} style={{ width: '100%', height: '200px' }} />
        </CardBox>
      </Col>
    </Row>
  );
};

export default HomeEcharts;
