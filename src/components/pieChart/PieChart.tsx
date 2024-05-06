'use client';

import { ArcElement, Chart } from 'chart.js';
import { Pie } from 'react-chartjs-2';
Chart.register(ArcElement);

const PieChart = () => {
  const data = {
    labels: ['Blue', 'Green'],
    borderColor: 'none',
    weight: '2',
    datasets: [
      {
        data: [100, 400],
        backgroundColor: ['rgb(0, 204, 102)', 'rgb(0, 128, 255)'],
      },
    ],
  };

  const options = {
    animations: {
      duration: 1000,
      easing: 'easeOutQuart',
    },
  };

  return (
    <div>
      <Pie data={data} />
    </div>
  );
};

export default PieChart;
