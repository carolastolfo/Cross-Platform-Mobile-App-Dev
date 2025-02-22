import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import OddOneOutScreen from './screens/OddOneOutScreen.js'
import ScoreboardScreen from './screens/ScoreboardScreen.js'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName='Guessing Game'>
            <Stack.Screen component={OddOneOutScreen} name={'Guessing Game'}/>
            <Stack.Screen component={ScoreboardScreen} name={'Scoreboard'}/>
          </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
  );
}




