import React from 'react';
import {
  View,
  SafeAreaView,
  StatusBar,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import * as styles from './styles';
import {color} from '../../theme/index';
import {Loader} from '../loader';

export const Screen = props => {
  const {
    children,
    withScroll,
    style,
    bgColor,
    scrollStyle,
    scrollRef,
    onScrolling,
    keyboardShouldPersistTaps,
    extraScrollHeight,
    loading,
  } = props;

  if (withScroll) {
    return (
      <SafeAreaView style={styles.mainContainer(bgColor)}>
        <StatusBar
          backgroundColor={bgColor ?? color.white}
          barStyle={bgColor ? 'dark-content' : 'dark-content'}
        />
        {loading && <Loader />}
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
          contentContainerStyle={scrollStyle}
          showsVerticalScrollIndicator={false}
          bounces={false}
          onScroll={onScrolling}
          innerRef={scrollRef}
          scrollEventThrottle={16}
          extraScrollHeight={extraScrollHeight}
          enableOnAndroid={true}
          alwaysBounceVertical={false}
          {...props}>
          <View style={styles.full()}>{children}</View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <SafeAreaView style={styles.container(bgColor)}>
          <StatusBar
            backgroundColor={bgColor ?? color.white}
            barStyle={!bgColor ? 'dark-content' : 'dark-content'}
          />
          {loading && <Loader />}
          <View style={styles.container(style)}>{children}</View>
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
  }
};
