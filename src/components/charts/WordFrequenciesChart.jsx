import {ArcElement, Chart as ChartJS, Colors, Legend, Tooltip,} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import {cyan, geekblue, magenta, orange, purpleDark} from "@ant-design/colors";
import {hexToRgbaWithAlpha} from "/src/assets/CommonConstants.js";

ChartJS.register(ArcElement, Tooltip, Legend, Colors);

const WordFrequenciesChart = ({data, legendPosition = 'top', filterType}) => {

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: 'Word Frequencies',
        data: Object.values(data),
        backgroundColor: [
          hexToRgbaWithAlpha(magenta[6]),
          hexToRgbaWithAlpha(cyan[6]),
          hexToRgbaWithAlpha(orange[6]),
          hexToRgbaWithAlpha(geekblue[6]),
          hexToRgbaWithAlpha(purpleDark[6])
        ],
        hoverOffset: 4,
      },
    ],
  };
  const titleText = filterType === 'date'
    ? `Top searched words`
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

export default WordFrequenciesChart;
