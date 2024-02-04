import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import ReactNativeModal from 'react-native-modal';
import {Button} from '../..';
import {IcMinus, IcPlus, IcRightArrow, color, size} from '../../../theme';
import * as styles from './styles';

export default function GenerateBillProductCard({product, handleClick}) {
  const [openMenu, setOpenMenu] = useState(false);
  const [qty, setQty] = useState(1);
  const [editable, setEditable] = useState(false);
  const handleGenerate = () => {
    // handleClick(product);
    setOpenMenu(true);
  };

  const handleClose = () => {
    // handleClick(product);
    setOpenMenu(false);
  };

  const handleAddToSelection = () => {
    const data = {...product};
    data.qty = qty;

    handleClick(data);
    setOpenMenu(false);
  };

  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handleGenerate}
        style={styles.productItemCard}>
        <View style={styles?.productItemCardContent}>
          <View style={styles?.itemDescription}>
            <Text style={styles?.itemNameText}>{product?.name}</Text>
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
      <ReactNativeModal
        isVisible={openMenu}
        backdropColor={color.gray100}
        style={styles.modalStyles}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        backdropOpacity={0.5}>
        <View style={styles.modalContainer}>
          {/* PRODUCT NAME */}
          <View>
            <Text style={styles.modalProductNameText}>{product?.name}</Text>
          </View>
          {/* PRODUCT QUANTITY */}
          <View style={styles.modalAmountContainer}>
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
    </View>
  );
}
