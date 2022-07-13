import React from "react";
import classes from "./LineChart.module.css";
import {Row,Col} from 'react-bootstrap';

import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
  } from "chart.js";
  
  ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);
let dateTime= new Date().getMonth()
const data = {
  labels: [dateTime-5, dateTime-4, dateTime-3, dateTime-2, dateTime-1,dateTime],
  datasets: [
    {
      label: "First dataset",
      data: [33000, 53000, 85000, 41000, 44000, 65000],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    },
    // {
    //   label: "Second dataset",
    //   data: [33, 25, 35, 51, 54, 76],
    //   fill: false,
    //   borderColor: "#742774"
    // }
  ]
};

export default function LineChart() {
  return (
    <div className={classes.LineChart}>
      <Line data={data} />
      <br></br>
      <Row>
        <Col xs={6}>Highest:{Math.max.apply(null,data.datasets[0].data)} </Col>
        <Col xs={6}>Lowest: {Math.min.apply(null,data.datasets[0].data)}</Col>
      </Row>
      
    </div>
  );
}
