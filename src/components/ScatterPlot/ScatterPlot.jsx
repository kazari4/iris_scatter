import { createScale } from "./createScale"

function ScatterPlot(data) {
  const width = 800;
  const height = 800;

  const xRange = [0, 500]
  const yRange = [500, 0]

  const xScale = createScale(data, x, xRange)
  const yScale = createScale(data, y, yRange)


  return (
    <svg width={width} height={height}>
    </svg>
  )
}

export default ScatterPlot;