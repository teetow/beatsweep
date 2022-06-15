import { useRef } from "react";
import { useEventListenerRef } from "rooks";
import { styled } from "../../stitches.config";

const Container = styled("div", {});

const PauseButton = styled("button", {});

type TransportProps = {
  period: number;
  isMuted: boolean;
  onToggleMuted: () => void;
  className?: string;
};

const Transport = ({
  period,
  isMuted,
  onToggleMuted,
  className,
}: TransportProps) => {
  const pauseRef = useEventListenerRef("click", () => onToggleMuted?.());

  return (
    <Container className={className}>
      <PauseButton ref={pauseRef}>{isMuted ? "🔈" : "🔊"}</PauseButton>
    </Container>
  );
};

const Component = styled(Transport, {});

export default Component;
