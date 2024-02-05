import {color, fonts, size, fontSize} from '../../theme';

export const rootContainer = (bgColor, height) => ({
  flexDirection: 'row',
  alignItems: 'center',
  borderWidth: size.moderateScale(1),
  borderColor: color.gray100,
  borderRadius: size.moderateScale(5),
  marginBottom: 10,
});
export const inputBoxStyle = () => ({
  flex: 1,
  height: size.moderateScale(50),
  fontSize: 16,
  paddingLeft: 8,
  color: color.black,
  fontFamily: fonts.openSansBold,
  fontSize: fontSize.verySmall,
});
