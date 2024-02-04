import React from 'react';
import ReactNativeModal from 'react-native-modal';

import * as styles from './styles';
import {color} from '../../../theme';
import {Text, View} from 'react-native';
import {Button} from '../..';

export default function ConfirmDeleteModal({
  title,
  name,
  onConfirm,
  onClose,
  ...props
}) {
  return (
    <ReactNativeModal
      backdropColor={color.gray100}
      style={styles.modalStyles}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      backdropTransitionOutTiming={0.3}
      backdropOpacity={0.8}
      {...props}>
      <View style={styles.modalContainer}>
        <View>
          <Text>Are you sure?</Text>
        </View>
        <View>
          <Text style={{textAlign: 'center'}}>{title}</Text>
        </View>
        <View style={styles?.modalButtonsContainer}>
          <Button title={'Confirm'} onPress={onConfirm} />
          <Button
            activeOpacity={0.2}
            title={'Cancel'}
            btnStyle={styles?.closeBtn}
            onPress={onClose}
            customTextColor={color.black}
          />
        </View>
      </View>
    </ReactNativeModal>
  );
}
