import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {hexToRgbaWithAlpha} from "/src/assets/CommonConstants.js";
import {geekblue, gold, magenta} from "@ant-design/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const AreaChart = ({data, legendPosition = 'top'}) => {
  const chartData = {
    labels: data.map((item) => item.timestamp), // Time-based labels
    datasets: [
      {
        label: 'Product Views',
        data: data.map((item) => item.views),
        borderColor: hexToRgbaWithAlpha(geekblue[4]),
        backgroundColor: hexToRgbaWithAlpha(geekblue[6]),
        fill: false,
      },
      {
        label: 'Add to Cart',
        data: data.map((item) => item.addToCart),
        borderColor: hexToRgbaWithAlpha(gold[4]),
        backgroundColor: hexToRgbaWithAlpha(gold[6]),
        fill: false,
      },
      {
        label: 'Cart Abandonment',
        data: data.map((item) => item.cartAbandon),
        borderColor: hexToRgbaWithAlpha(magenta[4]),
        backgroundColor: hexToRgbaWithAlpha(magenta[6]),
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {position: legendPosition},
      title: {display: true, text: 'User Interactions Over Time'},
    },
    scales: {
      x: {title: {display: true, text: 'Time'}},
      y: {
        title: {display: true, text: 'Count'},
        beginAtZero: false
      },
    },
  };

  return (
    <Line data={chartData} options={options}/>
  );
};

export default AreaChart;
