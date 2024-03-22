export const ECOptionConfig = {
  grid: {
    left: '0',
    right: '0',
    top: '3%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: {
    type: 'category',
    data: [] as string[],
    axisTick: {
      show: false,
      alignWithLabel: true,
    },
    axisLabel: {
      fontSize: 14,
      color: 'rgba(0, 0, 0, 0.4)',
    },
    axisLine: {
      lineStyle: {
        color: '#e2e4e9',
      },
    },
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      fontSize: 14,
      color: 'rgba(0, 0, 0, 0.4)',
    },
    splitLine: {
      lineStyle: {
        type: 'dashed',
        color: '#e2e4e9',
      },
    },
  },
  series: [
    {
      data: [] as number[],
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
