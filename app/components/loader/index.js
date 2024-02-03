import React from 'react';
import LottieView from 'lottie-react-native';
import {Image, View} from 'react-native';
import {images, lottieIcons} from '../../theme/index';
import * as styles from './styles';

export const Loader = () => {
  return (
    <View style={styles.container()}>
      <LottieView
        source={lottieIcons.bniLoader}
        autoPlay
        loop
        style={styles.lottieImage()}
      />
      <View style={styles.imageOverlay()}>
        <Image source={images.imgBniLogo} style={styles.imageStyle()} />
      </View>
    </View>
  );
};
