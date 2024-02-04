import React from 'react';
import { useColorScheme } from 'react-native';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { AppDataProvider } from './context/AppDataContext';
import { MainStackNavigation } from './navigation/mainStackNavigation';
import { color, fonts, size } from './theme';

function App() {
  const toastConfig = {
    /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
    success: props => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: '#5BBE97',
          width: size.deviceWidth * 0.9,
        }}
        text1NumberOfLines={2}
        contentContainerStyle={{paddingHorizontal: size.moderateScale(15)}}
        text1Style={{
          fontSize: size.moderateScale(15),
          fontFamily: fonts.openSansRegular,
          fontWeight: '600',
        }}
      />
    ),
    /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
    error: props => (
      <ErrorToast
        {...props}
        style={{
          borderLeftColor: color.brightRed,
          width: size.deviceWidth * 0.9,
        }}
        text1NumberOfLines={2}
        contentContainerStyle={{paddingHorizontal: size.moderateScale(15)}}
        text1Style={{
          fontSize: size.moderateScale(15),
          fontFamily: fonts.openSansRegular,
          fontWeight: '600',
        }}
      />
    ),
    /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.
  
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */
    tomatoToast: ({text1, props}) => (
      <View
        style={{
          height: size.moderateScale(60),
          width: '100%',
          backgroundColor: color.lightRed,
        }}>
        <Text>{text1}</Text>
        <Text>{props.uuid}</Text>
      </View>
    ),
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <AppDataProvider>
      <MainStackNavigation />
      <Toast config={toastConfig} />
    </AppDataProvider>
  );
}

export default App;
