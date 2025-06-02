function switchVisibleSpecies(setVisibleSpecies, speciesName) {
  setVisibleSpecies(prevVisibleSpecies => ({
    ...prevVisibleSpecies,
    [speciesName]: !prevVisibleSpecies[speciesName]
  }));
}


function PlotLegend({ speciesList, color, visibleSpecies, setVisibleSpecies }) {
  const boxSize = 10
  return (
    <g transform="translate(400,50)">
      {speciesList.map((species, i) => {
        return (
          <g key={i} transform={`translate(20,${30 * i})`} onClick={() => switchVisibleSpecies(setVisibleSpecies, species)}>
            <rect x="0" y="0" width={boxSize} height={boxSize} fill={color[species]} />
            <text x="15" y={boxSize} >{species}</text>
          </g>
        )
      })}
    </g>
  )
}

export default PlotLegend;