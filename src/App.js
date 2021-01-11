import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Scrollama, Step } from "react-scrollama";
import { Helmet } from "react-helmet";
import Map from "./map.jsx";
import UserGuideHelper from "./helperIcon";
import ClickedTopicContext from "./clickedTopicContext";
import TopicTermBarChart from "./components/topicTermBarChart";
import { TA_TOP_BETA } from "./data/TripAdvisor_thematic_zone_top_10_beta";
import { IG_TOP_BETA } from "./data/Instagram_thematic_zone_top_10_beta";
import {
  ABSTRACT,
  CONTENT_FUNCTION_ZONE,
  CONTENT_PERCEPTION_ZONE,
  CONTENT_UNIQUENESS,
} from "./data/description";

function App() {
  // create context for selecting topic
  const [clickedTopic, setClickedTopic] = useState(null);

  // scrollama step index
  const [currentStepIndex, setCurrentStepIndex] = useState(1);
  return (
    <div className="App">
      <Helmet
        meta={[
          {
            property: "og:image",
            content:
              "https://raw.githubusercontent.com/liunuozhi/explore-thematic-zones/master/public/thumbnail.png",
          },
          {
            property: "og:title",
            content: "Explore Thematic Zones in Singapore",
          },
          {
            property: "og:url",
            content: "https://explore-singapore.netlify.app/",
          },
          {
            property: "og:description",
            content: "Explore Thematic Zones in Singapore",
          },
        ]}
      />

      <ClickedTopicContext.Provider value={{ clickedTopic, setClickedTopic }}>
        <div className="map">
          <Map step={currentStepIndex} />
        </div>

        <div className="question">
          <UserGuideHelper />
        </div>

        <div className="content">
          <Scrollama
            onStepEnter={(index) => setCurrentStepIndex(index)}
            offset={0.6}
          >
            <Step data={1} key={1}>
              <div style={{ marginTop: "1vh", padding: "50px 0 50px" }}>
                <h1 style={{ marginBottom: "0" }}>
                  Explore Singapore Thematic Zone
                </h1>
                <p style={{ marginBottom: "0" }}>
                  <strong>Author:</strong> Liu Nuozhi
                </p>
                <p>
                  <strong>Advisor:</strong> Immanuel Koh
                </p>
                {ABSTRACT}
              </div>
            </Step>

            <Step data={2} key={2}>
              <div style={{ margin: "100vh 0" }}>{CONTENT_FUNCTION_ZONE}</div>
            </Step>

            <Step data={3} key={3}>
              <div style={{ margin: "100vh 0" }}>
                <TopicTermBarChart
                  betaData={TA_TOP_BETA}
                  height={500}
                  width={500}
                  defaultTopic="TA-3"
                />
              </div>
            </Step>

            <Step data={4} key={4}>
              {CONTENT_PERCEPTION_ZONE}
            </Step>

            <Step data={5} key={5}>
              <div style={{ margin: "100vh 0" }}>
                <TopicTermBarChart
                  betaData={IG_TOP_BETA}
                  height={500}
                  width={500}
                  defaultTopic="IG-1"
                />
              </div>
            </Step>

            <Step data={6} key={6}>
              <div style={{ margin: "100vh 0" }}>{CONTENT_UNIQUENESS}</div>
            </Step>
          </Scrollama>
        </div>
      </ClickedTopicContext.Provider>
    </div>
  );
}

export default App;
