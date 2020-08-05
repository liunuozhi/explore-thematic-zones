import { GeoJsonLayer } from "@deck.gl/layers";
import { minBy, maxBy, reverse } from "lodash";
import { scaleLinear, scaleThreshold } from "d3-scale";

export function createIndexLayer(data, opacity) {
  const minUniqueness = minBy(data.features, (o) => o.properties.uniqueness)
    .properties.uniqueness;
  const maxUniqueness = maxBy(data.features, (o) => o.properties.uniqueness)
    .properties.uniqueness;
  const uniquenessScaler = scaleLinear()
    .domain([minUniqueness, maxUniqueness])
    .range([0, 1]);

  const minDiversity = minBy(data.features, (o) => o.properties.diversity)
    .properties.diversity;
  const maxDiversity = maxBy(data.features, (o) => o.properties.diversity)
    .properties.diversity;
  const diversityScaler = scaleLinear()
    .domain([minDiversity, maxDiversity])
    .range([0, 1]);

  const COLORS = [
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
  ];
  const colorScaler = scaleThreshold()
    .domain([0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1])
    .range(reverse(COLORS));

  const layer = new GeoJsonLayer({
    id: "indicator-layer",
    data: data,
    opacity: opacity,
    pickable: true,
    stroked: false,
    filled: true,
    extruded: true,
    getFillColor: (f) => colorScaler(diversityScaler(f.properties.diversity)),
    getLineWidth: 1,
    elevationScale: 5000,
    getElevation: (f) => uniquenessScaler(f.properties.uniqueness),
  });

  return layer;
}
