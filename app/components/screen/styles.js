import {color} from '../../theme/index';
export const full = () => ({
  flexGrow: 1,
});
export const mainContainer = secondary => ({
  flex: 1,
  backgroundColor: secondary ? secondary : color.white,
});
export const container = (style, secondary) => [
  {
    flex: 1,
    backgroundColor: secondary ? secondary : color.white,
    overflow: 'hidden',
  },
  style,
];
