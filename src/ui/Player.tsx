import Sprite from "./Sprite";

type Props = {
  isBeat: boolean;
  period: number;
};

const Player = ({ isBeat, period }: Props) => {
  const transProps = [`rotate(${period * 360}deg)`].join(" ");

  return (
    <>
      <Sprite
        sprite="sphere"
        css={{
          fill: isBeat ? "$tomato9" : "$tomato7",
          transition: `fill ${isBeat ? "0" : "0.12s"}`,
        }}
      />
      <Sprite sprite="orb" rotation={period} css={{ position: "relative", left: "25%" }} />
    </>
  );
};

export default Player;
