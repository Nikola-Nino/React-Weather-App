import React, { useState } from "react";
import classes from "./Layout.module.css";
import axios from "axios";

const Layout = () => {
  const [data, setData] = useState({});
  const [location, setLocation] = useState();

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=9ed8c4da1364b870f2318c4cce9841ba`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      const fetchData = async () => {
        try {
          const response = await axios.get(url);
          setData(response.data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
      setLocation("");
    }
  };

  return (
    <div className={classes.container}>
      <input
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        placeholder="Enter the location"
        onKeyDown={searchLocation}
      />
      <div className={classes.top}>
        <div className={classes.location}>
          <p className={classes.bold}>{data.name}</p>
        </div>
        <div className={classes.temp}>
          {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
        </div>
        <div className={classes.description}>
          {data.weather ? (
            <p className={classes.bold}>{data.weather[0].main}</p>
          ) : null}
        </div>
      </div>

      <div className={classes.bottom}>
        <div className={classes.feels}>
          <p>Feels like</p>
          {data.main ? (
            <p className={classes.bold}>{data.main.feels_like.toFixed()}</p>
          ) : null}
        </div>
        <div className={classes.humidity}>
          <p>Humidity</p>
          {data.main ? (
            <p className={classes.bold}>{data.main.humidity}%</p>
          ) : null}
        </div>
        <div className={classes.wind}>
          <p className={classes.bold}>Wind</p>
          {data.wind ? (
            <p className={classes.bold}>{data.wind.speed.toFixed()}kmh</p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Layout;
