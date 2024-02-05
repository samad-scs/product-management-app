import React from 'react';
import ReactNativeModal from 'react-native-modal';

import * as styles from './styles';
import {IcMinus, IcPlus, color, size} from '../../../theme';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Button} from '../..';

export default function EditBillingItemModal({
  product,
  openMenu,
  handleClose,
  qty,
  setQty,
  handleAddToSelection,
  ...props
}) {
  return (
    <ReactNativeModal
      isVisible={openMenu}
      backdropColor={color.gray100}
      style={styles.modalStyles}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      animationOutTiming={0.4}
      backdropTransitionOutTiming={0.3}
      backdropOpacity={0.5}>
      <View style={styles.modalContainer}>
        {/* PRODUCT NAME */}
        <View>
          <Text style={styles.modalProductNameText}>{product?.name}</Text>
        </View>
        {/* PRODUCT QUANTITY */}
        <View style={styles.modalAmountContainer(product?.type === 'unit')}>
          {product?.type === 'unit' ? (
            <>
              <TouchableOpacity onPress={() => setQty(qty - 1)}>
                <IcMinus
                  width={size.moderateScale(25)}
                  height={size.moderateScale(25)}
                />
              </TouchableOpacity>
              <View>
                <Text style={styles?.inputQtyAmountText}>{qty}</Text>
              </View>
              <TouchableOpacity onPress={() => setQty(qty + 1)}>
                <IcPlus
                  width={size.moderateScale(25)}
                  height={size.moderateScale(25)}
                />
              </TouchableOpacity>
            </>
          ) : (
            <>
              <View>
                <TextInput
                  keyboardType="number-pad"
                  value={qty?.toString() ?? '0'}
                  onChangeText={setQty}
                  style={styles?.inputQtyAmountText}
                />
              </View>
              <View>
                <Text style={styles?.inputQtyAmountText}>{product?.type}</Text>
              </View>
            </>
          )}
        </View>
        {/* BUTTONS */}
        <View style={styles?.modalButtonsContainer}>
          <Button title={'Add'} onPress={handleAddToSelection} />
          <Button
            activeOpacity={0.2}
            title={'Close'}
            btnStyle={styles?.closeBtn}
            onPress={handleClose}
            customTextColor={color.black}
          />
        </View>
      </View>
    </ReactNativeModal>
  );
}
