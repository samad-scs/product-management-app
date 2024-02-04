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

export const noItemsSelected = {
  backgroundColor: color.white,
  borderRadius: size.moderateScale(15),
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
};
