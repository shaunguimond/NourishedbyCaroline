import { darken, lighten } from "polished";

const dark = "#0f131a";
const dark0 = lighten(0.08, "#0f131a");
const dark2 = darken(0.04, "#0f131a");
const dark3 = darken(0.1, "#0f131a");
const light = "#ffffff";
const light2 = darken(0.02, "#ffffff");
const primary = "#a5be99";
const secondary = "#a5be99";
const lightGrey = "#cfcfd1";
const grey = "#9fa0a3";
const green = "#a5be99";
const purple = "#9725A3";
const accentDark = "#a5be99";
const accentLight = "#a5be99";

export const colors = {
  primary,
  secondary,
  light,
  dark,
  lightGrey,
  accentDark,
  green,
  purple,
  accent: accentLight,
  background: light,
  bgInverse: dark,
  text: dark0,
  textInverse: grey,
  white: "white",
  black: "black",
  brand: primary,
  mutted: lightGrey,
  grey: grey,
  border: lightGrey,
  headerBg: light,
  headerColor: grey,
  footerBg: light,
  footerColor: grey,
  cardBg: light2,
  highlightColor: accentDark,
  focusOutline: grey,
  mobileMenuBg: light,
  modes: {
    dark: {
      text: grey,
      background: dark,
      cardBg: dark2,
      headerBg: dark,
      footerBg: dark0,
      accent: accentDark,
      mobileMenuBg: dark0
    }
  }
};
