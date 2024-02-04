import React, {useState} from 'react';
import * as styles from './styles';
import {Header, Screen, Text} from '../../components';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {IcPlus, size} from '../../theme';
import ProductItemCard from '../../components/cards/productItemCard';

import productsData from '../../json/products.json';
import {useNavigation} from '@react-navigation/native';

export default function ProductsScreen() {
  // ** Hooks
  const navigation = useNavigation();

  // ** States
  const [products, setProducts] = useState([]);

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
          {products && products?.length !== 0 ? (
            products?.map((item, index) => (
              <ProductItemCard key={index} product={item} />
            ))
          ) : (
            <View style={styles.noProductsContainer}>
              <Text style={styles?.noProductsText}>No Products Found</Text>
              <TouchableOpacity
                style={styles.addNowButton}
                activeOpacity={0.8}
                onPress={() => navigation.navigate('addProduct')}>
                <Text style={styles?.addNowButtonText}>Add Now</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}
