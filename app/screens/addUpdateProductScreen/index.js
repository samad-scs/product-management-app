import React, {useMemo, useState} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';

import {Button, Header, Screen} from '../../components';
import {InputBox} from '../../components/inputBox';

import RadioGroup from 'react-native-radio-buttons-group';

import * as styles from './styles';
import {color} from '../../theme';
import {useNavigation} from '@react-navigation/native';

import {MMKVLoader} from 'react-native-mmkv-storage';
import {generateNewID} from '../../utils/functions/generateNewId';
import Toast from 'react-native-toast-message';

const MMKV = new MMKVLoader().initialize();

export default function AddUpdateProduct() {
  const radioButtons = useMemo(
    () => [
      {
        id: '1', // acts as primary key, should be unique and non-empty string
        label: 'Kilogram',
        value: 'kg',
      },
      {
        id: '2',
        label: 'Unit',
        value: 'unit',
      },
      {
        id: '3',
        label: 'Litre',
        value: 'ltr',
      },
    ],
    [],
  );

  // ** Hooks
  const navigation = useNavigation();

  // ** States
  const [selectedId, setSelectedId] = useState();
  const [productTypeError, setProductTypeError] = useState(false);
  const [productName, setProductName] = useState('');
  const [productNameError, setProductNameError] = useState(false);
  const [productDescription, setProductDescription] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productPriceError, setProductPriceError] = useState(false);

  // ** Product Name Change
  const handleProductNameChange = e => {
    setProductName(e);
    if (e !== '') {
      setProductNameError(false);
    } else {
      setProductNameError(true);
    }
  };

  // ** Product Price Change
  const handleProductPriceChange = e => {
    setProductPrice(e);
    if (e !== '') {
      setProductPriceError(false);
    } else {
      setProductPriceError(true);
    }
  };

  // ** Close
  const handleClose = () => {
    navigation.navigate('productsList');
  };

  // ** Submit
  const handleSubmit = async () => {
    let error = false;
    if (productNameError || !productName || productName === '') {
      setProductNameError(true);
      error = true;
    }

    if (productPriceError || !productPrice || productPrice === '') {
      setProductPriceError(true);
      error = true;
    }

    if (!selectedId) {
      setProductTypeError(true);
      error = true;
    }

    if (error) return;

    const data = {
      name: productName,
      price: productPrice,
      description: productDescription,
      type: radioButtons?.find(val => val.id === selectedId)?.value,
      sales: 0,
      created_at: new Date(),
    };

    MMKV.getArray('products', (error, result) => {
      try {
        if (error) {
          console.error('ERROR ADD PRODUCT MMKV', error);
          return;
        }

        const newProductId = generateNewID(result, 'PRD');
        data.u_id = newProductId;

        const newProducts = result ? [...result, data] : [data];

        MMKV.setArray('products', newProducts);

        Toast.show({text1: 'Product Added Successfully', type: 'success'});
        navigation.navigate('productsList');
      } catch (err) {
        console.error('MMKV ADD ERROR', err);
      }
    });
  };

  return (
    <View style={styles?.rootContainer}>
      <Header
        back
        options={{
          headerLeftText: 'Add Product',
        }}
      />
      <ScrollView contentContainerStyle={styles?.itemContainer}>
        <View style={styles?.formCardContainer}>
          {/* PRODUCT NAME */}
          <View style={styles?.inputBoxContainer}>
            <Text style={styles?.inputLabelText}>Name of the product : </Text>
            <View>
              <InputBox
                value={productName}
                onChangeText={handleProductNameChange}
              />
              {productNameError && (
                <Text style={styles.errorMessage}>
                  Please enter a product name
                </Text>
              )}
            </View>
          </View>
          {/* PRODUCT DESCRIPTION */}
          <View style={styles?.inputBoxContainer}>
            <Text
              style={
                styles?.inputLabelText
              }>{`Description (optional) : `}</Text>
            <View>
              <InputBox
                value={productDescription}
                onChangeText={setProductDescription}
              />
            </View>
          </View>
          {/* PRODUCT PRICE */}
          <View style={styles?.inputBoxContainer}>
            <Text style={styles?.inputLabelText}>{`Price ( in ₹ ): `}</Text>
            <View>
              <InputBox
                keyboardType="number-pad"
                value={productPrice}
                onChangeText={handleProductPriceChange}
              />
              {productPriceError && (
                <Text style={styles.errorMessage}>Please enter a amount</Text>
              )}
            </View>
          </View>
          {/* PRODUCT TYPE */}
          <View style={styles?.inputBoxContainer}>
            <Text style={styles?.inputLabelText}>Scale : </Text>

            <RadioGroup
              containerStyle={styles?.radioGroupContainer}
              radioButtons={radioButtons}
              onPress={e => {
                setSelectedId(e);
                setProductTypeError(false);
              }}
              selectedId={selectedId}
            />
            {productTypeError && (
              <Text style={styles.errorMessage}>
                Please select a type on which the price depends
              </Text>
            )}
          </View>
          {/* ACTIONS */}
          <View style={styles?.submitBoxContainer}>
            <Button title={'Submit'} onPress={handleSubmit} />
            <Button
              activeOpacity={0.2}
              title={'Close'}
              btnStyle={styles?.closeBtn}
              onPress={handleClose}
              customTextColor={color.black}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
