import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  CancellationReason,
  reasonColors,
} from "/src/assets/CommonConstants.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const CheckoutAbandonmentChart = ({ data }) => {
  // Extract all unique time periods (sorted)
  const timePeriods = Object.keys(data);

  // Extract all unique reasons from the backend data
  const uniqueReasons = new Set();
  Object.values(data).forEach((entries) => {
    entries.forEach((entry) => uniqueReasons.add(entry.reason));
  });

  const datasets = Array.from(uniqueReasons).map((reason) => {
    return {
      label: reason.replace(/_/g, " "),
      data: timePeriods.map((period) => {

        const entry = data[period].find((e) => e.reason === reason);
        return entry ? entry?.productsCount : 0;
      }),
      backgroundColor: reasonColors[reason] || "#999999", // Default color if not mapped
    };
  });

  // Get top products per reason per time period
  const topProductsByPeriodAndReason = {};

  timePeriods.forEach((period) => {
    topProductsByPeriodAndReason[period] = {};

    data[period].forEach((entry) => {
      const reason = entry.reason;
      const { products } = entry;

      topProductsByPeriodAndReason[period][reason] = products.map((product) => product.name);
    });
  });

  const getReason = (label) => {
    const entry = Object.entries(CancellationReason)
      .find(([_, value]) => value === label);
    return entry ? entry[0] : CancellationReason.OTHER; // Return the key or null if not found
  };

  const chartData = {
    labels: timePeriods,
    datasets,
    hoverOffset: 1,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Checkout Abandonment Reasons Over Time",
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const value = context.raw;
            const reason = getReason(context.dataset.label);
            const period = chartData.labels[context.dataIndex]; // Get current period
            const products = topProductsByPeriodAndReason[period]?.[reason] || [];

            return [
              `${reason}: ${value} abandonments`,
              `Top Products: ${products ?? "No data"}`,
            ];
          },
        },
      },
    },
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "Number of Abandonments",
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default CheckoutAbandonmentChart;
