import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';

import {Button, Header, Screen} from '../../components';
import {currencyConvert} from '../../utils/functions/currencyConverter';
import ReactNativeModal from 'react-native-modal';
import {color, images, size} from '../../theme';

import * as styles from './styles';
import QRCode from 'react-native-qrcode-svg';
import {useNavigation} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import {MMKVLoader} from 'react-native-mmkv-storage';
import {generateNewID} from '../../utils/functions/generateNewId';

const MMKV = new MMKVLoader().initialize();

const CashModal = ({onNo, onYes}) => {
  return (
    <View style={styles?.cashModalContainer}>
      <View>
        <Text style={styles?.cashModalConfirmMessageText}>
          Did you receive cash ?
        </Text>
      </View>
      <View style={styles?.buttonsContainer}>
        <Button
          title="No"
          btnStyle={[styles?.buttonStyle, styles?.noButton]}
          onPress={onNo}
        />
        <Button
          title="Yes"
          btnStyle={[styles?.buttonStyle, styles?.yesButton]}
          onPress={() => onYes('cash')}
        />
      </View>
    </View>
  );
};

const UPIModal = ({onNo, onYes, price}) => {
  const url = `upi://pay?pa=9265049815@paytm&am=${price}`;

  return (
    <View style={styles?.cashModalContainer}>
      <View style={styles?.qrContainer}>
        <View style={styles?.upiLogoImageContainer}>
          <Image
            source={images.upiLogo}
            resizeMethod="auto"
            resizeMode="contain"
            style={styles?.upiLogoImage}
          />
        </View>
        <QRCode value={url} size={size.moderateScale(300)} />
      </View>
      <View style={styles?.buttonsContainer}>
        <Button
          title="No"
          btnStyle={[styles?.buttonStyle, styles?.noButton]}
          onPress={onNo}
        />
        <Button
          title="Received"
          btnStyle={[styles?.buttonStyle, styles?.yesButton]}
          onPress={() => onYes('upi')}
        />
      </View>
    </View>
  );
};

export default function GeneratedBillScreen({route}) {
  // ** Hooks
  const navigation = useNavigation();

  // ** Vars
  const data = route?.params?.data;

  // ** States
  const [isUPI, setIsUPI] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const onSuccess = method => {
    const billingData = {
      items: data?.items?.map(item => ({
        u_id: item?.u_id,
        qty: item?.qty,
      })),
      created_at: new Date(),
      totalPrice: data?.totalAmount,
      payment_status: 'done',
      payment_via: method,
    };

    const billData = MMKV.getArray('bills');

    const newId = generateNewID(billData, 'BLL');

    billingData.u_id = newId;

    const updatedBillsArray = billData
      ? [...billData, billingData]
      : [billingData];

    MMKV.setArray('bills', updatedBillsArray);

    Toast.show({text1: 'Bill Generated Successfully', type: 'success'});
    navigation.navigate('homePage');
  };

  return (
    <View style={styles?.rootContainer}>
      <Header back options={{headerLeftText: 'Billing'}} />
      <Screen style={styles.itemContainer}>
        <View style={styles?.cartCardContainer}>
          <View style={styles?.sectionTitleContainer}>
            <Text style={styles?.sectionTitleText}>Items :</Text>
          </View>
          <View>
            {data?.items?.map((item, index) => (
              <View key={index} style={styles?.cartItemsContainer}>
                <Text style={styles?.cartItemsNameText}>{item?.name}</Text>
                <Text
                  style={
                    styles?.cartItemsQtyText
                  }>{`${item?.qty} ${item?.type}`}</Text>
              </View>
            ))}
          </View>
          <View style={styles?.divider} />
          <View style={styles?.cartItemsContainer}>
            <Text style={styles?.totalItemsNameText}>{`Total`}</Text>
            <Text style={styles?.totalItemsQtyText}>
              {currencyConvert(data?.totalAmount)}
            </Text>
          </View>
        </View>
        <View style={styles?.cartCardContainer}>
          <View style={styles?.sectionTitleContainer}>
            <Text style={styles?.sectionTitleText}>Payment via :</Text>
          </View>
          <Button
            title="Cash"
            btnStyle={[styles?.buttonStyle, styles?.cashButton]}
            onPress={() => {
              setIsUPI(false);
              setOpenModal(true);
            }}
          />
          <Button
            title="UPI"
            btnStyle={[styles?.buttonStyle, styles?.upiButton]}
            onPress={() => {
              setIsUPI(true);
              setOpenModal(true);
            }}
          />
        </View>
      </Screen>
      <ReactNativeModal
        isVisible={openModal}
        onBackdropPress={handleModalClose}
        backdropColor={color.whiteSmoke}
        style={styles.modalStyles}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        backdropTransitionOutTiming={0.3}
        backdropOpacity={0.9}>
        <View style={styles.modalContainer}>
          {isUPI ? (
            <UPIModal
              onNo={handleModalClose}
              onYes={onSuccess}
              price={data?.totalAmount}
            />
          ) : (
            <CashModal onNo={handleModalClose} onYes={onSuccess} />
          )}
        </View>
      </ReactNativeModal>
    </View>
  );
}
