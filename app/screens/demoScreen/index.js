import React from 'react';
import {Text, View} from 'react-native';
import {Screen} from '../../components/screen';
import {Header} from '../../components/header';

export default DemoPage = () => {
  return (
    <Screen>
      <Header options={{headerLeftText: 'Home Page'}} />
      <View>
        <Text style={{color: 'black'}}>DEMO PAGE</Text>
      </View>
    </Screen>
  );
};
