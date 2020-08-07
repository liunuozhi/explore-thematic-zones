import React, { useState } from "react";
import ThematicZoneMap from "./thematicZoneMap";
import Slider from "@material-ui/core/Slider";

function ThematicZone({ data, step }) {
  const [opacity, setOpacity] = useState(30);
  return (
    <div>
      <div className="map">
        <ThematicZoneMap data={data} opacity={opacity} step={step} />
      </div>

      <div className="side-bar">
        {/* <div className="chart">
          <TopicTermBarChart topic="TA-3" height={500} width={400} />
        </div> */}
        <div className="side-controller">
          <div className="slider">
            <Slider
              value={opacity}
              onChange={(e, val) => {
                setOpacity(val); // update the slider calibration
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
    </div>
  );
}

export default ThematicZone;
