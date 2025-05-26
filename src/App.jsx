import { useEffect } from "react";
import { fetchIrisDataSet } from "./api";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div>
      <Header />
      <Main />
    </div>
  );
}

export default App;