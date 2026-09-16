import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AppProvider } from "./context/AppContext";

// Temporarily enable debug CSS to reveal layout (will revert later)
// Debug stylesheet lives in the project-level `styles/` folder
import "../styles/debug.css";

ReactDOM.createRoot(document.getElementById("root")).render(

  <React.StrictMode>

    <BrowserRouter>

      <AppProvider>

        <App />

      </AppProvider>

    </BrowserRouter>

  </React.StrictMode>

);