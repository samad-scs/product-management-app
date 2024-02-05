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

export const listItemsContainer = {
  gap: size.moderateScale(25),
};

export const noProductsContainer = {
  height: '100%',
  borderWidth: 0,
  borderRadius: size.moderateScale(15),
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: color.whiteSmoke,
  paddingBottom: size.moderateScale(50),
  gap: size.moderateScale(20),
};

export const noProductsText = {
  color: color.black,
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.openSansBold,
};

export const addNowButtonText = {
  color: color.black,
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.openSansSemiBold,
};

export const addNowButton = {
  backgroundColor: color.white,
  borderRadius: size.moderateScale(40),
  paddingVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(20),
  shadowColor: '#171717ee',
  shadowOffset: {width: size.moderateScale(-1), height: size.moderateScale(2)},
  shadowOpacity: size.moderateScale(0.1),
  shadowRadius: size.moderateScale(1),
  elevation: size.moderateScale(5),
};
