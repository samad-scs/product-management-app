import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import products from '../../../json/products.json';

import {IcFlame, color, size} from '../../../theme';
import * as styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {currencyConvert} from '../../../utils/functions/currencyConverter';

export default function ProductCard() {
  // ** Hooks
  const navigation = useNavigation();

  // ** States
  const [isLoading, setIsLoading] = useState(true);
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    const sortProducts = setTimeout(() => {
      const newProducts = [...products];
      newProducts.sort((a, b) => b.sales - a.sales);
      const topThreeProducts = newProducts.slice(0, 3);
      setProductsData(topThreeProducts);
      setIsLoading(false);
      return () => {
        clearTimeout(sortProducts);
      };
    }, 1000);
  }, []);

  return (
    <View style={styles.productCardMainContainer}>
      <View style={styles.productsCardContentHeading}>
        <IcFlame
          fill={color.black}
          width={size.moderateScale(25)}
          height={size.moderateScale(25)}
        />
        <Text style={styles.productCardHeadingText}>Popular Products</Text>
      </View>
      {(isLoading ? [0, 1, 2] : productsData)?.map((item, index) => (
        <View key={index}>
          <View style={styles.productDetailContainer}>
            {isLoading ? (
              <Text style={styles.productNameText}>{`Loading . . . .`}</Text>
            ) : (
              <>
                <Text style={styles.productNameText}>{item?.name}</Text>
                <Text style={styles.productPriceText}>{`${currencyConvert(
                  item?.price,
                )} / ${item.type}`}</Text>
              </>
            )}
          </View>
          {index !== (isLoading ? [0, 1, 2] : productsData)?.length - 1 && (
            <View style={styles.divider} />
          )}
        </View>
      ))}
      {!isLoading && productsData?.length === 0 ? (
        <View style={styles.noProductsContainer}>
          <Text style={styles?.noProductsText}>No Products Found</Text>
          <TouchableOpacity
            style={styles.addNowButton}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('addProduct')}>
            <Text style={styles?.addNowButtonText}>Add Now</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.viewMoreContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate('productsList')}>
            <Text style={styles.productNameText}>View More</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
