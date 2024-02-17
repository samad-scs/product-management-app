import {color, fontSize, fonts, size} from '../../theme';

export const rootContainer = {
  flex: 1,
  backgroundColor: color.white,
};

export const itemContainer = {
  marginHorizontal: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(12),
  paddingTop: size.moderateScale(20),
  backgroundColor: 'white'
};

export const recentItemContainer = {
  paddingHorizontal: size.moderateScale(12),
  paddingVertical: size.moderateScale(20),
  gap: size.moderateScale(10),
};

export const filterButtonsContainer = {
  borderRadius: size.moderateScale(5),
  flex: 1,
  justifyContent: 'center',
  paddingVertical: size.moderateScale(7),
  alignItems: 'center',
  backgroundColor: color.white,
  shadowColor: '#171717ee',
  shadowOffset: {width: size.moderateScale(-1), height: size.moderateScale(2)},
  shadowOpacity: size.moderateScale(0.1),
  shadowRadius: size.moderateScale(1),
  elevation: size.moderateScale(5),
};

export const filterButtonText = {
  fontFamily: fonts.openSansBold,
  color: color.black,
  fontSize: fontSize.mediumSmall,
};

export const itemNameTextTitle = {
  color: color.semiTransBlack,
  fontFamily: fonts.openSansBold,
  fontSize: fontSize.littleMedium,
};

export const itemNameText = {
  color: color.secondary,
  fontFamily: fonts.openSansBold,
  fontSize: fontSize.small,
};

export const sortByTitleContainer = {
  paddingVertical: size.moderateScale(8),
  paddingHorizontal: size.moderateScale(5),
  gap: size.moderateScale(6),
};

export const sortItemContainer = selected => ({
  backgroundColor: color.whiteSmoke,
  paddingVertical: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(5),
});

export const divider = {height: 1, backgroundColor: color.semiTransBlack};

export const modalStyles = {
  height: size.deviceHeight,
};

export const modalContainer = {
  backgroundColor: color.whiteSmoke,
  borderRadius: size.moderateScale(20),
  paddingVertical: size.moderateScale(20),
  paddingHorizontal: size.moderateScale(25),
  shadowColor: '#171717ee',
  shadowOffset: {width: size.moderateScale(-1), height: size.moderateScale(2)},
  shadowOpacity: size.moderateScale(0.1),
  shadowRadius: size.moderateScale(1),
  elevation: size.moderateScale(10),
};
