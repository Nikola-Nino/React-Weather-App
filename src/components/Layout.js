import React from "react";
import classes from "./Layout.module.css"

const Layout = () => {
  return (
      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.location}>
            <p>Ohrid</p>
          </div>
          <div className={classes.temp}>
            <h1>Celsius</h1>
          </div>
          <div className={classes.description}>
            <p>Clear</p>
          </div>
        </div>

        <div className={classes.bottom}>
          <div className={classes.feels}>
            <p>65 celsius</p>
          </div>
          <div className={classes.humidity}>
            <p>Humidity</p>
          </div>
          <div className={classes.wind}>
            <p>Wind</p>
          </div>
        </div>
      </div>
  );
};

export default Layout;
