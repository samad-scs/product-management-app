import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {IcRightArrow, size} from '../../../theme';
import {currencyConvert} from '../../../utils/functions/currencyConverter';
import * as styles from './styles';
import moment from 'moment';

export default function RecentItemCard({recentItem}) {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.9} style={styles.generateBillCard}>
        <View style={styles?.generateBillCardContent}>
          <View style={styles?.itemDescription}>
            <Text style={styles?.itemNameText}>
              {recentItem?.invoice_number ?? '-'}
            </Text>
            <Text style={styles?.itemPriceText}>{`${currencyConvert(
              recentItem?.totalPrice,
            )} / ${moment(recentItem?.created_at).format('DD-MM-YYYY')}`}</Text>
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
