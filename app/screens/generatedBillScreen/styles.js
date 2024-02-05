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
  gap: size.moderateScale(20),
};

export const cartCardContainer = {
  backgroundColor: color.white,
  borderRadius: size.moderateScale(15),
  // borderWidth: 2,
  // borderStyle: 'dotted',
  // borderColor: color.semiTransBlack,
  paddingHorizontal: size.moderateScale(17),
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

export const sectionTitleContainer = {
  marginVertical: size.moderateScale(10),
};

export const sectionTitleText = {
  fontFamily: fonts.openSansBold,
  fontSize: fontSize.small,
  color: color.gray1000,
};

export const buttonStyle = {
  borderRadius: size.moderateScale(10),
  backgroundColor: color.black,
  paddingVertical: size.moderateScale(12),
  paddingHorizontal: size.moderateScale(10),
};

export const cashButton = {
  backgroundColor: color.lightGreen,
};

export const upiButton = {
  backgroundColor: color.customBlue(0.5),
};

export const yesButton = {
  width: size.moderateScale(80),
  backgroundColor: color.limeGreen400,
};

export const noButton = {
  width: size.moderateScale(80),
  backgroundColor: color.black,
};

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

export const cashModalContainer = {
  gap: size.moderateScale(25),
};

export const cashModalConfirmMessageText = {
  fontSize: fontSize.littleMedium,
  fontFamily: fonts.openSansBold,
};

export const buttonsContainer = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: size.moderateScale(10),
};

export const qrContainer = {
  position: 'relative',
  justifyContent: 'center',
  alignItems: 'center',
};

export const upiLogoImageContainer = {
  position: 'absolute',
  zIndex: 33,
  borderRadius: size.moderateScale(15),
  width: size.moderateScale(70),
  height: size.moderateScale(70),
  overflow: 'hidden',
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 2,
};

export const upiLogoImage = {
  width: size.moderateScale(70),
};
