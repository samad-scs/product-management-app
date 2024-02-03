import React from 'react';
import {Text, View} from 'react-native';

import * as styles from './styles';
import {Header, Screen} from '../../components';

export default function AddUpdateProduct() {
  return (
    <View style={styles?.rootContainer}>
      <Header
        back
        options={{
          headerLeftText: 'Add Product',
        }}
      />
      <Screen style={styles?.itemContainer}>
        <Text>Product Add</Text>
      </Screen>
    </View>
  );
}
