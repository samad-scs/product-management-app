import React from 'react';
import {Keyboard, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useNavigation} from '@react-navigation/native';
import {Text} from '../text';
import {IcBackArrow, IcHome, color, size} from '../../theme';
import * as styles from './styles';
export const Header = props => {
  const {
    menu,
    options,
    headerContainerStyle,
    onMenuPress,
    back,
    headerTextColor,
    headerTextStyle,
    onBackPress,
    backArrowColor,
    outerCircleStyle,
    backArrowHeight,
    backArrowWidth,
  } = props;
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  return (
    <View
      mode="small"
      style={[
        styles.headerStyle(options?.headerColor, insets),
        headerContainerStyle,
      ]}>
      <View style={styles.innerLeftContainer()}>
        {menu && (
          <View
            animated={false}
            rippleColor={color.lightWhite}
            style={styles.headerMainStyle()}
            icon={() => (
              <IcHome
                height={size.moderateScale(24)}
                width={size.moderateScale(24)}
              />
            )}
            onPress={
              onMenuPress
                ? onMenuPress
                : () => {
                    Keyboard.dismiss();
                    navigation.toggleDrawer();
                  }
            }
          />
        )}
        {back && (
          <View style={outerCircleStyle}>
            <TouchableOpacity
              style={styles.headerMainStyle()}
              onPress={
                onBackPress
                  ? onBackPress
                  : () => navigation.goBack(navigation.getState().key)
              }>
              <IcBackArrow
                height={backArrowHeight ?? size.moderateScale(20)}
                width={backArrowWidth ?? size.moderateScale(20)}
                fill={backArrowColor ?? color.black}
              />
            </TouchableOpacity>
          </View>
        )}
        {options?.headerLeftText && (
          <Text
            numberOfLines={1}
            // adjustsFontSizeToFit={true}
            style={[styles.headerTitleText(headerTextColor), headerTextStyle]}>
            {options?.headerLeftText}
          </Text>
        )}
        <View></View>
      </View>
      {options?.headerRight && options?.headerRight()}
    </View>
  );
};
