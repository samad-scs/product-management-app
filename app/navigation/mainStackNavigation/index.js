import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import HomePage from '../../screens/homeScreen';
import BillingScreen from '../../screens/billingScreen';
import AddUpdateProduct from '../../screens/addUpdateProductScreen';
import ProductsScreen from '../../screens/productsScreen';
import RecentBillings from '../../screens/recentBillings';
import { SplashScreen } from '../../screens/splashScreen';

const Stack = createNativeStackNavigator();

export const MainStackNavigation = () => {
  const [showSplashScreen, setHideSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(false);
    }, 2500);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {showSplashScreen ? (
          <Stack.Screen name="splashScreen" component={SplashScreen} />
        ) : null}
        <Stack.Screen name="homePage" component={HomePage} />
        <Stack.Screen name="generateBill" component={BillingScreen} />
        <Stack.Screen name="recentBillings" component={RecentBillings} />
        <Stack.Screen name="productsList" component={ProductsScreen} />
        <Stack.Screen name="addProduct" component={AddUpdateProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
