import { useState } from "react";
import { createScale } from "./createScale";
import { getColor } from "./getColor";
import PlotPoints from "./PlotPoints";
import PlotXAxis from "./PlotXAxis";
import PlotYAxis from "./PlotYAxis";
import PlotLegend from "./PlotLegend";

function ScatterPlot({ data, species }) {
  const width = 600;
  const height = 500;

  const rangeMax = 400
  const xRange = [0, rangeMax]
  const yRange = [rangeMax, 0]

  const xScale = createScale(data, "x", xRange)
  const yScale = createScale(data, "y", yRange)

  const color = getColor(data, species)

  return (
    <svg width={width} height={height}>
      <g transform="translate(50,50)">
        <PlotPoints data={data} xScale={xScale} yScale={yScale} color={color} />
        <PlotXAxis scale={xScale} rangeMax={rangeMax} />
        <PlotYAxis scale={yScale} rangeMax={rangeMax} />
        <PlotLegend />
      </g>
    </svg>
  )
}

export default ScatterPlot;