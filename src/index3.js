import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
var page = (
  <div>
    <h1> course name </h1>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>Bootstrap</li>
      <li>javascript</li>
      <li>node js</li>
      <li>react</li>
    </ul>
  <div>
    <h1> course name </h1>
    <ol>
      <li>HTML</li>
      <li>CSS</li>
      <li>Bootstrap</li>
      <li>javascript</li>
      <li>node js</li>
      <li>react</li>
    </ol>
  </div>
  </div>
);

root.render(page);
