import { el } from "@elemaudio/core";
import { useEffect } from "react";
import useCore from "./useCore";
import useElementary from "./useElementary";
import { bpmToHz, bpmToMs } from "./utils";

type Props = {
  bpm: number;
  subdiv: number;
  measures: number;
  onMetro: () => void;
};

let metroCallback = () => {};

const core = useCore();
core.on("metro", () => metroCallback());

const useMetronome = ({ bpm, subdiv = 4, measures = 2, onMetro }: Props) => {
  useEffect(() => {
    metroCallback = onMetro;
  }, [onMetro]);

  const interval = bpmToMs(bpm / measures / subdiv);
  let metro = el.metro({ interval });
  useElementary({ nodes: el.mul(metro, 0) });
};

export default useMetronome;
