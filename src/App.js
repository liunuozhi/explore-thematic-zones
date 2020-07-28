import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import ThematicZoneMap from "./components/thematicZoneMap";
import TopicTermBarChart from "./components/topicTermBarChart";
import { ta_zone } from "./data/ta_zone.js";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col">
            <ThematicZoneMap data={ta_zone} height={500} />
          </div>

          <div className="col bar-chart">
            <TopicTermBarChart topic="TA-3" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
