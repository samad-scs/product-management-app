import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';


import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import { IcBills, color, size } from '../../../theme';
import { currencyConvert } from '../../../utils/functions/currencyConverter';

// ** Storage Instance
import { MMKVLoader } from 'react-native-mmkv-storage';

// ** Styles
import * as styles from './styles';

const MMKV = new MMKVLoader().initialize();

export default function BillCard() {
  // ** Hooks
  const navigation = useNavigation();

  // ** States
  const [isLoading, setIsLoading] = useState(true);
  const [billingData, setBillingData] = useState([]);

  useEffect(() => {
    const sortProducts = setTimeout(() => {
      const newProducts = MMKV.getArray('bills') ?? [];
      newProducts.sort((a, b) => {
        const startA = a.created_at;
        const startB = b.created_at;
        return startB - startA;
      });
      const topThreeProducts = newProducts.slice(0, 2);
      setBillingData(topThreeProducts ?? []);
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
