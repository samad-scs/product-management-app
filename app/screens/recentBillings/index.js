import React, {useEffect, useState} from 'react';
import * as styles from './styles';
import {Header, Screen, Text} from '../../components';
import {View} from 'react-native';
import {MMKVLoader} from 'react-native-mmkv-storage';

const MMKV = new MMKVLoader().initialize();

export default function RecentBillings() {
  const [billsArray, setBillsArray] = useState([]);

  useEffect(() => {
    const bills = MMKV.getArray('bills');
    setBillsArray(bills ?? []);
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Header
        back
        options={{
          headerLeftText: 'Billing Records',
        }}
      />
      <Screen style={styles.itemContainer}>
        <Text>GENERATE BILLS</Text>
      </Screen>
    </View>
  );
}
