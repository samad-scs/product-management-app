import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {Button, Header, Text} from '../../components';

import {useNavigation} from '@react-navigation/native';
import GenerateBillProductCard from '../../components/cards/generateBillProductItem';
import {InputBox} from '../../components/inputBox';
import ConfirmDeleteModal from '../../components/modals/confirmDelete';
import EditBillingItemModal from '../../components/modals/editBillingItem';
import {IcEdit, IcSearch, IcTrash, color, size} from '../../theme';

import {MMKVLoader} from 'react-native-mmkv-storage';

const MMKV = new MMKVLoader().initialize();

import * as styles from './styles';

export default function BillingScreen() {
  // ** Hooks
  const navigation = useNavigation();

  // ** States
  const [products, setProducts] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [extra, setExtra] = useState(0);
  const [qty, setQty] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleClick = item => {
    const updateSelectedItem = selectedProducts.filter(
      v => v.u_id !== item?.u_id,
    );
    setSelectedProducts([...updateSelectedItem, item]);
  };

  const handleEdit = index => {
    setSelectedItem(selectedProducts[index]);
    setQty(selectedProducts[index].qty);
    setOpenMenu(true);
  };

  const handleDelete = index => {
    setSelectedItem(selectedProducts[index]);
    setDeleteOpen(true);
  };

  const confirmDelete = () => {
    const updatedArray = selectedProducts?.filter(
      v => v.u_id !== selectedItem?.u_id,
    );
    setSelectedProducts(updatedArray);
    setDeleteOpen(false);
    setExtra(extra + 1);
  };

  const handleClose = () => {
    // handleClick(product);
    setOpenMenu(false);
  };

  const handleAddToSelection = () => {
    const data = {...selectedItem};
    data.qty = qty;

    handleClick(data);
    setOpenMenu(false);
  };

  const handleGenerate = () => {
    let totalPrice = 0;
    selectedProducts?.map(item => {
      const sumAmount = +item.price * +item.qty;
      totalPrice += sumAmount;
    });

    const data = {
      items: selectedProducts,
      totalAmount: totalPrice,
    };

    navigation.navigate('generatedBill', {data});
  };

  useEffect(() => {
    const productsData = MMKV.getArray('products');
    setProducts(productsData ?? []);
  }, []);

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
                <View style={styles.selectedItemsTitleContainer}>
                  <Text style={styles.selectedItemsTitleText}>
                    Selected Items
                  </Text>
                </View>
                {selectedProducts?.map((item, index) => (
                  <View key={item?.u_id} style={{gap: size.moderateScale(10)}}>
                    <View style={styles?.selectedItemsContainer}>
                      <Text style={styles.selectedItemsNameText}>
                        {item.name}
                      </Text>
                      <View style={styles.editableItemsContainer}>
                        <Text
                          style={
                            styles.selectedItemsNameText
                          }>{`x ${item.qty}`}</Text>
                        <TouchableOpacity
                          activeOpacity={0.3}
                          onPress={() => handleEdit(index)}>
                          <IcEdit
                            width={size.moderateScale(13)}
                            height={size.moderateScale(13)}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity
                          activeOpacity={0.3}
                          onPress={() => handleDelete(index)}>
                          <IcTrash
                            width={size.moderateScale(13)}
                            height={size.moderateScale(13)}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                    {index !== selectedProducts?.length - 1 && (
                      <View style={styles?.divider} />
                    )}
                  </View>
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
                onPress={handleGenerate}
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
            selectedProducts?.every(i => i.u_id !== v.u_id),
        )}
        ListEmptyComponent={
          <View style={styles?.noItemsSelected}>
            <Text style={styles?.noItemsSelectedText}>
              No Products Available
            </Text>
          </View>
        }
        renderItem={({item}) => (
          <GenerateBillProductCard product={item} handleClick={handleClick} />
        )}
        keyExtractor={item => item?.u_id?.toString()}
      />
      <ConfirmDeleteModal
        isVisible={deleteOpen}
        title={`This will remove "${selectedItem?.name}" from your selected items`}
        onClose={() => setDeleteOpen(false)}
        onConfirm={confirmDelete}
      />
      <EditBillingItemModal
        openMenu={openMenu}
        handleAddToSelection={handleAddToSelection}
        handleClose={handleClose}
        setQty={setQty}
        qty={qty}
        product={selectedItem}
      />
    </View>
  );
}
