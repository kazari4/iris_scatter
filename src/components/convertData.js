export function convertData(data, xLabel, yLabel) {
  if (!data) return;

  const axisKeyConvert = {
    "sepal length": "sepalLength",
    "sepal width": "sepalWidth",
    "petal length": "petalLength",
    "petal width": "petalWidth",
  };

  const xKey = axisKeyConvert[xLabel];
  const yKey = axisKeyConvert[yLabel];

  return data.map((d) => ({
    x: d[xKey],
    y: d[yKey],
    species: d.species,
  }));
}
