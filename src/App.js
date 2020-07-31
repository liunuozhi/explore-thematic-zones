import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import DeckGL from "@deck.gl/react";
import { StaticMap } from "react-map-gl";
import { Scrollama, Step } from "react-scrollama";

// introduction
const introduction = (
  <p>
    Aliquip aute aliquip do elit laborum ex nulla labore Lorem aliqua culpa
    fugiat. Non et labore aute magna Lorem. Veniam sit tempor ipsum occaecat
    elit cupidatat elit laboris aliqua. Id ut sunt id consectetur nostrud nulla
    duis quis proident incididunt aliqua est id enim. Aute irure pariatur irure
    anim consectetur consectetur in occaecat enim labore. Elit cillum non
    excepteur incididunt sit nostrud adipisicing aliquip occaecat in mollit. Do
    ipsum aliqua veniam esse esse id. Et nisi deserunt magna minim est sit
    laborum. Ut cillum Lorem ex reprehenderit. Proident cupidatat id labore
    reprehenderit excepteur deserunt id in. Culpa sit exercitation aute sit
    magna eiusmod consequat officia. Do labore commodo nisi do nostrud nostrud
    non nulla sunt duis veniam esse qui. Officia amet reprehenderit proident
    proident aliqua id. Voluptate laborum est esse in eu aliqua incididunt
    exercitation ea veniam Lorem. Nisi occaecat proident pariatur consequat.
    Tempor nostrud proident velit consectetur reprehenderit elit ad minim Lorem
    labore est est aliqua.
  </p>
);

function Map() {
  // deck map --------------
  // layers setting
  const layers = [];

  // default setting for deck gl
  const MAPBOX_TOKEN =
    "pk.eyJ1IjoibGl1bnVvemhpIiwiYSI6ImNrOWYzZjk4ZDA3bjEzbHRiY25uM2JlNTIifQ.7tW8LLkYKsI2wqjmezrKjw";
  const INITIAL_VIEW_STATE = {
    longitude: 103.737153,
    latitude: 1.356559,
    zoom: 11,
    pitch: 60,
    bearing: 25,
  };
  const deckMap = (
    <div>
      <DeckGL
        // width={1200}
        // height={800}
        layers={layers}
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
      >
        <StaticMap
          mapboxApiAccessToken={MAPBOX_TOKEN}
          mapStyle="mapbox://styles/liunuozhi/ckd5pt7p90u9q1ip5q4vepbzd"
        />
      </DeckGL>
    </div>
  );
  return deckMap;
}

function App() {
  // scrollama step index
  const [currentStepIndex, setCurrentStepIndex] = useState(null);
  return (
    <div className="App">
      <div className="map">
        <Map />
      </div>
      <div className="content">
        <Scrollama onStepEnter={(index) => setCurrentStepIndex(index)}>
          <Step data="1" key="1">
            <h1>Explore Singapore Thematic Zone</h1>
          </Step>
          <Step data="2" key="2">
            <div style={{ margin: "100vh 0" }}>{introduction}</div>
          </Step>
          <Step data="3" key="3">
            <div style={{ margin: "100vh 0" }}>{introduction}</div>
          </Step>
          <Step data="4" key="4">
            <div style={{ margin: "100vh 0" }}>{introduction}</div>
          </Step>
        </Scrollama>
      </div>
    </div>
  );
}

export default App;
