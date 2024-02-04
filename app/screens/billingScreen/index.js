import React, {useState} from 'react';
import {Header, Screen, Text} from '../../components';
import {FlatList, ScrollView, View} from 'react-native';

import products from '../../json/products.json';

import * as styles from './styles';

export default function BillingScreen() {
  const [filterText, setFilterText] = useState('');

  return (
    <View style={styles.rootContainer}>
      <Header
        back
        options={{
          headerLeftText: 'Generate Bill',
        }}
      />
      <ScrollView contentContainerStyle={styles.itemContainer}>
        <View>
          <View style={styles.noItemsSelected}>
            <Text style={styles.noItemsSelectedText}>No Items Selected</Text>
          </View>
        </View>
        <FlatList
          data={products?.filter(v => v.name?.includes(filterText))}
          renderItem={({item}) => <Text>{item.name}</Text>}
          keyExtractor={item => item.product_id}
        />
      </ScrollView>
    </View>
  );
}
