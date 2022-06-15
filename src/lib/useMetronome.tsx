import { el } from "@elemaudio/core";
import useElementary from "./useElementary";
import { bpmToHz } from "./utils";

type Props = {
  bpm: number;
};

const useMetronome = ({ bpm }: Props) => {
  const pulse = el.train(bpmToHz(bpm));
  useElementary({ nodes: pulse });
};

export default useMetronome;
