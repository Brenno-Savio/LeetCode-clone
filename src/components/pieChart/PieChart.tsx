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

  const options = {};

  return (
    <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
      <Pie
        data={data}
        width={50}
        height={50}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default PieChart;
