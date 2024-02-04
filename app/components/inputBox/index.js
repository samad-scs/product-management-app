import React, {useState} from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
// Assuming you have Ionicons installed
import {color, size} from '../../theme';
import * as Styles from './styles';

export const InputBox = props => {
  const [isFocused, setIsFocused] = useState(false);
  const {
    placeholder,
    onChangeText,
    secureTextEntry,
    keyboardType,
    maxLength,
    icon,
    multiline,
    iconPosition,
    customStyle,
    placeholderTextColor,
    inputStyle,
    editable,
  } = props;

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const renderIcon = () => {
    // if (icon != null) return null;

    const iconStyles = [styles.icon];

    if (iconPosition === 'right') {
      iconStyles.push(styles.iconRight);
    } else {
      iconStyles.push(styles.iconLeft);
    }

    return icon();
  };

  return (
    <View
      style={[
        Styles.rootContainer(),
        customStyle,
        isFocused && {...styles.focused, ...customStyle},
      ]}>
      {iconPosition === 'left' && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '15%',
          }}>
          {renderIcon()}
        </View>
      )}
      <TextInput
        style={[
          Styles.inputBoxStyle(),
          icon &&
            (iconPosition === 'left'
              ? styles.inputWithLeftIcon
              : styles.inputWithRightIcon),
          multiline && styles.multilineInput,
          inputStyle,
        ]}
        selectionColor={color.semiTransBlack}
        placeholder={placeholder}
        placeholderTextColor={'#ccc' ?? placeholderTextColor}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onFocus={handleFocus}
        onBlur={handleBlur}
        multiline={multiline}
        editable={editable}
        {...props}
      />
      {iconPosition === 'right' && (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: '15%',
          }}>
          {renderIcon()}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {},
  // inputWithLeftIcon: {
  // 	paddingLeft: 30, // Adjust the value based on the icon size
  // },
  // inputWithRightIcon: {
  // 	paddingRight: 30, // Adjust the value based on the icon size
  // },
  multilineInput: {
    height: size.moderateScale(100),
    paddingHorizontal: size.moderateScale(10),
    // paddingVertical: size.moderateScale(10),
    textAlignVertical: 'top',
  },
  icon: {
    position: 'absolute',
    // top: 8,
  },
  iconLeft: {
    // left: 8,
  },
  iconRight: {
    // right: 8,
  },
  focused: {
    borderColor: color.semiTransBlack,
    borderWidth: size.moderateScale(1),
    borderRadius: size.moderateScale(5),
  },
});
