export function convertData(data, xProperty, yProperty) {
  if (!data) return;

  const axisKeyConvert = {
    "sepal length": "sepalLength",
    "sepal width": "sepalWidth",
    "petal length": "petalLength",
    "petal width": "petalWidth",
  };

  const xKey = axisKeyConvert[xProperty];
  const yKey = axisKeyConvert[yProperty];

  return data.map((d) => ({
    x: d[xKey],
    y: d[yKey],
    species: d.species,
  }));
}
