function PlotPoints({ data, xScale, yScale, color }) {
  return (
    <g transform={`translate(50,450) scale(1,-1)`}>
      <line x1="-50" y1="0" x2="600" y2="0" stroke="white" />
      <line x1="0" y1="-50" x2="0" y2="600" stroke="white" />
      <line x1="400" y1="-100" x2="400" y2="800" stroke="white" />
      <line x1="-50" y1="400" x2="600" y2="400" stroke="white" />
      {data.map(({ x, y, species }, i) => {
        return (
          <circle key={i} cx={xScale(x)} cy={yScale(y)} r="5" fill={color[species]} />
        )
      })}
    </g>
  )
}

export default PlotPoints;