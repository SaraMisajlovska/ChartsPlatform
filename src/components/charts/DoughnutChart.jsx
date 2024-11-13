import {ArcElement, Chart as ChartJS, Colors, Legend, Tooltip,} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import {cyan, geekblue, gold, magenta} from "@ant-design/colors";
import {hexToRgbaWithAlpha} from "../../assets/CommonConstants.js";

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

const DoughnutChart = ({ data, legendPosition='top' }) => {
  const chartData = {
    labels: ['Product Views', 'Add to Cart', 'Cart Abandonment', 'Search Queries'],
    datasets: [
      {
        label: 'User Activities',
        data: [
          data.productViews,
          data.addToCart,
          data.cartAbandon,
          data.searchQueries,
        ],
        backgroundColor: [
          hexToRgbaWithAlpha(magenta[4]),
          hexToRgbaWithAlpha(cyan[4]),
          hexToRgbaWithAlpha(gold[4]),
          hexToRgbaWithAlpha(geekblue[4]),
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: legendPosition },
      title: { display: true, text: 'User Activity Distribution' },
    },
  };

  return (
      <Doughnut data={chartData} options={options}/>
  );
};

export default DoughnutChart;
