function PlotPoints({ data, xScale, yScale, color }) {
  return (
    <g>
      {data.map(({ x, y, species }, i) => {
        return (
          <circle key={i} cx={xScale(x)} cy={yScale(y)} r="5" fill={color[species]} />
        )
      })}
    </g>
  )
}

export default PlotPoints;