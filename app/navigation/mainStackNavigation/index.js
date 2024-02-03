import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomePage from '../../screens/homeScreen';
import BillingScreen from '../../screens/billingScreen';
import AddUpdateProduct from '../../screens/addUpdateProductScreen';
import ProductsScreen from '../../screens/productsScreen';
import RecentBillings from '../../screens/recentBillings';

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
        <Stack.Screen name="recentBillings" component={RecentBillings} />
        <Stack.Screen name="productsList" component={ProductsScreen} />
        <Stack.Screen name="addProduct" component={AddUpdateProduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
