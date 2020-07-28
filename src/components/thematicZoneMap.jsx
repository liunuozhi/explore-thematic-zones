import React, { Component, useState } from "react";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";
import { uniq } from "lodash";
import { scaleOrdinal, scaleLinear } from "d3-scale";
import Slider from "@material-ui/core/Slider";
import "./thematicZoneMap.css";

const INITIAL_VIEW_STATE = {
  longitude: 103.801711,
  latitude: 1.349136,
  zoom: 10,
  pitch: 60,
  bearing: 25,
};

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibGl1bnVvemhpIiwiYSI6ImNrOWYzZjk4ZDA3bjEzbHRiY25uM2JlNTIifQ.7tW8LLkYKsI2wqjmezrKjw";

function createGeoJSONLayer(data, colorScaler, opacity) {
  return new GeoJsonLayer({
    id: "geojson-layer",
    data,
    opacity: opacity,
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    lineWidthScale: 20,
    lineWidthMinPixels: 2,
    getFillColor: (f) => colorScaler(f.properties.topic),
    getRadius: 100,
    getLineWidth: 1,
    elevationScale: 5000,
    getElevation: (f) => f.properties.gamma,
  });
}

function createColorScalerbyTopic(data) {
  const colors = [
    [65, 182, 196],
    [127, 205, 187],
    [199, 233, 180],
    [237, 248, 177],
    [255, 255, 204],
    [255, 237, 160],
    [254, 217, 118],
    [254, 178, 76],
    [253, 141, 60],
    [252, 78, 42],
    [227, 26, 28],
    [189, 0, 38],
    [128, 0, 38],
  ];
  const topicList = data.features.map((d) => d.properties.topic);
  const colorScale = scaleOrdinal().domain(uniq(topicList)).range(colors);
  return colorScale;
}

function addLayer(opacity, data) {
  const colorScaler = createColorScalerbyTopic(data);
  // create new GeoJSON layer
  const layer = createGeoJSONLayer(data, colorScaler, opacity);
  return layer;
}

function ThematicZoneMap({ data, height }) {
  const [opacity, setSliderCaliberation] = useState(50); // set defaut slider to 50
  const [layer, setLayer] = useState(addLayer(opacity / 100, data)); // set default opacity, divided by 100 to get percentage

  return (
    <div>
      <div className="map">
        <DeckGL
          // width={width}
          height={height}
          layers={[layer]}
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
        >
          <StaticMap
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/liunuozhi/ckd5pt7p90u9q1ip5q4vepbzd"
          />
        </DeckGL>
      </div>

      <div className="sideBar">
        <p>Opacity</p>
        <Slider
          value={opacity}
          onChange={(e, val) => {
            setSliderCaliberation(val); // update the slider calibration
            const sliderScaler = scaleLinear().domain([0, 100]).range([0, 1]);
            const scaledVal = sliderScaler(val);
            setLayer(addLayer(scaledVal, data));
          }}
          aria-labelledby="continuous-slider"
          color="#000"
        />
      </div>
    </div>
  );
}

export default ThematicZoneMap;
