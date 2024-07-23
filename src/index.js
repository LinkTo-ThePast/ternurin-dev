import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/fonts/IBMPlex.css";
import { MainDesign } from "./components/MainDesign/MainDesign.js";
import { FlowerDesign } from "./components/FlowerDesign/FlowerDesign.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <MainDesign />
    <div className="card-question">
      <h5>¿Te gustaría salir conmigo?</h5>
    </div>
  </React.StrictMode>
);
