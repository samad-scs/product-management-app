import React, {useEffect, useState} from 'react';
import * as styles from './styles';
import {Header, Screen, Text} from '../../components';
import {TouchableOpacity, View} from 'react-native';
import {MMKVLoader} from 'react-native-mmkv-storage';
import moment from 'moment';
import RecentItemCard from '../../components/cards/recentBillCard';
import ReactNativeModal from 'react-native-modal';
import {color} from '../../theme';
import {Line} from 'react-native-svg';

const MMKV = new MMKVLoader().initialize();

export default function RecentBillings() {
  const [billsArray, setBillsArray] = useState([]);
  const [openSort, setOpenSort] = useState(false);

  console.log('billsArray :', billsArray);

  const fetchData = sortBy => {
    const bills = MMKV.getArray('bills');

    const sortedArray = bills?.sort((a, b) => {
      if (sortBy === 'date_dec') {
        const startA = moment(a?.created_at).diff(b?.created_at);
        return startA;
      } else if (sortBy === 'price_dec') {
        return b?.totalPrice - a?.totalPrice;
      } else if (sortBy === 'price_asc') {
        return a?.totalPrice - b?.totalPrice;
      } else {
        const startA = moment(b?.created_at).diff(a?.created_at);
        return startA;
      }
    });

    setOpenSort(false);
    setBillsArray(sortedArray ?? []);
  };

  const handleSortDialogOpen = () => {
    setOpenSort(true);
  };

  const handleSortDialogClose = () => {
    setOpenSort(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.rootContainer}>
      <Header
        back
        options={{
          headerLeftText: 'Billing Records',
        }}
      />
      <Screen style={styles.itemContainer}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={handleSortDialogOpen}
            style={styles?.filterButtonsContainer}>
            <Text style={styles?.filterButtonText}>Sort By</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.7}
            style={styles?.filterButtonsContainer}>
            <Text style={styles?.filterButtonText}>Filter</Text>
          </TouchableOpacity>
        </View>
        <View style={styles?.recentItemContainer}>
          {billsArray?.map((item, index) => {
            return <RecentItemCard key={index} recentItem={item} />;
          })}
        </View>
      </Screen>
      <ReactNativeModal
        isVisible={openSort}
        backdropColor={color.gray100}
        onBackdropPress={handleSortDialogClose}
        style={styles.modalStyles}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        backdropTransitionOutTiming={0.3}
        backdropOpacity={0.5}>
        <View style={styles?.modalContainer}>
          <View style={styles?.sortByTitleContainer}>
            <Text style={styles?.itemNameTextTitle}>Sort By</Text>
            <View style={styles?.divider} />
          </View>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles?.sortItemContainer()}
            onPress={() => fetchData('date_asc')}>
            <Text style={styles?.itemNameText}>Newest First</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles?.sortItemContainer()}
            onPress={() => fetchData('date_dec')}>
            <Text style={styles?.itemNameText}>Oldest First</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles?.sortItemContainer()}
            onPress={() => fetchData('price_dec')}>
            <Text style={styles?.itemNameText}>Price - High to Low</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.6}
            style={styles?.sortItemContainer()}
            onPress={() => fetchData('price_asc')}>
            <Text style={styles?.itemNameText}>Price - Low to High</Text>
          </TouchableOpacity>
        </View>
      </ReactNativeModal>
    </View>
  );
}
