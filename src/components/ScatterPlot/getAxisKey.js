const axisKeyConvert = {
  "sepal length": "sepalLength",
  "sepal width": "sepalWidth",
  "petal length": "petalLength",
  "petal width": "petalWidth",
};

export function getAxisKey(label) {
  return axisKeyMap[label];
}