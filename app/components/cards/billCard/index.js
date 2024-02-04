import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import bills from '../../../json/bills.json';

import {useNavigation} from '@react-navigation/native';
import {IcBills, color, size} from '../../../theme';
import {currencyConvert} from '../../../utils/functions/currencyConverter';
import * as styles from './styles';
import moment from 'moment';

export default function BillCard() {
  // ** Hooks
  const navigation = useNavigation();

  // ** States
  const [isLoading, setIsLoading] = useState(true);
  const [billingData, setBillingData] = useState([]);

  useEffect(() => {
    const sortProducts = setTimeout(() => {
      const newProducts = [...bills];
      newProducts.sort((a, b) => {
        const startA = a.created_at;
        const startB = b.created_at;
        return startB - startA;
      });
      const topThreeProducts = newProducts.slice(0, 2);
      setBillingData(topThreeProducts);
      setIsLoading(false);
      return () => {
        clearTimeout(sortProducts);
      };
    }, 1000);
  }, []);

  return (
    <View style={styles.recentBillingCardMainContainer}>
      <View style={styles.recentBillingCardContentHeading}>
        <IcBills
          fill={color.black}
          width={size.moderateScale(25)}
          height={size.moderateScale(25)}
        />
        <Text style={styles.recentBillingCardHeadingText}>Recent Billings</Text>
      </View>
      {(isLoading ? [0, 1] : billingData)?.map((item, index) => (
        <View key={index}>
          <View style={styles.recentBillingDetailContainer}>
            {isLoading ? (
              <Text
                style={styles.recentBillingNameText}>{`Loading . . . .`}</Text>
            ) : (
              <>
                <Text style={styles.recentBillingNameText}>
                  {moment(item?.created_at).format('H:mm A - DD-MMM')}
                </Text>
                <Text style={styles.recentBillingPriceText}>
                  {currencyConvert(item?.totalPrice)}
                </Text>
              </>
            )}
          </View>
          {index !== (isLoading ? [0, 1, 2] : billingData)?.length - 1 && (
            <View style={styles.divider} />
          )}
        </View>
      ))}
      {!isLoading && billingData?.length === 0 ? (
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
            onPress={() => navigation.navigate('recentBillings')}>
            <Text style={styles.viewMoreText}>View More</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
