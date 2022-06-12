import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface Props {
  labels: string[];
  values: number[];
}

export const MonthChart = React.memo<Props>(({ labels, values }) => {
  const chartData = {
    labels,
    datasets: [{
      label: 'months',
      data: values,
      borderColor: 'rgba(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.4)',
    }],
  };

  const chartOptions = {
    type: 'bar',
    responsive: true,
  };

  return (
    <Bar data={chartData} options={chartOptions} />
  );
});
