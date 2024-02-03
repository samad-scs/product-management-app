import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import * as styles from './styles';
import {IcRightArrow, size} from '../../../theme';
import {currencyConvert} from '../../../utils/functions/currencyConverter';

export default function ProductItemCard({product}) {
  const navigation = useNavigation();

  const handleGenerate = () => {
    navigation.navigate('generateBill');
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handleGenerate}
        style={styles.generateBillCard}>
        <View style={styles?.generateBillCardContent}>
          <View style={styles?.itemDescription}>
            <Text style={styles?.itemNameText}>{product?.name}</Text>
            <Text style={styles?.itemPriceText}>{`${currencyConvert(
              product?.price,
            )} / ${product?.type}`}</Text>
          </View>
          <View style={{marginRight: size.moderateScale(10)}}>
            <IcRightArrow
              fill={'black'}
              width={size.moderateScale(15)}
              height={size.moderateScale(15)}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
