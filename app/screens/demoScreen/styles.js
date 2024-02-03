import {color, fontSize, fonts, size} from '../../theme';

export const rootContainer = () => ({
  flex: 1,
  backgroundColor: color.white,
});

export const itemContainer = () => ({
  marginHorizontal: size.moderateScale(10),
  paddingHorizontal: size.moderateScale(12),
  paddingTop: size.moderateScale(20),
});

export const productCard = {};

export const recentProduct = {
  color: color.black,
  fontFamily: fonts.openSansSemiBold,
  fontSize: fontSize.middleMedium,
};
