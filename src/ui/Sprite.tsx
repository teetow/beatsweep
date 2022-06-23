import { greenDark, indigoDark } from "@radix-ui/colors";
import { CSSProperties } from "@stitches/react";
import { styled } from "../../stitches.config";

const SvgView = styled("svg", {
  viewBox: "0 0 48 48",
});

const Circle = styled("circle", {
  transition: "inherit",
});

type SpriteProps = {
  className?: string;
  css?: CSSProperties;
  rotation?: number;
  size?: number;
};

const sprites = {
  orb: ({ className, css, rotation, size = 36 }: SpriteProps) => {
    const center = size * 0.5;
    return (
      <SvgView
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        css={{
          ...css,
          transformOrigin: "0% 50%",
        }}
        style={
          {
            "--size": size,
            "--rotation": `${(rotation || 0) * 360}deg`,
            transform: `rotate(var(--rotation))`,
          } as CSSProperties
        }
      >
        <Circle cx={center + 4} cy={center} r={size * 0.14} fill={greenDark.green11} fillOpacity="0.18" />
        <Circle cx={center + 4} cy={center} r={size * 0.85} stroke={greenDark.green11} strokeOpacity="0.5" />
        <Circle cx={center + 4} cy={center} r={size * 0.05} fill={greenDark.green11} />
        <Circle cx={center + 4} cy={center} r={size * 0.03} fill={greenDark.green12} />

        <Circle cx={center * 0.60} cy={center} r={size * 0.08} fill="white" fillOpacity="0.1" />
        <Circle cx={center * 0.63} cy={center} r={size * 0.03} fill="white" fillOpacity="0.3" />
        <Circle cx={center * 0.66} cy={center} r={size * 0.01} fill="white" fillOpacity="0.7" />
      </SvgView>
    );
  },
  sphere: ({ className, css, size = 72 }: SpriteProps) => (
    <SvgView
      width={72}
      height={72}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      css={{ ...css }}
    >
      <Circle cx={size * 0.5} cy={size * 0.5} r={size * 0.2} />
      <Circle
        cx={size * 0.5}
        cy={size * 0.5}
        r={size * 0.2 - 1.5}
        fill="none"
        stroke="white"
        strokeOpacity="0.1"
        strokeWidth="3"
      />
      <Circle
        cx={size * 0.5}
        cy={size * 0.5}
        r={size * 0.2 - 0.3}
        fill="none"
        stroke="white"
        strokeOpacity="0.3"
        strokeWidth="0.6"
      />
    </SvgView>
  ),
};

type Props = {
  sprite: keyof typeof sprites;
  css?: CSSProperties;
  className?: string;
  rotation?: number;
};

export default ({ css, className, sprite, rotation }: Props) => {
  const Sprite = sprites[sprite];
  return <Sprite css={{ ...css }} className={className} rotation={rotation} />;
};
