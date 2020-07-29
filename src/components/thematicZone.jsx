import React, { Component, useState } from "react";
import ThematicZoneMap from "./thematicZoneMap";
import TopicTermBarChart from "./topicTermBarChart";
import Slider from "@material-ui/core/Slider";
import Checkbox from "@material-ui/core/Checkbox";
import Box from "@material-ui/core/Box";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./thematicZone.css";
import { uniq, filter } from "lodash";

function updateCheckBox(setCheckBoxState, checkList, topicList, setFilterMask) {
  const handleCheckBox = (event) => {
    const updatedCheckList = {
      ...checkList,
      [event.target.name]: event.target.checked,
    };
    setCheckBoxState(updatedCheckList);
    let updatedCheckArray = [];
    Object.keys(updatedCheckList).forEach((key) => {
      if (updatedCheckList[key]) {
        updatedCheckArray.push(key);
      }
    });
    setFilterMask(updatedCheckArray);
  };

  const checkBox = topicList.map((d) => (
    <FormControlLabel
      control={
        <Checkbox
          checked={checkList[d]}
          onChange={handleCheckBox}
          name={d}
          color="primary"
          className="each-check-box"
        />
      }
      label={
        <Box component="span" fontSize={12}>
          {d}
        </Box>
      }
      style={{ height: 10 }}
    />
  ));
  return checkBox;
}

function filterData(data, filterMask) {
  return {
    ...data,
    features: data.features.filter((d) => {
      const currentTopic = d.properties.topic;
      if (filterMask.includes(currentTopic)) {
        return d;
      }
    }),
  };
}

function ThematicZone({ data }) {
  // set defaut slider
  const [opacity, setSliderCaliberation] = useState(20);
  // extract topic as a list
  const topicList = uniq(data.features.map((d) => d.properties.topic)).sort();
  const [filterMask, setFilterMask] = useState(topicList);
  // check box
  let checkTopicList = {};
  topicList.forEach((d) => {
    checkTopicList[d] = true;
  });
  const [checkList, setCheckBoxState] = useState(checkTopicList);
  const checkBox = updateCheckBox(
    setCheckBoxState,
    checkList,
    topicList,
    setFilterMask
  );

  return (
    <div>
      <div className="map">
        <ThematicZoneMap
          data={filterData(data, filterMask)}
          height={900}
          opacity={opacity}
        />
      </div>

      <div className="side-bar">
        <div className="chart">
          <TopicTermBarChart topic="TA-3" height={500} width={400} />
        </div>
        <div className="map-controller">
          <div className="check-box">
            <FormGroup row>{checkBox}</FormGroup>
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
    </div>
  );
}

export default ThematicZone;
