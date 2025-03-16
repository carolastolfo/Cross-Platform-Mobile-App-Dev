import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import SignInScreen from './screens/SignInScreen.js';
import DashboardScreen from './screens/DashboardScreen.js';
import BookingScreen from './screens/BookingScreen.js';
import RoomListScreen from './screens/RoomListScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {

  const headerOptions = ({navigation, route}) => (
    {
      headerStyle: {
        backgroundColor: '#2E4756'
      },
      headerTintColor: '#9FA2B2',
      headerTitleAlign: 'center',
    })
  const headerSignOutOptions = ({navigation, route}) => (
    {
      headerStyle: {
        backgroundColor: '#2E4756'
      },
      headerTintColor: '#9FA2B2',
      headerTitleAlign: 'center',
      headerRight: () => (
        <TouchableOpacity
          onPress={ () => {
            // reset navigation flow
            navigation.dispatch(CommonActions.reset({
              index: 0, 
              routes: [ {name: "SignIn"} ] 
            }))
          }}
        >
            <Text style={{color: '#9FA2B2'}}>Logout</Text>
        </TouchableOpacity>
      )
    })

  return (
    <Provider store={store}>
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='SignIn'>
          <Stack.Group screenOptions={headerOptions}>
          <Stack.Screen component={SignInScreen} name='SignIn' />
          <Stack.Screen component={BookingScreen} name='Booking' />
          </Stack.Group>
          <Stack.Group screenOptions={headerSignOutOptions}>
          <Stack.Screen component={DashboardScreen} name='Dashboard' />
          <Stack.Screen component={RoomListScreen} name="My Bookings" />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
    </Provider>
  );
}
