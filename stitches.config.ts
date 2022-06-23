// stitches.config.ts
import { createStitches } from "@stitches/react";
import { tomatoDark, greenDark, indigoDark, skyDark } from "@radix-ui/colors";

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme, config } = createStitches({
  theme: {
    colors: {
      ...tomatoDark,
      ...greenDark,
      ...skyDark,
      ...indigoDark,
    },
  },
  utils: {
    size: (value: number) => ({
      width: value,
      height: value,
    }),
  },
});
