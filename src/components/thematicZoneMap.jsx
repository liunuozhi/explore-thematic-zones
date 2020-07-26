import React, { Component } from "react";
import DeckGL from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";

const INITIAL_VIEW_STATE = {
  longitude: 103.801711,
  latitude: 1.349136,
  zoom: 10,
  pitch: 0,
  bearing: 0,
};

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibGl1bnVvemhpIiwiYSI6ImNrOWYzZjk4ZDA3bjEzbHRiY25uM2JlNTIifQ.7tW8LLkYKsI2wqjmezrKjw";

function ThematicZoneMap({ data, height }) {
  const layer = new GeoJsonLayer({
    id: "geojson-layer",
    data,
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    lineWidthScale: 20,
    lineWidthMinPixels: 2,
    getFillColor: [160, 160, 180, 200],
    getRadius: 100,
    getLineWidth: 1,
    getElevation: 30,
  });

  return (
    <DeckGL
      // width={width}
      height={height}
      layers={[layer]}
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
    >
      <StaticMap mapboxApiAccessToken={MAPBOX_TOKEN} />
    </DeckGL>
  );
}

export default ThematicZoneMap;
