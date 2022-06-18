import { greenDark, tomatoDark } from "@radix-ui/colors";
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
  orb: ({ className, css, rotation, size = 72 }: SpriteProps) => (
    <SvgView
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      css={{
        ...css,
      }}
      style={
        {
          "--size": size,
          "--rotation": `${(((rotation || 0) + 3 / 8) % 1) * 360}deg`,
          transform: `rotate(var(--rotation))`,
        } as CSSProperties
      }
    >
      <Circle cx="24" cy="24" r="8.5" fill={greenDark.green11} fillOpacity="0.2" />
      <Circle cx="22" cy="22" r="2.5" fill={greenDark.green11} fillOpacity="0.3" />

      <Circle cx="14" cy="14" r="14" fill={greenDark.green11} fillOpacity="0.18" />
      <Circle cx="14" cy="14" r="8.5" stroke={greenDark.green11} strokeOpacity="0.5" />
      <Circle cx="14" cy="14" r="5" fill={greenDark.green11} />
      <Circle cx="14" cy="14" r="3" fill={greenDark.green12} />
    </SvgView>
  ),
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
      <Circle cx={size * 0.5} cy={size * 0.5} r={size * 0.4} fill={tomatoDark.tomato5} />
      <Circle cx={size * 0.5} cy={size * 0.5} r={size * 0.38} stroke="white" strokeOpacity="0.14" strokeWidth="4" />
      <Circle cx={size * 0.5} cy={size * 0.5} r={size * 0.36} stroke="white" strokeOpacity="0.36" />
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
