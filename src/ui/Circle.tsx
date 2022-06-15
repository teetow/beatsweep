import { CSSProperties, ReactNode } from "react";
import { styled } from "../../stitches.config";

const p2c = (a: number, r: number) => {
  //x = r × cos( θ ) y = r × sin( θ )
  return [r * Math.cos(a), r * Math.sin(a)];
};

const translateProps = (period: number) =>
  `translate(${p2c(period, 16)
    .map((x) => `${x}px`)
    .join(", ")})`;

const SvgView = styled("svg", {
  viewBox: "0 0 48 48",
});

const CircleView = styled("circle", {
  fill: "$tomato11",
});

type CircleProps = {
  size: number;

  color?: string;
  period?: number;
  rotRadius?: number;
};

const Circle = ({ size, color, period = 0, rotRadius = 0 }: CircleProps) => {
  const transProps = [
    `translateX(-${rotRadius}px)`,
    `rotate(${period * 360}deg)`,
  ].join(" ");
  return (
    <SvgView
      css={{
        size: size,
        fill: color,
        transformOrigin: `calc(50% + ${rotRadius}px) 50%`,
      }}
      style={{ transform: transProps }}
    >
      <CircleView
        className="circle"
        r={size * 0.5}
        cx={size * 0.5}
        cy={size * 0.5}
        css={{ fill: color }}
      />
    </SvgView>
  );
};

// export default styled(Circle);
export default Circle;
