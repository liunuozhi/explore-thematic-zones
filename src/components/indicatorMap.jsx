import React, { useState } from "react";
import DeckGL from "@deck.gl/react";
import { StaticMap } from "react-map-gl";

import { createIndexLayer } from "./selectGeoJsonLayerCreator";

const INITIAL_VIEW_STATE = {
  longitude: 103.885261,
  latitude: 1.358412,
  zoom: 10.5,
  pitch: 60,
  bearing: 25,
};

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibGl1bnVvemhpIiwiYSI6ImNrOWYzZjk4ZDA3bjEzbHRiY25uM2JlNTIifQ.7tW8LLkYKsI2wqjmezrKjw";

function IndicatorMap({ data, opacity }) {
  const [windowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  return (
    <div>
      <div className="map" style={{ position: "relative" }}>
        <DeckGL
          width={windowSize.width}
          height={windowSize.height}
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
          layers={[createIndexLayer(data, opacity)]}
          getTooltip={({ object }) =>
            object && object.properties.value.toFixed(4)
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

export default IndicatorMap;
