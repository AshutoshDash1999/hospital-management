import React from "react"
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'People coming to hospital per day',
    },
  },
};

const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export const data = {
  labels,
  datasets: [
    {
      label: 'No. Of People',
      data: [34,23,35,56,78,12,45],
      borderColor: '#f97316',
      backgroundColor: '#fed7aa',
    },
  ],
};

const DayWiseGraph = () => {
    return(
        <Line options={options} data={data}  />
    )
}

export default DayWiseGraph;