import React from 'react';
import {Bar} from "react-chartjs-2"
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
function Barchart({chartData}:any) {
    return (
      <Bar data={chartData}/>
    );
}

export default Barchart;