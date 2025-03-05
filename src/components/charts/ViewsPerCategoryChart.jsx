import { Line } from 'react-chartjs-2';
import { hexToRgbaWithAlpha } from "/src/assets/CommonConstants.js";
import { cyan, gold, magenta, blue, red, green } from "@ant-design/colors";

const categoryColors = [gold[4], magenta[4], cyan[4], blue[4], red[4], green[4]];

const ViewsPerCategoryChart = ({ data, legendPosition = 'top' }) => {

  const labels = Object.keys(data);

  // Extract unique categories
  const categories = [...new Set(Object.values(data).flat().map(item => item.category))];

  // Create datasets for each category
  const datasets = categories.map((category, index) => {
    const categoryData = labels.map(period => {
      const item = data[period]?.find(p => p.category === category);
      return item ? item.views : 0; // Default to 0 if no data for that period
    });

    if (categoryData.every(val => val === 0)) return null;

    return {
      label: category,
      data: categoryData,
      borderColor: hexToRgbaWithAlpha(categoryColors[index % categoryColors.length]),
      backgroundColor: hexToRgbaWithAlpha(categoryColors[index % categoryColors.length], 0.3),
      fill: false,
      tension: 0.4,
    };
  }).filter(Boolean);

  const chartData = {
    labels,
    datasets
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: legendPosition },
      title: { display: true, text: 'Product Views Per Category Over Time' },
    },
    scales: {
      x: { type: 'category' },
      y: { beginAtZero: true },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default ViewsPerCategoryChart;
