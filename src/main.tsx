import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import useCore from "./lib/useCore";
import Splash from "./ui/Splash";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const ctx = new AudioContext();
const core = useCore();

(async function main() {
  let node = await core.initialize(ctx, {
    numberOfInputs: 0,
    numberOfOutputs: 1,
    outputChannelCount: [2],
  });

  node.connect(ctx.destination);
})();

const renderApp = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

const tryElementary = () => {
  ctx.resume().then(() => renderApp());
};

core.on("load", () => {
  if (ctx.state !== "running") {
    root.render(<Splash onClick={tryElementary} />);
  } else {
    renderApp();
  }
});
