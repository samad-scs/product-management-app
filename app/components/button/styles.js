import {color, size, fontSize, fonts} from '../../theme';

export const rippleBtn = disabled => ({
  borderRadius: size.moderateScale(10),
  backgroundColor: disabled ? color.customSecondary(0.3) : color.brightRed,
  paddingVertical: size.moderateScale(12),
  paddingHorizontal: size.moderateScale(10),
});

export const contentStyle = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
});
export const titleContainer = () => ({});
export const iconContainer = () => ({
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: size.moderateScale(10),
  // borderWidth: size.moderateScale(1),
  padding: size.moderateScale(3),
});
export const labelStyle = (textColor, textCapitalize) => ({
  color: textColor ?? color.white,
  fontFamily: fonts.poppinsSemiBold,
  fontSize: fontSize.verySmall,
  includeFontPadding: false,
  textAlign: 'center',
  textTransform: textCapitalize ? 'capitalize' : 'uppercase',
});
