import {color, fontSize, fonts, size} from '../../../theme';

export const productItemCard = {
  backgroundColor: 'white',
  borderWidth: size.moderateScale(0),
  borderRadius: size.moderateScale(15),
  paddingHorizontal: size.moderateScale(14),
  paddingVertical: size.moderateScale(20),
  shadowColor: '#171717ee',
  shadowOffset: {width: size.moderateScale(-1), height: size.moderateScale(2)},
  shadowOpacity: size.moderateScale(0.1),
  shadowRadius: size.moderateScale(1),
  elevation: size.moderateScale(10),
  marginBottom: size.moderateScale(20),
};

export const productItemCardContent = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const itemDescription = {
  gap: size.moderateScale(10),
};

export const itemNameText = {
  color: color.black,
  fontFamily: fonts.openSansSemiBold,
  fontSize: fontSize.small,
};

export const itemPriceText = {
  color: color.black,
  fontFamily: fonts.openSansSemiBold,
  fontSize: fontSize.small,
};

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

export const modalAmountContainer = {
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
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
