import React from "react";
import ReactDOM from "react-dom/client";
import Navigation from "./Routes";
import "./main.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <Navigation />
    </React.StrictMode>
  </BrowserRouter>
);
