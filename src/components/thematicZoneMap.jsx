import React, { Component } from "react";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";
import { uniq } from "lodash";
import { scaleOrdinal } from "d3-scale";

const INITIAL_VIEW_STATE = {
  longitude: 103.801711,
  latitude: 1.349136,
  zoom: 10,
  pitch: 60,
  bearing: 25,
};

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibGl1bnVvemhpIiwiYSI6ImNrOWYzZjk4ZDA3bjEzbHRiY25uM2JlNTIifQ.7tW8LLkYKsI2wqjmezrKjw";

function ThematicZoneMap({ data, height }) {
  // extract topic of thematic zones as color scaler
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

  const layer = new GeoJsonLayer({
    id: "geojson-layer",
    data,
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    lineWidthScale: 20,
    lineWidthMinPixels: 2,
    getFillColor: (f) => colorScale(f.properties.topic),
    getRadius: 100,
    getLineWidth: 1,
    elevationScale: 5000,
    getElevation: (f) => f.properties.gamma,
  });

  return (
    <DeckGL
      // width={width}
      height={height}
      layers={[layer]}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
    >
      <StaticMap
        mapboxApiAccessToken={MAPBOX_TOKEN}
        mapStyle="mapbox://styles/liunuozhi/ck9f3xv0809k01it36p6ci0e2"
      />
    </DeckGL>
  );
}

export default ThematicZoneMap;
