import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CodeContext } from "./context/CodeContext.jsx";

createRoot(document.getElementById("root")).render(
  <CodeContext>
    <App />
  </CodeContext>
);
