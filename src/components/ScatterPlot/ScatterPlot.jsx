import { createScale } from "./createScale";
import { getColor } from "./getColor";
import PlotPoints from "./PlotPoints";

function ScatterPlot({ data }) {
  const width = 800;
  const height = 800;

  const xRange = [0, 500]
  const yRange = [500, 0]

  const xScale = createScale(data, " x", xRange)
  const yScale = createScale(data, "y", yRange)

  const color = getColor(data = { data })

  return (
    <svg width={width} height={height}>
      <PlotPoints data={data} xScale={xScale} yScale={yScale} color={color} width={width} height={height} />
    </svg>
  )
}

export default ScatterPlot;