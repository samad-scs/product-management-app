import React from 'react';
import * as styles from './styles';
import {Screen, Text} from '../../components';
import {View} from 'react-native';
export default function BillingScreen() {
  return (
    <View style={styles.rootContainer}>
      <Screen style={styles.itemContainer}>
        <Text>GENERATE BILLS</Text>
      </Screen>
    </View>
  );
}
