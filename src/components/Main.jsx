import { useEffect, useState } from "react";
import { fetchIrisData } from "../api";
import { convertData } from "./convertData";
import { getColor } from "./getColor";
import DropdownSelector from "./DropdownSelector/DropdownSelector";
import ScatterPlot from "./ScatterPlot/ScatterPlot";
import Loading from "./Loading/Loading";


function Main() {
  const [irisData, setIrisData] = useState(null);
  const [xAxis, setXAxis] = useState("sepal length");
  const [yAxis, setYAxis] = useState("sepal width");

  useEffect(() => {
    fetchIrisData().then((irisData) => {
      setIrisData(irisData);
    });
  }, []);

  if (irisData === null) {
    return (
      <Loading />
    )
  }

  const convertedData = convertData(irisData, xAxis, yAxis);
  const speciesList = Array.from(new Set(irisData.map(({ species }) => species)));
  const color = getColor(speciesList)

  return (
    <section className="section">
      <DropdownSelector
        xAxis={xAxis}
        yAxis={yAxis}
        setXAxis={setXAxis}
        setYAxis={setYAxis}
      />
      <ScatterPlot
        data={convertedData}
        species={speciesList}
        color={color}
      />
    </section>
  );
}

export default Main;