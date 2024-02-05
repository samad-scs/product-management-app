import {color, size} from '../../../theme';

export const modalStyles = {
  height: size.deviceHeight,
};

export const modalContainer = {
  backgroundColor: color.whiteSmoke,
  borderRadius: size.moderateScale(20),
  paddingVertical: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(40),
  justifyContent: 'space-evenly',
  alignItems: 'center',
  shadowColor: '#171717ee',
  shadowOffset: {width: size.moderateScale(-1), height: size.moderateScale(2)},
  shadowOpacity: size.moderateScale(0.1),
  shadowRadius: size.moderateScale(1),
  elevation: size.moderateScale(10),
  gap: size.moderateScale(20),
};

export const modalButtonsContainer = {
  width: '100%',
  gap: size.moderateScale(10),
};

export const closeBtn = {
  borderRadius: size.moderateScale(10),
  backgroundColor: color.whiteSmoke,
  paddingVertical: size.moderateScale(12),
  paddingHorizontal: size.moderateScale(10),
};
