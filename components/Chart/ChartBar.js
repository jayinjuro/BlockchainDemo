import React from 'react';

import classes from './ChartBar.module.css';

const ChartBar = (props) => {
  let barFillHeight = '0%';

  return (
    <div className={classes.chartBar}>
      <div className={classes.chartBar__inner}>
        <div
          className={classes.chartBar__fill}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={classes.chartBar__label}>Price</div>
    </div>
  );
};

export default ChartBar;
