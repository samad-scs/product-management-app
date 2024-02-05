import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import ReactNativeModal from 'react-native-modal';
import {Button} from '../..';
import {IcMinus, IcPlus, IcRightArrow, color, size} from '../../../theme';
import * as styles from './styles';
import EditBillingItemModal from '../../modals/editBillingItem';

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
      <EditBillingItemModal
        openMenu={openMenu}
        handleAddToSelection={handleAddToSelection}
        handleClose={handleClose}
        setQty={setQty}
        qty={qty}
        product={product}
      />
    </View>
  );
}
