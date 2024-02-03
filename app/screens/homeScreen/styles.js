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

export const productCard = {
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
};

export const productCardContent = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const recentProduct = {
  color: color.black,
  fontFamily: fonts.openSansSemiBold,
  fontSize: fontSize.middleMedium,
};
