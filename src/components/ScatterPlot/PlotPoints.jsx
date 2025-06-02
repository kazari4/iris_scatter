function PlotPoints({ data, xScale, yScale, color, visibleSpecies }) {
  return (
    <g>
      {data.map(({ x, y, species }, i) => {
        if (visibleSpecies[species]) {
          return (
            <circle key={i} cx={xScale(x)} cy={yScale(y)} r="5" fill={color[species]} />
          )
        }
        return null
      })}
    </g>
  )
}

export default PlotPoints;