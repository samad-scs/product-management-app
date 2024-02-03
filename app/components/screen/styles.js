import {color} from '../../theme';
export const full = () => ({
  flexGrow: 1,
});
export const mainContainer = secondary => ({
  flex: 1,
  backgroundColor: secondary ? secondary : 'red',
});
export const container = (style, secondary) => [
  {
    flex: 1,
    backgroundColor: secondary ? secondary : color.whiteSmoke,
    overflow: 'hidden',
  },
  style,
];
