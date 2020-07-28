import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ThematicZoneMap from "./components/thematicZoneMap";
import TopicTermBarChart from "./components/topicTermBarChart";
import ThematicZone from "./components/thematicZone";
import { ta_zone } from "./data/ta_zone.js";

function App() {
  return (
    <div className="App">
      <div>
        <ThematicZone data={ta_zone} />
      </div>
    </div>
  );
}

export default App;
