import * as d3 from "d3";

export function getColor(data) {
  const speciesList = Array.from(new Set(data.map(({ species }) => species)));
  const color = {}
  speciesList.forEach((species, i) => {
    color[species] = d3.schemeAccent[i]
  })
  return color
}