import { el, NodeRepr_t } from "@elemaudio/core";
import WebAudioRenderer from "@elemaudio/web-renderer";
import { useEffect, useState } from "react";

const core = new WebAudioRenderer();

type Props = {
  nodes?: NodeRepr_t;
};

core.on("load", () => console.log("loaded"));

core.on("snapshot", () => {
  console.log("snap!");
});

const useElementary = ({ nodes }: Props) => {
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    setUpdated(false);
  }, [nodes]);

  useEffect(() => {
    if (!updated && nodes && core.__renderer) {
      //   console.log(nodes);

      const snapshotTrain = el.snapshot(el.train(1), nodes);
      //   core.render(el.add(nodes, snapshotTrain));
      core.render(el.phasor(220, el.train(1)));
      setUpdated(true);
    }
  }, [nodes, updated]);
};

export default useElementary;
