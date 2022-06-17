import { NodeRepr_t } from "@elemaudio/core";
import { el } from "@elemaudio/core";
import useElementary from "./useElementary";
import { bpmToHz } from "./utils";

type Props = {
  bpm: number;
};

const useMetronome = ({ bpm }: Props) => {
  let out: NodeRepr_t  = el.metro({ interval: bpmToHz(bpm) });
  out = el.add(out, el.snapshot(out));
  useElementary({ nodes: el.mul(pulse, 0) });
};

export default useMetronome;
