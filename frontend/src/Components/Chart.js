import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { DEFAULT_FILTER_LABEL, overallData } from "../utils/chart-mock-data";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function BarChart() {
  const [labels, setLabels] = useState([]);
  const [chartData, setChartData] = useState([]);
  const data = {
    labels,
    datasets: [
      {
        label: DEFAULT_FILTER_LABEL.label,
        data: chartData,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  useEffect(() => {
    if (labels.length === 0 && chartData.length === 0) {
      overallData.map((ele, idx) => {
        labels.push(ele.month);
        chartData.push(ele.expense);
      });
    }
  }, []);
  return (
    <>
      <Bar options={options} data={data} />
    </>
  );
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Budget Trends",
    },
  },
};
