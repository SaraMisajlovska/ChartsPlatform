import {
  CategoryScale,
  Chart as ChartJS,
  defaults,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Filler
} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {hexToRgbaWithAlpha} from "../../assets/CommonConstants.js";
import {cyan, gold, magenta} from "@ant-design/colors";

// Register necessary components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
//  { timestamp: '2024-11-01', views: 150, addToCart: 30, cartAbandon: 20, searchQueries: 25 },
const LineChart = ({data, legendPosition='top'}) => {

  defaults.maintainAspectRatio = false;
  const chartData = {
    labels: data.map((item) => item.timestamp), // Assuming `timestamp` in readable format
    datasets: [
      {
        label: 'Product 1',
        data: data.map((item) => item.views), // Views count
        borderColor: hexToRgbaWithAlpha(gold[4]),
        backgroundColor: hexToRgbaWithAlpha(gold[8]),
        fill: false,
      },
      {
        label: 'Product 2',
        data: data.map((item) => item.views - 7), // Views count
        borderColor:  hexToRgbaWithAlpha(magenta[4]),
        backgroundColor:  hexToRgbaWithAlpha(magenta[8]),
        fill: false,
      },
      {
        label: 'Product 3',
        data: data.map((item) => item.views + 8), // Views count
        borderColor: hexToRgbaWithAlpha(cyan[4]),
        backgroundColor: hexToRgbaWithAlpha(cyan[4]),
        fill: false,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {position: legendPosition},
      title: {display: true, text: 'Product Views Over Time'},
    },
    scales: {
      x: {type: 'category'},  // Explicitly set x-axis scale type
      y: {beginAtZero: false},
    },
  };

  return (
    <Line data={chartData} options={options}/>
  )
};

export default LineChart;
