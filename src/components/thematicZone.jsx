import React, { Component, useState } from "react";
import ThematicZoneMap from "./thematicZoneMap";
import TopicTermBarChart from "./topicTermBarChart";
import Slider from "@material-ui/core/Slider";
import "./thematicZone.css";

function ThematicZone({ data }) {
  // set defaut slider
  const [opacity, setSliderCaliberation] = useState(20);
  return (
    <div>
      <div className="title">
        <h1>Thematic Zones</h1>
      </div>
      <div className="map">
        <ThematicZoneMap data={data} height={800} opacity={opacity} />
      </div>

      <div className="side-bar">
        <div className="bar">
          <TopicTermBarChart topic="TA-3" height={500} width={400} />
        </div>

        <div className="slider">
          <Slider
            value={opacity}
            onChange={(e, val) => {
              setSliderCaliberation(val); // update the slider calibration
            }}
            aria-labelledby="continuous-slider"
            color="#000"
          />
        </div>

        <div className="">
          slider to change opacity, hold shift to change angle
        </div>
      </div>
    </div>
  );
}

export default ThematicZone;
