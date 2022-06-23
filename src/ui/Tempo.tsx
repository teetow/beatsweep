import { useEffect, useState } from "react";
import { useKey } from "rooks";
import { styled } from "../../stitches.config";
import { average, msToBpm } from "../lib/utils";

type Props = {
  tempo: number;
  onSetTempo: (tempo: number) => void;
};

const trim = (vals: number[]) => {
  const avg = vals.length > 0 ? average(vals) : 0;

  vals = vals.filter((val) => Math.abs(val / avg - 1) < 0.5);

  if (vals.length > 11) {
    return vals.sort((a, b) => a - b).slice(1, vals.length - 2);
  }

  return vals;
};
const Trigger = styled("button", {});

const Tempo = ({ tempo, onSetTempo }: Props) => {
  const [deltas, setDeltas] = useState<number[]>([60000 / tempo]);
  const [lastHit, setLastHit] = useState(0);
  const [currentTempo, setTempo] = useState(tempo);

  useEffect(() => {
    console.log(deltas);
    setTempo((prev) => {
      const newTempo = Math.round(msToBpm(average(deltas)));

      // if (prev !== newTempo) {
      onSetTempo(newTempo);
      // }

      return newTempo;
    });
  }, [deltas]);

  const onKey = () => {
    const now = Date.now();

    if (lastHit > 0) {
      const delta = now - lastHit;
      if (delta >= 1000 * 2) {
        setDeltas([delta]);
      } else {
        setDeltas([...trim(deltas), now - lastHit]);
      }
    }
    setLastHit(now);
  };

  useKey("t", onKey, { eventTypes: ["keydown"] });
  return (
    <>
      <Trigger>👊</Trigger>
      {currentTempo}
    </>
  );
};

export default Tempo;
