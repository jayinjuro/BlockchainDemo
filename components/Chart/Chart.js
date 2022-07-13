import React from 'react';
import {Line,Bar,Bubble} from 'react-chartjs-2';
import ChartBar from './ChartBar';
import classes from './Chart.module.css';

const Chart = (props) => {

  return (
    <div className={classes.chart}>
        <ChartBar></ChartBar>
    </div>
  );
};

export default Chart;
