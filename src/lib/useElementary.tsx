import { el, NodeRepr_t } from "@elemaudio/core";
import WebAudioRenderer from "@elemaudio/web-renderer";
import { useEffect, useState } from "react";
import useCore from "./useCore";

type Props = {
  nodes?: NodeRepr_t;
};

const core = useCore();

core.on("load", () => console.log("useElementary onload"));

core.on("snapshot", () => {
  console.log("snap!");
});

const useElementary = ({ nodes }: Props) => {
  const core = useCore();

  useEffect(() => {
    if (nodes && core.__renderer) {
      const snapshotTrain = el.mul(el.snapshot(el.train(1), nodes), 0);
      core.render(el.add(nodes, snapshotTrain));
    }
  }, [nodes]);
};

export default useElementary;
