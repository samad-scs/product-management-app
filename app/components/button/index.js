import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import * as styles from './styles';

export const Button = props => {
  const {
    title,
    secondary,
    btnStyle,
    btnLabelStyle,
    customTextColor,
    disabled,
    onPress,
    activeOpacity,
    textCapitalize,
    icon,
  } = props;

  return (
    <TouchableOpacity
      activeOpacity={activeOpacity ?? 0.8}
      disabled={disabled}
      style={btnStyle ?? styles.rippleBtn(disabled)}
      onPress={onPress}
      {...props}>
      <View style={[styles.contentStyle(), props.contentStyle]}>
        <View style={styles.titleContainer()}>
          <Text
            style={[
              styles.labelStyle(customTextColor, textCapitalize),
              btnLabelStyle,
            ]}
            numberOfLines={1}
            adjustsFontSizeToFit={true}>
            {title}
          </Text>
        </View>
        {icon && <View style={styles.iconContainer()}>{icon()}</View>}
      </View>
    </TouchableOpacity>
  );
};
