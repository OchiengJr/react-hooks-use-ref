import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

// Render the App component to the root element in the HTML
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
