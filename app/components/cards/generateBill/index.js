import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import * as styles from './styles';
import {IcRightArrow, size} from '../../../theme';

export default function GenerateBillButton() {
  const navigation = useNavigation();

  const handleGenerate = () => {
    navigation.navigate('generateBill');
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={handleGenerate}
        style={styles.generateBillCard}>
        <View style={styles?.generateBillCardContent}>
          <Text style={styles?.generateBillText}>Generate Bill</Text>
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
