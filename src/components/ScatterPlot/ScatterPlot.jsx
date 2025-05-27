import * as d3 from 'd3'

function ScatterPlot({ data, xAxis, yAxis }) {
  const width = 800;
  const height = 800;

  const axisKeyConvert = {
    "sepal length": "sepalLength",
    "sepal width": "sepalWidth",
    "petal length": "petalLength",
    "petal width": "petalWidth",
  };

  const xMin = Math.round(Math.min(...data.map(d => d[axisKeyConvert[xAxis]])));
  const xMax = Math.round(Math.max(...data.map(d => d[axisKeyConvert[xAxis]])));
  const yMin = Math.round(Math.min(...data.map(d => d[axisKeyConvert[yAxis]])));
  const yMax = Math.round(Math.max(...data.map(d => d[axisKeyConvert[yAxis]])));

  const xScale = d3.scaleLinear().domain([xMin, xMax]).range([0, 500])
  const yScale = d3.scaleLinear().domain([yMin, yMax]).range([0, 500])


  return (
    <svg width={width} height={height}>
    </svg>
  )
}

export default ScatterPlot;