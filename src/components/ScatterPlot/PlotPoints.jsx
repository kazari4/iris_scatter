function PlotPoints({ data, xScale, yScale, color }) {
  return (
    <g transform={`translate(50,550) scale(1,-1)`}>
      <line x1="-100" y1="0" x2="800" y2="0" stroke="white" />
      <line x1="0" y1="-100" x2="0" y2="800" stroke="white" />
      <line x1="500" y1="-100" x2="500" y2="800" stroke="white" />
      <line x1="-100" y1="500" x2="800" y2="500" stroke="white" />
      <circle cx="0" cy="0" r="5" fill="red" />
    </g>
  )
}

export default PlotPoints;