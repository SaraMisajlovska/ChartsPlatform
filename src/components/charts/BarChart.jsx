import {BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip,} from 'chart.js';
import {Bar} from 'react-chartjs-2';
import {hexToRgbaWithAlpha} from "../../assets/CommonConstants.js";
import {cyan, volcano} from "@ant-design/colors";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({data}) => {
  const chartData = {
    labels: data.map((item) => item.timestamp), // Labels for the x-axis
    datasets: [
      {
        label: 'Add to Cart',
        data: data.map((item) => item.addToCart),
        backgroundColor: hexToRgbaWithAlpha(cyan[4]),
      },
      {
        label: 'Cart Abandonment',
        data: data.map((item) => item.cartAbandon),
        backgroundColor: hexToRgbaWithAlpha(volcano[4]),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {position: 'top'},
      title: {display: true, text: 'User Actions: Add to Cart vs Cart Abandonment'},
    },
    scales: {
      x: {title: {display: true, text: 'Time'}},
      y: {beginAtZero: true},
    },
  };

  return (
    <Bar data={chartData} options={options}/>
  );
};

export default BarChart;
