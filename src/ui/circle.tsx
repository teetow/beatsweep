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
  period?: number;
  color?: string;
};

const Circle = ({ size, period, color }: CircleProps) => {
  return (
    <SvgView
      css={{ size: size, fill: color }}
      // style={{ transform: translateProps(period || 0) } as CSSProperties}
      style={{ transform: `rotate(${period || 0 * 360}deg)` }}
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
