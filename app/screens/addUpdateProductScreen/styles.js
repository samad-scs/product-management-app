import {color, fontSize, fonts, size} from '../../theme';

export const rootContainer = {
  flex: 1,
  backgroundColor: color.white,
};

export const itemContainer = {
  flex: 1,
  marginHorizontal: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(12),
  paddingTop: size.moderateScale(20),
  gap: size.moderateScale(30),
};

export const formCardContainer = {
  backgroundColor: color.white,
  shadowColor: '#171717ee',
  borderRadius: size.moderateScale(10),
  shadowOffset: {width: size.moderateScale(-1), height: size.moderateScale(2)},
  shadowOpacity: size.moderateScale(0.1),
  shadowRadius: size.moderateScale(1),
  elevation: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(12),
  paddingTop: size.moderateScale(20),
  paddingBottom: size.moderateScale(15),
  gap: size.moderateScale(15),
};

export const inputBoxContainer = {
  gap: size.moderateScale(8),
};

export const submitBoxContainer = {
  marginTop: size.moderateScale(18),
  gap: size.moderateScale(10),
};

export const radioGroupContainer = {
  paddingLeft: 0,
  flexDirection: 'row',
  flexWrap: 'wrap',
  gap: size.moderateScale(8),
  alignItems: 'center',
};

export const inputLabelText = {
  paddingHorizontal: size.moderateScale(5),
  fontFamily: fonts.openSansBold,
  fontSize: fontSize.mediumSmall,
  color: color.black,
};

export const errorMessage = {
  paddingHorizontal: size.moderateScale(8),
  fontFamily: fonts.openSansBold,
  fontSize: fontSize.largeTiny,
  color: color.brightRed,
};

export const closeBtn = {
  borderRadius: size.moderateScale(10),
  backgroundColor: color.whiteSmoke,
  paddingVertical: size.moderateScale(12),
  paddingHorizontal: size.moderateScale(10),
};
