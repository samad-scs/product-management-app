import {color, size} from '../../theme';

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

export const listItemsContainer = {
  gap: size.moderateScale(25),
};
