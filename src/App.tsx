import { useState } from "react";
import { useDebounce, useKey, useRaf } from "rooks";
import { globalCss, styled } from "../stitches.config";
import tick from "./assets/tick.wav";
import { bpm, fps, frameLen } from "./config";
import useMetronome from "./lib/useMetronome";
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
  const val = period - Math.abs(value - 0.5);
  const isHit = val < threshold;
  return [val, isHit];
};

function App() {
  const [period, setPeriod] = useState(0);
  const [isBeat, setIsBeat] = useState(false);
  const [isHit, setIsHit] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [lastSync, setLastSync] = useState(Date.now);

  const senseVal = calcIsHit(period)[0];

  useRaf(() => {
    setPeriod(((Date.now() - lastSync) / tickInterval) % 1);
  }, true);

  const playTick = () => {
    if (!isMuted) {
      t.play();
    }
    setIsBeat(true);
    setLastSync(Date.now());
    globalThis.setTimeout(() => setIsBeat(false), frameLen * 8);
  };

  useMetronome({ bpm, onMetro: playTick });

  const onKey = () => {
    if (isHit === false && isBeat) {
      setIsHit(true);
      globalThis.setTimeout(() => setIsHit(false), frameLen * 8);
    }
  };

  useKey("f", onKey, { eventTypes: ["keydown"] });

  bodyStyles();

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
          setIsMuted(!isMuted);
        }}
        className="transport"
      />
      <PlayField
        css={{
          backgroundColor: isHit ? "$green10" : "$green4",
          transition: isHit ? "0" : "0.28s",
        }}
      >
        <Circle
          size={48}
          color={isBeat ? "$tomato9" : "$tomato7"}
          css={{ transition: `fill ${isBeat ? "0" : "0.12s"}` }}
        />
        <Circle size={16} rotRadius={32} color="$green11" period={period} />
      </PlayField>
    </AppView>
  );
}

export default App;
