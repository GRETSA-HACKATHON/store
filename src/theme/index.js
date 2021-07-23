import { colors } from './color';
import { fontFamily, fontSize } from './font';
import flexBox from './flexbox';

const theme = {
  backgroundRed: colors.red,
  textGreen: colors.green,
  textRed: colors.red,
  fontFamily,
  fontSize,
  ...flexBox,
};

export const themeLight = {
  backgroundColor: colors.white,
  primaryTextColor: colors.black,
  ...theme,
};

export const themeDark = {
  backgroundColor: colors.black,
  primaryTextColor: colors.white,
  ...theme,
};
