import { useEffect, useState } from "react";
import { fetchIrisDataSet } from "../api";
import DropdownSelector from "./DropdownSelector/DropdownSelector";
import ScatterPlot from "./ScatterPlot/ScatterPlot";
import Loading from "./Loading/Loading";

function Main() {
  const [irisData, setIrisData] = useState(null);
  const [xAxis, setXAxis] = useState("sepal length");
  const [yAxis, setYAxis] = useState("sepal width");

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
        data={irisData}
        xAxis={xAxis}
        yAxis={yAxis}
      />
    </section>
  );
}

export default Main;