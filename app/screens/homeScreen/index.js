import React from 'react';
import {TouchableOpacity, TouchableOpacityComponent, View} from 'react-native';

import {Header, Screen, Text} from '../../components';
import {IcProfile, IcRightArrow, size} from '../../theme';
import * as styles from './styles';

export default HomePage = () => {

  console.log('HOME PAGE');

  return (
    <View style={styles.rootContainer()}>
      <Header
        options={{
          headerLeftText: 'Home Page',
          headerRight: () => (
            <IcProfile
              width={size.moderateScale(30)}
              height={size.moderateScale(30)}
            />
          ),
        }}
      />
      <Screen style={styles.itemContainer()}>
        <View>
          <TouchableOpacity
            onPress={() => {
              console.log('HERE');
            }}
            style={styles.productCard}
            >
            <View style={styles?.productCardContent}>
              <Text style={styles?.recentProduct}>Generate Bill</Text>
              <View style={{marginRight: size.moderateScale(10)}}>
                <IcRightArrow
                  fill={'black'}
                  width={size.moderateScale(15)}
                  height={size.moderateScale(15)}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Screen>
    </View>
  );
};
