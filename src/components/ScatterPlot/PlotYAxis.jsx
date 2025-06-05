function PlotYAxis({ scale, rangeMax }) {
  const ticks = scale.ticks()
  const tickHeight = 10
  const tickX = 0
  return (
    <g>
      <line x1="0" y1="0" x2="0" y2={rangeMax} stroke="black" />
      {ticks.map((tick, i) => {
        const tickY = scale(tick)
        return (
          <g key={i}>
            <line x1={tickX} y1={tickY} x2={tickX - tickHeight} y2={tickY} stroke="black" />
            <text x={tickX - tickHeight} y={tickY} textAnchor="end" dominantBaseline="middle">{tick}</text>
          </g>
        )
      })}
    </g>
  )
}

export default PlotYAxis;