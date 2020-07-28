import React, { Component } from "react";
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  Legend,
} from "recharts";
import { TA_TOP_BETA } from "../data/TripAdvisor_thematic_zone_top_10_beta";

// We'll use some mock data from `@vx/mock-data` for this.
const myData = TA_TOP_BETA;

function TopicTermBarChart({ topic }) {
  const data = myData
    .filter((d) => d.topic === topic)
    .sort((a, b) => b.beta - a.beta);

  return (
    <div backgroundColor="red">
      <BarChart
        width={500}
        height={500}
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 20, left: 50, bottom: 5 }}
      >
        <XAxis
          type="number"
          dataKey="beta"
          domain={[0, 1]}
          tick={{ fill: "white", fontSize: 12 }}
        />
        <YAxis
          type="category"
          dataKey="term"
          tick={{ fill: "white", fontSize: 12 }}
        />
        <CartesianGrid stroke="#6f6f6f" strokeDasharray="2 2" />
        <Tooltip cursor={false} labelStyle={{ color: "black" }} />
        <Bar dataKey="beta" fill="white" barSize={10} />
      </BarChart>
    </div>
  );
}

export default TopicTermBarChart;