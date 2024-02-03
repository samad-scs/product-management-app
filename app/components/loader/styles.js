import {size, color} from '../../theme/index';

export const container = () => ({
  zIndex: 444,
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.semiTransBlack,
  height: '100%',
  width: '100%',
  position: 'absolute',
  zIndex: 999999,
  transform: [{scale: 1.5}],
  flex: 1,
});

export const lottieImage = () => ({
  height: size.moderateScale(110),
  width: size.moderateScale(110),
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 999999,
});
export const imageStyle = () => ({
  height: size.moderateScale(35),
  width: size.moderateScale(35),
  resizeMode: 'contain',
  alignSelf: 'center',
});
export const imageOverlay = () => ({
  alignSelf: 'center',
  justifyContent: 'center',
  height: size.moderateScale(45),
  width: size.moderateScale(45),
  resizeMode: 'contain',
  borderRadius: size.moderateScale(50),
  backgroundColor: color.white,
  zIndex: 9999999,
});
