import React from "react";
import ThematicZone from "./components/thematicZone";
import IndicatorMap from "./components/indicatorMap";
import { ig_zone } from "./data/ig_zone";
import { ta_zone } from "./data/ta_zone";
import { jsd } from "./data/jsd";
import { diversity } from "./data/diversity";

function selectDataByStep(step) {
  if (step === undefined || step === 1 || step === 2 || step === 3) {
    return <ThematicZone data={ta_zone} />;
  }
  if ((step >= 4) & (step < 6)) {
    return <ThematicZone data={ig_zone} />;
  }
  if ((step >= 6) & (step < 8)) {
    return <IndicatorMap data={jsd} opacity={0.5} />;
  }
  if (step >= 8) {
    return <IndicatorMap data={diversity} opacity={0.5} />;
  }
}

function Map({ step }) {
  return <div>{selectDataByStep(step.data)}</div>;
}

export default Map;
