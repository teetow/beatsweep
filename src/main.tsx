import WebRenderer from "@elemaudio/web-renderer";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

const ctx = new AudioContext();
const core = new WebRenderer();

(async function main() {
  let node = await core.initialize(ctx, {
    numberOfInputs: 0,
    numberOfOutputs: 1,
    outputChannelCount: [2],
  });

  node.connect(ctx.destination);
})();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
