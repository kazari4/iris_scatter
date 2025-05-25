import Header from "./components/Header";
import DropdownSelector from "./components/DropdownSelector";
import ScatterPlot from "./components/ScatterPlot";

function App() {
  return (
    <div>
      <Header />
      <main>
        <div className="section">
          <DropdownSelector />
          <ScatterPlot />
        </div>
      </main>
    </div>
  );
}

export default App;