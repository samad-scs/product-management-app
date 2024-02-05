import {color, fontSize, fonts, size} from '../../../theme';

export const modalStyles = {
  height: size.deviceHeight,
};

export const modalContainer = {
  backgroundColor: color.whiteSmoke,
  borderRadius: size.moderateScale(20),
  paddingVertical: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(40),
  justifyContent: 'space-between',
  alignItems: 'center',
  shadowColor: '#171717ee',
  shadowOffset: {width: size.moderateScale(-1), height: size.moderateScale(2)},
  shadowOpacity: size.moderateScale(0.1),
  shadowRadius: size.moderateScale(1),
  elevation: size.moderateScale(10),
  gap: size.moderateScale(50),
};

export const modalProductNameText = {
  fontFamily: fonts.openSansBold,
  fontSize: fontSize.littleMedium,
  color: color.black,
};

export const inputQtyAmountText = {
  fontFamily: fonts.openSansBold,
  fontSize: fontSize.middleLarge,
  color: color.black,
};

export const modalAmountContainer = unit => ({
  width: '100%',
  flexDirection: 'row',
  justifyContent: unit ? 'space-around' : 'center',
  alignItems: 'center',
});

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
