import React from 'react';
import * as styles from './styles';
import {Header, Screen, Text} from '../../components';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {IcPlus, size} from '../../theme';
import ProductItemCard from '../../components/cards/productItemCard';

import products from '../../json/products.json';
import {useNavigation} from '@react-navigation/native';

export default function ProductsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.rootContainer}>
      <Header
        back
        options={{
          headerLeftText: 'Products',
          headerRight: () => (
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('addProduct')}>
              <IcPlus
                width={size.moderateScale(25)}
                height={size.moderateScale(25)}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView contentContainerStyle={styles.itemContainer}>
        <View style={styles.listItemsContainer}>
          {products?.map((item, index) => (
            <ProductItemCard key={index} product={item} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
