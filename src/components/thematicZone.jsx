import React, { Component } from "react";
import ThematicZoneMap from "./thematicZoneMap";
import TopicTermBarChart from "./topicTermBarChart";

function ThematicZone({ data }) {
  return (
    <div>
      <div className="title">
        <h1>Thematic Zones</h1>
      </div>
      <div className="map">
        <ThematicZoneMap data={data} height={700} />
      </div>
      <div className="bar">
        <TopicTermBarChart topic="TA-3" />
      </div>
    </div>
  );
}

export default ThematicZone;
