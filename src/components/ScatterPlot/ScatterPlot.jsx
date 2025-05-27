import { getAxisKey } from "./getAxisKey"
import { createScale } from "./createScale"

function ScatterPlot({ data, xAxis, yAxis }) {
  const width = 800;
  const height = 800;

  const xKey = getAxisKey(xAxis);
  const yKey = getAxisKey(yAxis);

  const xRange = [0, 500]
  const yRange = [500, 0]

  const xScale = createScale(data, xKey, xRange)
  const yScale = createScale(data, yKey, yRange)


  return (
    <svg width={width} height={height}>
    </svg>
  )
}

export default ScatterPlot;