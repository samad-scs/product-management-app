import React from 'react';
import {Image, ImageBackground} from 'react-native';

import {images} from '../../theme';
import * as Styles from './styles';
import {Screen} from '../../components';

export const SplashScreen = () => {
  return (
    <Screen style={Styles.rootContainer()}>
      <Image
        source={images.splashScreen}
        resizeMode="stretch"
        style={Styles.backgroundVideo()}
      />
    </Screen>
  );
};
