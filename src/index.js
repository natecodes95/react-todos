import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const DATA = [
  { id: "1", name: "Eat", completed: true },
  { id: "2", name: "Sleep", completed: false },
  { id: "3", name: "Repeat", completed: false },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>
);
