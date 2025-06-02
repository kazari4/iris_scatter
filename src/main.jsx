import "bulma/css/bulma.css";
import "./styles/style.css";

import { createRoot } from "react-dom/client";
import App from "./App";

createRoot(document.querySelector("#content")).render(<App />);