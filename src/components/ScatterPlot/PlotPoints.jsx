function PlotPoints({ data, xScale, yScale, color, visibleSpecies }) {
  return (
    <g>
      {data.map(({ x, y, species }, i) => {
        return (
          <circle
            key={i}
            cx={xScale(x)}
            cy={yScale(y)}
            r="5"
            fill={color[species]}
            style={{
              opacity: visibleSpecies[species] ? 1 : 0
            }}
          />
        )
      })}
    </g>
  )
}

export default PlotPoints;