import { useEffect, useState } from "react";
import { fetchIrisDataSet } from "../api";
import DropdownSelector from "./DropdownSelector/DropdownSelector";
import ScatterPlot from "./ScatterPlot/ScatterPlot";
import Loading from "./Loading/Loading";
import { convertData } from "./convertData";

function Main() {
  const [irisData, setIrisData] = useState(null);
  const [xAxis, setXAxis] = useState("sepal length");
  const [yAxis, setYAxis] = useState("sepal width");
  const convertedData = convertData(irisData, xAxis, yAxis);

  useEffect(() => {
    fetchIrisDataSet().then((irisData) => {
      setIrisData(irisData);
    });
  }, []);

  if (irisData === null) {
    return (
      <Loading />
    )
  }
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
      />
    </section>
  );
}

export default Main;