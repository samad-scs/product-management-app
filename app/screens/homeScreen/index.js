import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import {Header, Screen, Text} from '../../components';
import {IcProfile, IcRightArrow, size} from '../../theme';
import * as styles from './styles';
import {useNavigation} from '@react-navigation/native';

export default function HomePage() {
  const navigation = useNavigation();

  const handleGenerate = () => {
    navigation.navigate('generateBill');
  };

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
          <TouchableOpacity onPress={handleGenerate} style={styles.productCard}>
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
}
