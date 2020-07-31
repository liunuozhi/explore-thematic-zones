import React from "react";
import ThematicZone from "./components/thematicZone";
import { ig_zone } from "./data/ig_zone";
import { ta_zone } from "./data/ta_zone";

function selectDataByStep(step) {
  if (step === 1) {
    return ig_zone;
  }
  if (step === 2) {
    return ta_zone;
  }
  if (step === 3) {
    return ig_zone;
  }
  if (step === 4) {
    return ta_zone;
  } else {
    return ig_zone;
  }
}

function Map({ step = 1 }) {
  // default setting for deck gl
  console.log(step);
  return (
    <div>
      <ThematicZone data={selectDataByStep(step.data)} />
    </div>
  );
}

export default Map;
