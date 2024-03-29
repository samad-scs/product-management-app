import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomePage from '../../screens/homeScreen';
import BillingScreen from '../../screens/billingScreen';

const Stack = createNativeStackNavigator();

export const MainStackNavigation = () => {
  // const [showSplashScreen, setHideSplashScreen] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setHideSplashScreen(false);
  //   }, 2500);
  // }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen name="demoScreen" component={DemoScreen} /> */}
        <Stack.Screen name="homePage" component={HomePage} />
        <Stack.Screen name="generateBill" component={BillingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
