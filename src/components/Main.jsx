import { useEffect, useState } from "react";
import { fetchIrisData } from "../api";
import { convertData } from "./convertData";
import { getColor } from "./getColor";
import DropdownSelector from "./DropdownSelector/DropdownSelector";
import ScatterPlot from "./ScatterPlot/ScatterPlot";
import Loading from "./Loading/Loading";


function Main() {
  const [irisData, setIrisData] = useState(null);
  const [xProperty, setXProperty] = useState("sepal length");
  const [yProperty, setYProperty] = useState("sepal width");

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

  const convertedData = convertData(irisData, xProperty, yProperty);
  const speciesList = Array.from(new Set(irisData.map(({ species }) => species)));
  const color = getColor(speciesList)

  return (
    <section className="section">
      <DropdownSelector
        xProperty={xProperty}
        yProperty={yProperty}
        setXAxis={setXProperty}
        setYAxis={setYProperty}
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