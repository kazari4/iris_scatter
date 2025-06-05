export async function fetchIrisData() {
  const response = await fetch(
    `https://s3-us-west-2.amazonaws.com/s.cdpn.io/2004014/iris.json`
  );
  const data = await response.json();
  const newData = data.map(({ sepalLength, sepalWidth, petalLength, petalWidth, species }, i) => ({
    sepalLength,
    sepalWidth,
    petalLength,
    petalWidth,
    species,
    id: i
  }))
  return newData;
}