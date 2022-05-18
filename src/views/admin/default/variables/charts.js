export const lineChartDataTotalSpent = [
  {
    name: 'Revenue',
    data: [50, 64, 48, 66, 49, 68],
  },
  {
    name: 'Profit',
    data: [30, 40, 24, 46, 20, 46],
  },
  {
    name: 'Profit',
    data: [10, 30, 10, 16, 60, 36],
  },
]

export const lineChartOptionsTotalSpent = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 13,
      left: 0,
      blur: 10,
      opacity: 0.1,
      color: '#4318FF',
    },
  },
  colors: ['#4318FF', '#39B8FF'],
  markers: {
    size: 0,
    colors: 'white',
    strokeColors: '#7551FF',
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: 'circle',
    radius: 2,
    offsetX: 0,
    offsetY: 0,
    showNullDataPoints: true,
  },
  tooltip: {
    theme: 'dark',
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    type: 'line',
  },
  xaxis: {
    type: 'numeric',
    categories: ['SEP', 'OCT', 'NOV', 'DEC', 'JAN', 'FEB'],
    labels: {
      style: {
        colors: '#A3AED0',
        fontSize: '12px',
        fontWeight: '500',
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    show: false,
    colors: 'white',
    strokeColors: '#7551FF',
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    shape: 'circle',
    radius: 2,
    offsetX: 0,
    offsetY: 0,
  },
  legend: {
    show: true,
  },
  grid: {
    show: false,
    column: {
      color: ['#7551FF', '#39B8FF'],
      opacity: 0.5,
    },
  },
  color: ['#7551FF', '#39B8FF'],
}
// export const lineChartOptionsTotalSpent = {
//   series: [
//     {
//       name: 'Website Blog',
//       type: 'column',
//       data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
//     },
//     {
//       name: 'Social Media',
//       type: 'line',
//       data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
//     },
//   ],
//   chart: {
//     height: 350,
//     type: 'line',
//   },
//   stroke: {
//     width: [0, 4],
//   },
//   title: {
//     text: 'Traffic Sources',
//   },
//   dataLabels: {
//     enabled: false,
//     enabledOnSeries: [1],
//   },

//   xaxis: {
//     type: 'datetime',
//   },
//   yaxis: [
//     {
//       title: {
//         text: 'Website Blog',
//       },
//     },
//   ],
// }
