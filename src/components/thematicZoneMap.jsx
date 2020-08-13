import React, { useState, useContext } from "react";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";
import { uniq } from "lodash";
import { scaleOrdinal } from "d3-scale";
import ClickedTopicContext from "../clickedTopicContext";
import { subzone } from "../data/singapore_subzone";

const INITIAL_VIEW_STATE = {
  longitude: 103.885261,
  latitude: 1.358412,
  zoom: 10.5,
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

function addLayer(opacity, data, hoverTopic) {
  const colorScaler = createColorScalerbyTopic(data);
  const filterData =
    hoverTopic === null
      ? { ...data }
      : {
          ...data,
          features: data.features.filter(
            (d) => d.properties.topic === hoverTopic
          ),
        };

  // create new GeoJSON layer
  const layer = createGeoJSONLayer(filterData, colorScaler, opacity);
  return layer;
}

// create geojson for singapore subzones
function createColorScaler(data, selectKey) {
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
  const category = data.features.map((d) => d["properties"][selectKey]);
  const colorScale = scaleOrdinal().domain(uniq(category)).range(colors);
  return colorScale;
}

const subzoneColorScaler = createColorScaler(subzone, "SUBZONE_N");

const subzoneLayer = new GeoJsonLayer({
  id: "subzone-layer",
  data: subzone,
  opacity: 0.1,
  pickable: true,
  stroked: false,
  filled: true,
  lineWidthScale: 20,
  lineWidthMinPixels: 2,
  getFillColor: (f) => subzoneColorScaler(f.properties.SUBZONE_N),
  getLineWidth: 5,
});

function ThematicZoneMap({ data, opacity, step }) {
  const [hoverTopic, setHoverTopicState] = useState(null);
  const { setClickedTopic } = useContext(ClickedTopicContext);

  if (hoverTopic !== null) {
    setClickedTopic(hoverTopic);
  } else {
    setClickedTopic(null);
  }

  const [windowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const layers =
    step < 2
      ? [subzoneLayer, addLayer(opacity / 100, data, hoverTopic)]
      : [addLayer(opacity / 100, data, hoverTopic)];

  return (
    <div>
      <div className="map" style={{ position: "relative" }}>
        <DeckGL
          width={windowSize.width}
          height={windowSize.height}
          layers={layers}
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
          getTooltip={({ object }) => object && object.properties.topic}
          onClick={({ object }) =>
            object === undefined || object === null
              ? setHoverTopicState(null)
              : setHoverTopicState(object.properties.topic)
          }
        >
          <StaticMap
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/liunuozhi/ckd5pt7p90u9q1ip5q4vepbzd"
          />
        </DeckGL>
      </div>
    </div>
  );
}

export default ThematicZoneMap;
