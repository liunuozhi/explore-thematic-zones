import React from "react";
import ThematicZone from "./components/thematicZone";
import IndicatorMap from "./components/indicatorMap";
import { ig_zone } from "./data/ig_zone";
import { ta_zone } from "./data/ta_zone";
import { uniqueness } from "./data/uniqueness";

function selectDataByStep(step) {
  if (step === undefined || step === 1 || step === 2 || step === 3) {
    return <ThematicZone data={ta_zone} step={step} />;
  }
  if ((step >= 4) & (step < 6)) {
    return <ThematicZone data={ig_zone} step={step} />;
  }
  if (step >= 6) {
    return <IndicatorMap data={uniqueness} opacity={0.5} />;
  }
}

function Map({ step }) {
  return <div>{selectDataByStep(step.data)}</div>;
}

export default Map;
