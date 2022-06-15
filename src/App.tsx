import { NodeRepr_t } from "@elemaudio/core";
import { useEffect, useState } from "react";
import { useDebounce, useKey, useRaf } from "rooks";
import { globalCss, styled } from "../stitches.config";
import "./App.css";
import tick from "./assets/tick.wav";
import useElementary from "./lib/useElementary";
import useMetronome from "./lib/useMetronome";
import { bpmToHz } from "./lib/utils";
import Circle from "./ui/Circle";
import Debug from "./ui/Debug";
import Transport from "./ui/Transport";

const bodyStyles = globalCss({
  html: {
    height: "100%",
  },
  body: {
    backgroundColor: "$tomato2",
    height: "100%",
    display: "grid",
    justifyContent: "stretch",
  },
  "#root": {
    padding: "1em",
  },
});

const fps = 60;
const frameLen = 8;
const bpm = 75;
const tickInterval = 60000 / bpm;

const PlayField = styled("div", {
  display: "grid",
  placeItems: "center",
  gridTemplateAreas: `"debug"
  "main"`,
  "&>*": {
    gridArea: "main",
  },
});

const t = new Audio(tick);

const AppView = styled("div", {
  display: "grid",
  height: "100%",
  placeItems: "center",
  gridTemplateAreas: `"debug" "main"  "transport"`,
  gridTemplateRows: "auto 1fr",
  "& > *": {
    gridArea: "main",
  },
  "& > .debug": {
    gridArea: "debug",
    justifySelf: "stretch",
    textAlign: "center",
  },
  "& > .transport": {
    gridArea: "transport",
  },
});

const calcIsHit = (
  value: number,
  period = 0.5,
  threshold = 1 / fps
): [number, boolean] => {
  // console.log(value, period, threshold);
  const val = period - Math.abs(value - 0.5);
  const isHit = val < threshold;
  // console.log(val, isHit, isHit ? "color: green" : "");
  return [val, isHit];
  // return Math.abs((value - 0.5) % period) < threshold;
};

// Math.abs(period % 0.5) <= 1 / fps

function App() {
  const [period, setPeriod] = useState(0);
  const [isBeat, setIsBeat] = useState(false);
  const [isHit, setIsHit] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const senseVal = calcIsHit(period)[0];

  useMetronome({ bpm });

  useRaf(() => {
    setPeriod((Date.now() / tickInterval) % 1);
  }, true);

  useEffect(() => {
    if (isBeat === false && calcIsHit(period)[1]) {
      setIsBeat(true);
      globalThis.setTimeout(() => setIsBeat(false), frameLen);
    }
  }, [period]);

  const playTick = useDebounce(() => t.play(), frameLen, { leading: true });

  useEffect(() => {
    if (isBeat && hasInteracted && !isMuted) {
      playTick();
    }
  }, [isBeat]);

  const onKey = () => {
    if (!hasInteracted) setHasInteracted(true);

    if (isHit === false && isBeat) {
      setIsHit(true);
      globalThis.setTimeout(() => setIsHit(false), frameLen);
    }
  };

  useKey("f", onKey, { eventTypes: ["keydown"] });

  bodyStyles();

  // console.log(period.toPrecision(1));

  return (
    <AppView>
      <Debug className="debug">
        <div>{(Math.ceil(period * 1000) / 1000).toFixed(3)}</div>
        <div>{((senseVal * 1000) / 1000).toFixed(3)}</div>
      </Debug>
      <Transport
        period={period}
        isMuted={isMuted}
        onToggleMuted={() => {
          setHasInteracted(true);
          setIsMuted(!isMuted);
        }}
        className="transport"
      />
      <PlayField css={{ backgroundColor: isHit ? "$tomato4" : "$green10" }}>
        <Circle size={48} color={isBeat ? "$tomato8" : "$tomato7"} />
        <Circle size={16} rotRadius={32} color="$green11" period={period} />
      </PlayField>
    </AppView>
  );
}

export default App;
