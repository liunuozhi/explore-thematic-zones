import React, { useContext } from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Bar } from "recharts";
import { maxBy } from "lodash";
import ClickedTopicContext from "../clickedTopicContext";

function TopicTermBarChart({ width, height, betaData }) {
  const { clickedTopic } = useContext(ClickedTopicContext);
  const topic = clickedTopic === null ? "TA-3" : clickedTopic;
  const maxBeta = maxBy(betaData, "beta");
  const data = betaData
    .filter((d) => d.topic === topic)
    .sort((a, b) => b.beta - a.beta);

  return (
    <div backgroundColor="red">
      <h1>{topic}</h1>
      <BarChart
        width={width}
        height={height}
        data={data}
        layout="vertical"
        margin={{ top: 20, right: 20, left: 50, bottom: 5 }}
      >
        <XAxis
          type="number"
          dataKey="beta"
          domain={[0, maxBeta]}
          tick={{ fill: "white", fontSize: 12 }}
        />
        <YAxis
          type="category"
          dataKey="term"
          tick={{ fill: "white", fontSize: 12 }}
        />
        <CartesianGrid stroke="#6f6f6f" strokeDasharray="2 2" />
        <Bar dataKey="beta" fill="white" barSize={10} />
      </BarChart>
    </div>
  );
}

export default TopicTermBarChart;
