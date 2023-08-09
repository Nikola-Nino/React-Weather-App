import React from "react";
import classes from "./Layout.module.css";

const Layout = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.location}>
          <p className={classes.bold}>Ohrid</p>
        </div>
        <div className={classes.temp}>
          <h1>Celsius</h1>
        </div>
        <div className={classes.description}>
          <p className={classes.bold}>Clear</p>
        </div>
      </div>

      <div className={classes.bottom}>
        <div className={classes.feels}>
          <p className={classes.bold}>Feels like</p>
        </div>
        <div className={classes.humidity}>
          <p className={classes.bold}>Humidity</p>
        </div>
        <div className={classes.wind}>
          <p className={classes.bold}>Wind</p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
