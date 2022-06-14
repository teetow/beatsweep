// stitches.config.ts
import { createStitches } from "@stitches/react";
import { tomatoDark, greenDark } from "@radix-ui/colors";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      ...tomatoDark,
      ...greenDark,
    },
  },
  utils: {
    size: (value: number) => ({
      width: value,
      height: value,
    }),
  },
});
