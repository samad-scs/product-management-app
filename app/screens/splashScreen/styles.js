import {size} from '../../theme';

export const rootContainer = (bgColor, height) => ({
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#E0E0E0',
});
export const backgroundVideo = () => ({
  height: size.deviceHeight + size.moderateScale(100),
  width: size.deviceWidth,
});
