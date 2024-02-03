import {Platform} from 'react-native';
import {size, color, fontSize, fonts} from '../../theme/index';
export const headerStyle = (bgColor, insets) => ({
  backgroundColor: bgColor ?? color.lightWhite,
  justifyContent: 'space-between',
  paddingRight: size.moderateScale(15),
  paddingLeft: Platform.isPad ? size.moderateScale(10) : size.moderateScale(0),
  alignItems: 'center',
  height: size.moderateScale(70),
  flexDirection: 'row',
  paddingTop: size.moderateScale(10),
  marginTop: insets.top - size.moderateScale(10),
});
export const innerLeftContainer = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});
export const headerTitleText = headerTextColor => ({
  color: headerTextColor ?? color.black,
  fontSize: fontSize.medium,
  fontFamily: fonts.openSansBold,
  paddingLeft: Platform.isPad ? size.moderateScale(10) : size.moderateScale(10),
  width: size.deviceWidth * 0.67,
});
export const headerMainStyle = () => ({
  height: size.moderateScale(35),
  width: size.moderateScale(35),
  borderRadius: size.moderateScale(50),
  justifyContent: 'center',
  alignItems: 'center',
});
