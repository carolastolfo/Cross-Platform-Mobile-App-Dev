import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import QuantityInputScreen from './screens/QuantityInputScreen.js';
import PriceCalculationScreen from './screens/PriceCalculationScreen.js';
import FinalBillScreen from './screens/FinalBillScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  const headerOptions = ({navigation, route}) => (
    {
      headerStyle: {
        backgroundColor: '#312244'
      },
      headerTintColor: '#A5C882',
      headerTitleAlign: 'center',
    })
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Input Quantity">
        <Stack.Group screenOptions={headerOptions}>
          <Stack.Screen name="Input Quantity" component={QuantityInputScreen} />
          <Stack.Screen name="Price Calculation" component={PriceCalculationScreen}  />
          <Stack.Screen name="Final Bill" component={FinalBillScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
