import {ArcElement, Chart as ChartJS, Colors, Legend, Tooltip,} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import {cyan, geekblue, gold, magenta, purpleDark} from "@ant-design/colors";
import {hexToRgbaWithAlpha} from "/src/assets/CommonConstants.js";

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

const DoughnutChart = ({data, legendPosition = 'top', filterType}) => {

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Word Frequencies',
        data: Object.values(data),
        backgroundColor: [
          hexToRgbaWithAlpha(magenta[4]),
          hexToRgbaWithAlpha(cyan[4]),
          hexToRgbaWithAlpha(gold[4]),
          hexToRgbaWithAlpha(geekblue[4]),
          hexToRgbaWithAlpha(purpleDark[4])
        ],
        hoverOffset: 4,
      },
    ],
  };
  const titleText = filterType === 'date'
    ? `Top searched words on day`
    : `Top searched words over the last ${filterType}`;

  const options = {
    responsive: true,
    plugins: {
      legend: {position: legendPosition},
      title: {display: true, text: titleText},
    },
  };

  return (
      <Doughnut data={chartData} options={options}/>
  );
};

export default DoughnutChart;
