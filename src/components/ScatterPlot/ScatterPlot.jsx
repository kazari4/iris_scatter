function ScatterPlot({ data, xAxis, yAxis }) {
  const width = 800;
  const height = 800;

  const xKey = getAxisKey(xAxis);
  const yKey = getAxisKey(yAxis);

  const xMin = Math.round(Math.min(...data.map(d => d[xKey])));
  const xMax = Math.round(Math.max(...data.map(d => d[xKey])));
  const yMin = Math.round(Math.min(...data.map(d => d[yKey])));
  const yMax = Math.round(Math.max(...data.map(d => d[yKey])));

  const xScale = d3.scaleLinear().domain([xMin, xMax]).range([0, 500])
  const yScale = d3.scaleLinear().domain([yMin, yMax]).range([0, 500])


  return (
    <svg width={width} height={height}>
    </svg>
  )
}

export default ScatterPlot;