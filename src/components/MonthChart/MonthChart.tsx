import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
} from 'chart.js';
import { Bar, Line, Radar } from 'react-chartjs-2';
import './MonthChart.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  RadialLinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

interface Props {
  labels: string[];
  values: number[];
  typeChart: string;
}

export const MonthChart = React.memo<Props>(({ labels, values, typeChart }) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: 'months',
        data: values,
        borderColor: 'rgba(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.4)',
      },
    ],
  };

  return (
    <div className="chart__graph">
      {typeChart === 'line' && <Line height={120} data={chartData} />}

      {typeChart === 'bar' && <Bar height={120} data={chartData} />}

      {typeChart === 'radar' && <Radar height={120} data={chartData} />}
    </div>
  );
});
