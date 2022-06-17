import { el } from "@elemaudio/core";
import { useEffect } from "react";
import useCore from "./useCore";
import useElementary from "./useElementary";
import { bpmToHz, bpmToMs } from "./utils";

type Props = {
  bpm: number;
  onMetro: () => void;
};

let metroCallback = () => {};

const core = useCore();
core.on("metro", () => metroCallback());

const useMetronome = ({ bpm, onMetro }: Props) => {
  useEffect(() => {
    metroCallback = onMetro;
  }, [onMetro]);

  const interval = bpmToMs(bpm);
  let metro = el.metro({ interval });
  useElementary({ nodes: el.mul(metro, 0) });
};

export default useMetronome;
