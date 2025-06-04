import * as d3 from "d3";

export function getColor(speciesList) {
  const color = {}
  speciesList.forEach((species, i) => {
    color[species] = d3.schemeAccent[i]
  })
  return color
}