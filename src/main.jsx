import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./assets/css/main.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>
);
