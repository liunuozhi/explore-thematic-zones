import React, { useState, useCallback } from "react";
import DeckGL from "@deck.gl/react";
import { StaticMap, FlyToInterpolator } from "react-map-gl";
import { createIndexLayer } from "./selectGeoJsonLayerCreator";
import { Button } from "@material-ui/core";

const INITIAL_VIEW_STATE = {
  longitude: 103.805438,
  latitude: 1.361589,
  zoom: 11,
  pitch: 0,
  bearing: 0,
  transitionDuration: 1000,
  transitionInterpolator: new FlyToInterpolator(),
};

const MAPBOX_TOKEN =
  "pk.eyJ1IjoibGl1bnVvemhpIiwiYSI6ImNrOWYzZjk4ZDA3bjEzbHRiY25uM2JlNTIifQ.7tW8LLkYKsI2wqjmezrKjw";

function IndicatorMap({ data, opacity }) {
  const [windowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  const [initialView, setInitialView] = useState(INITIAL_VIEW_STATE);

  const display3D = useCallback(() => {
    setInitialView({
      longitude: 103.805438,
      latitude: 1.361589,
      zoom: 12,
      pitch: 60,
      bearing: 40,
      transitionDuration: 1000,
      transitionInterpolator: new FlyToInterpolator(),
    });
  }, []);

  const display2D = useCallback(() => {
    setInitialView(INITIAL_VIEW_STATE);
  }, []);

  return (
    <div>
      <div className="map" style={{ position: "relative" }}>
        <DeckGL
          width={windowSize.width}
          height={windowSize.height}
          initialViewState={initialView}
          controller={true}
          layers={[createIndexLayer(data, opacity)]}
          // getTooltip={({ object }) =>
          //   object && object.properties.uniqueness.toFixed(4)
          // }
        >
          <StaticMap
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/liunuozhi/ckd5pt7p90u9q1ip5q4vepbzd"
          />
        </DeckGL>
      </div>

      <div className="switch-view" style={{ backgroundColor: "white" }}>
        <Button onClick={display3D}>3D</Button>
        <Button onClick={display2D}>2D</Button>
      </div>
    </div>
  );
}

export default IndicatorMap;
