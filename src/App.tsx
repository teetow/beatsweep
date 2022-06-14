import { useEffect, useState } from "react";
import { useRaf } from "rooks";
import { globalCss, styled } from "../stitches.config";
import "./App.css";
import Circle from "./ui/circle";

const bodyStyles = globalCss({
  html: {
    height: "100%",
  },
  body: {
    backgroundColor: "$tomato2",
    height: "100%",
  },
});

const bpm = 75;

const AppView = styled("div", {
  display: "grid",
  placeItems: "center",
  gridTemplateAreas: `"main"`,
  "&>*": {
    gridArea: "main",
  },
});

function App() {
  const [period, setPeriod] = useState(0);

  useRaf(() => {
    setPeriod((Date.now() / bpm / 10) % (Math.PI * 2));
  }, true);

  bodyStyles();

  return (
    <AppView>
      <Circle size={56} />
      <Circle size={16} color="$green11" period={period} />
    </AppView>
  );
}

export default App;
