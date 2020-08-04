import { GeoJsonLayer } from "@deck.gl/layers";
import { minBy, maxBy } from "lodash";
import { scaleLinear, scaleThreshold } from "d3-scale";

export function createIndexLayer(data, opacity) {
  const minVal = minBy(data.features, "properties.value").properties.value;
  const maxVal = maxBy(data.features, "properties.value").properties.value;
  const scaler = scaleLinear().domain([minVal, maxVal]).range([0, 1]);
  const colorScaler = scaleThreshold()
    .domain([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1])
    .range([
      [65, 182, 196],
      [127, 205, 187],
      [199, 233, 180],
      [237, 248, 177],
      [255, 255, 204],
      // zero
      [253, 141, 60],
      [252, 78, 42],
      [227, 26, 28],
      [189, 0, 38],
      [128, 0, 38],
    ]);

  const layer = new GeoJsonLayer({
    id: "indicator-layer",
    data: data,
    opacity: opacity,
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    getFillColor: (f) => colorScaler(scaler(f.properties.value)),
    getLineWidth: 1,
    elevationScale: 5000,
    getElevation: (f) => scaler(f.properties.value),
  });

  return layer;
}
