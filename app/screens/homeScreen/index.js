import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Header, Screen} from '../../components';
import GenerateBillButton from '../../components/cards/generateBill';
import ProductCard from '../../components/cards/productCard';
import {IcProductCart, color, size} from '../../theme';
import * as styles from './styles';
import {useNavigation} from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();

  return (
    <View style={styles.rootContainer}>
      <Header
        options={{
          headerLeftText: 'Home Page',
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles?.productIconButton}
              onPress={() => navigation.navigate('productsList')}>
              <IcProductCart
                fill={color.black}
                stroke={color.whiteSmoke}
                width={size.moderateScale(32)}
                height={size.moderateScale(32)}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Screen style={styles.itemContainer}>
        {/* GENERATE BILL BUTTON */}
        <GenerateBillButton />
        <ProductCard />
      </Screen>
    </View>
  );
}
