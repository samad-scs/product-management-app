import React from 'react';
import {View} from 'react-native';

import {Header, Screen, Text} from '../../components';
import {IcProfile, IcRightArrow, color, size} from '../../theme';
import * as styles from './styles';

export default DemoPage = () => {
  return (
    <View style={styles.rootContainer()}>
      <Header
        options={{
          headerLeft: () => <IcProfile />,
          headerRight: () => (
            <IcProfile
              width={size.moderateScale(30)}
              height={size.moderateScale(30)}
            />
          ),
        }}
      />
      <Screen style={styles.itemContainer()}>
        <View
          style={{
            backgroundColor: 'white',
            borderWidth: 0,
            borderRadius: size.moderateScale(15),
            paddingHorizontal: size.moderateScale(14),
            paddingVertical: size.moderateScale(20),
            shadowColor: '#171717ee',
            shadowOffset: {width: -1, height: 2},
            shadowOpacity: 0.1,
            shadowRadius: 1,
            elevation: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles?.recentProduct}>Generate Bill</Text>
            <View style={{marginRight: size.moderateScale(10)}}>
              <IcRightArrow
                fill={'black'}
                width={size.moderateScale(15)}
                height={size.moderateScale(15)}
              />
            </View>
          </View>
        </View>
      </Screen>
    </View>
  );
};
