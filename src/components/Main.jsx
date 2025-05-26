import { useEffect, useState } from "react";
import { fetchIrisDataSet } from "../api";
import DropdownSelector from "./DropdownSelector/DropdownSelector";
import ScatterPlot from "./ScatterPlot/ScatterPlot";
import Loading from "./Loading/Loading";

function Main() {
  const [irisData, setIrisData] = useState(null);
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
      <DropdownSelector />
      <ScatterPlot data={irisData} />
    </section>
  );
}

export default Main;