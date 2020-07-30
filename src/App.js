import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ThematicZoneMap from "./components/thematicZoneMap";
import TopicTermBarChart from "./components/topicTermBarChart";
import ThematicZone from "./components/thematicZone";
import { ta_zone } from "./data/ta_zone.js";
import { TA_TOP_BETA } from "./data/TripAdvisor_thematic_zone_top_10_beta";

function App() {
  return (
    <div className="App">
      <div>
        <ThematicZone data={ta_zone} betaData={TA_TOP_BETA} barTopic="TA-3" />
      </div>
    </div>
  );
}

export default App;
