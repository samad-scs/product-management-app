import {color, fontSize, fonts, size} from '../../../theme';

export const productCardMainContainer = {
  backgroundColor: color.white,
  borderWidth: size.moderateScale(0),
  borderRadius: size.moderateScale(15),
  paddingHorizontal: size.moderateScale(14),
  paddingVertical: size.moderateScale(20),
  shadowColor: '#171717ee',
  shadowOffset: {width: size.moderateScale(-1), height: size.moderateScale(2)},
  shadowOpacity: size.moderateScale(0.1),
  shadowRadius: size.moderateScale(1),
  elevation: size.moderateScale(10),
  gap: size.moderateScale(25),
  maxHeight: size.moderateScale(320),
  zIndex: 3,
  overflow: 'hidden',
};

export const productsCardContentHeading = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  gap: size.moderateScale(10),
};

export const productDetailContainer = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
};

export const productCardHeadingText = {
  color: color.black,
  fontSize: fontSize.middleMedium,
  fontFamily: fonts.openSansSemiBold,
};

export const productNameText = {
  color: color.black,
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.openSansSemiBold,
};

export const productPriceText = {
  color: color.semiTransBlack,
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.openSansSemiBold,
};

export const divider = {
  marginTop: size.moderateScale(15),
  height: size.moderateScale(1),
  backgroundColor: color.gray100,
};

export const noProductsContainer = {
  height: '83%',
  borderWidth: 0,
  borderRadius: size.moderateScale(15),
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: color.whiteSmoke,
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
