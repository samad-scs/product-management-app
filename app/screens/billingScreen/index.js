import React, {useState} from 'react';
import {Button, Header, Screen, Text} from '../../components';
import {FlatList, ScrollView, TouchableOpacity, View} from 'react-native';

import products from '../../json/products.json';

import * as styles from './styles';
import GenerateBillProductCard from '../../components/cards/generateBillProductItem';
import {InputBox} from '../../components/inputBox';
import {IcSearch, color, size} from '../../theme';

export default function BillingScreen() {
  const [filterText, setFilterText] = useState('');
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleClick = item => {
    setSelectedProducts([...selectedProducts, item]);
  };

  return (
    <View style={styles.rootContainer}>
      <Header
        back
        options={{
          headerLeftText: 'Generate Bill',
        }}
      />
      <FlatList
        contentContainerStyle={styles.itemContainer}
        ListHeaderComponent={
          <View style={styles.listHeaderComponentSection}>
            {selectedProducts && selectedProducts?.length !== 0 ? (
              <View style={styles.itemsSelected}>
                {selectedProducts?.map((item, index) => (
                  <>
                    <View key={index} style={styles?.selectedItemsContainer}>
                      <Text style={styles.selectedItemsNameText}>
                        {item.name}
                      </Text>
                      <Text
                        style={
                          styles.selectedItemsNameText
                        }>{`x ${item.qty}`}</Text>
                    </View>
                    {index !== selectedProducts?.length - 1 && (
                      <View style={styles?.divider} />
                    )}
                  </>
                ))}
              </View>
            ) : (
              <View style={styles.noItemsSelected}>
                <Text style={styles.noItemsSelectedText}>
                  No Items Selected
                </Text>
              </View>
            )}
            <View style={styles?.generateBillButtonContainer}>
              <Button
                title={'Generate'}
                disabled={!selectedProducts || selectedProducts?.length === 0}
              />
            </View>
            <View style={styles.searchInputContainerStyle}>
              <InputBox
                icon={() => (
                  <IcSearch
                    stroke={color.semiTransBlack}
                    width={size.moderateScale(15)}
                    height={size.moderateScale(15)}
                  />
                )}
                customStyle={styles.searchInputStyle}
                iconPosition="left"
                onChangeText={setFilterText}
                placeholder={'Search product ....'}
              />
            </View>
          </View>
        }
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={products?.filter(
          v =>
            v.name?.includes(filterText) &&
            selectedProducts?.every(i => i.product_id !== v.product_id),
        )}
        renderItem={({item}) => (
          <GenerateBillProductCard product={item} handleClick={handleClick} />
        )}
        keyExtractor={item => item.product_id}
      />
    </View>
  );
}
