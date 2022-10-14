import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";

const a = 5;
const element = (
  <>
    <h1>Hello React {a}</h1>
    <p>merhaba</p>
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
