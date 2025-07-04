import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./utils/i18n/i18n.js";
import App from "./App.jsx";
import "./styles/index.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { DarkModeProvider } from "./context/DarkModeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </StrictMode>
);