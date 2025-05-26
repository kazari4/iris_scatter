import { useEffect, useState } from "react";
import { fetchIrisDataSet } from "../api";
import DropdownSelector from "./DropdownSelector/DropdownSelector";
import ScatterPlot from "./ScatterPlot/ScatterPlot";

function Main() {
  const [irisData, setIrisData] = useState(null);
  useEffect(() => {
    fetchIrisDataSet().then((irisData) => {
      setIrisData(irisData);
    });
  }, []);
  return (
    <section className="section">
      <DropdownSelector />
      <ScatterPlot />
    </section>
  );
}

export default Main;