import {color, fontSize, fonts, size} from '../../theme';

export const rootContainer = {
  flex: 1,
  backgroundColor: color.white,
};

export const itemContainer = {
  flexGrow: 1,
  marginHorizontal: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(12),
  paddingVertical: size.moderateScale(40),
  paddingTop: size.moderateScale(20),
};

export const cartCardContainer = {
  backgroundColor: color.white,
  borderRadius: size.moderateScale(15),
  // borderWidth: 2,
  // borderStyle: 'dotted',
  // borderColor: color.semiTransBlack,
  paddingHorizontal: size.moderateScale(12),
  paddingVertical: size.moderateScale(20),
  shadowColor: '#171717ee',
  shadowOffset: {width: size.moderateScale(-1), height: size.moderateScale(2)},
  shadowOpacity: size.moderateScale(0.1),
  shadowRadius: size.moderateScale(1),
  elevation: size.moderateScale(5),
  gap: size.moderateScale(10),
};

export const cartItemsContainer = {
  flexGrow: 1,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingVertical: size.moderateScale(5),
  paddingHorizontal: size.moderateScale(5),
};

export const cartItemsNameText = {
  fontFamily: fonts.openSansBold,
  fontSize: fontSize.verySmall,
  color: color.secondary,
};

export const cartItemsQtyText = {
  fontFamily: fonts.openSansBold,
  fontSize: fontSize.verySmall,
  color: color.black,
};

export const divider = {
  height: size.moderateScale(1),
  backgroundColor: color.gray100,
};

export const totalItemsNameText = {
  fontFamily: fonts.openSansBold,
  fontSize: fontSize.small,
  color: color.gray1000,
};

export const totalItemsQtyText = {
  fontFamily: fonts.openSansBold,
  fontSize: fontSize.small,
  color: color.gray1000,
};