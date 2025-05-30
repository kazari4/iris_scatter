import { createScale } from "./createScale";
import { getColor } from "./getColor";
import PlotPoints from "./PlotPoints";

function ScatterPlot({ data }) {
  console.log(data)
  const width = 700;
  const height = 600;

  const range = [0, 500]

  const xScale = createScale(data, "x", range)
  const yScale = createScale(data, "y", range)

  const color = getColor(data)
  console.log(data)

  return (
    <svg width={width} height={height}>
      <PlotPoints data={data} xScale={xScale} yScale={yScale} color={color} />
    </svg>
  )
}

export default ScatterPlot;