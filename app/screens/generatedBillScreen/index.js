import React from 'react';
import {Text, View} from 'react-native';

import * as styles from './styles';
import {Header, Screen} from '../../components';
import {currencyConvert} from '../../utils/functions/currencyConverter';

export default function GeneratedBillScreen({route}) {
  console.log('route :', route);
  const data = route?.params?.data;
  return (
    <View style={styles?.rootContainer}>
      <Header back options={{headerLeftText: 'Billing'}} />
      <Screen style={styles.itemContainer}>
        <View style={styles?.cartCardContainer}>
          <View>
            {data?.items?.map((item, index) => (
              <View key={index} style={styles?.cartItemsContainer}>
                <Text style={styles?.cartItemsNameText}>{item?.name}</Text>
                <Text
                  style={
                    styles?.cartItemsQtyText
                  }>{`${item?.qty} ${item?.type}`}</Text>
              </View>
            ))}
          </View>
          <View style={styles?.divider} />
          <View style={styles?.cartItemsContainer}>
            <Text style={styles?.totalItemsNameText}>{`Total`}</Text>
            <Text style={styles?.totalItemsQtyText}>
              {currencyConvert(data?.totalAmount)}
            </Text>
          </View>
        </View>
      </Screen>
    </View>
  );
}
