import {color, fontSize, fonts, size} from '../../theme';

export const rootContainer = {
  flex: 1,
  backgroundColor: color.white,
};

export const listHeaderComponentSection = {
  // borderWidth: 3,
  gap: size.moderateScale(20),
};

export const itemContainer = {
  flexGrow: 1,
  marginHorizontal: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(12),
  paddingVertical: size.moderateScale(40),
  paddingTop: size.moderateScale(20),
};

export const itemsSelected = {
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

export const selectedItemsContainer = {
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
};

export const editableItemsContainer = {
  justifyContent: 'space-around',
  alignItems: 'center',
  flexDirection: 'row',
  gap: size.moderateScale(10),
};

export const selectedItemsNameText = {
  fontFamily: fonts.openSansBold,
  fontSize: fontSize.verySmall,
  color: color.black,
};

export const selectedItemsTitleContainer = {
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginVertical: size.moderateScale(4),
};

export const selectedItemsTitleText = {
  fontFamily: fonts.openSansBold,
  fontSize: fontSize.verySmall,
  color: color.semiTransBlack,
};

export const noItemsSelected = {
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
  justifyContent: 'center',
  alignItems: 'center',
};

export const noItemsSelectedText = {
  fontFamily: fonts.openSansBold,
  fontSize: fontSize.verySmall,
  color: color.semiTransBlack,
};

export const searchInputContainerStyle = {
  marginTop: size.moderateScale(10),
  marginBottom: size.moderateScale(5),
};

export const searchInputStyle = {
  borderRadius: size.moderateScale(30),
};

export const divider = {
  height: size.moderateScale(1),
  backgroundColor: color.gray100,
};

export const generateBillButtonContainer = {
  marginTop: size.moderateScale(10),
};
