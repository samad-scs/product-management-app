import React from 'react';
import * as styles from './styles';
import {Header, Screen, Text} from '../../components';
import {View} from 'react-native';

export default function BillingScreen() {
  return (
    <View style={styles.rootContainer}>
      <Header
        back
        options={{
          headerLeftText: 'Generate Bill',
        }}
      />
      <Screen style={styles.itemContainer}>
        <Text>GENERATE BILLS</Text>
      </Screen>
    </View>
  );
}
