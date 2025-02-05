import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button, Alert } from 'react-native';

export default function App() {

    const [name, setName] = useState("")
    const [points, setPoints] = useState(0)
  
    
    const showAlert = () => {
      Alert.alert(`Welcome back ${name}! \nYour current points are: ${points}`)
    }

  return (

    <View style={styles.container}>
      <Image
        style = {styles.imgStyle}
        source = { {uri: "https://media.istockphoto.com/id/1323470346/vector/avocado-banana-and-apple-cartoon-characters-running-marathon.jpg?s=612x612&w=0&k=20&c=_4sfR5Dlpv58V_Y5NmPT04XuvFombNJ-vwKmBYasacE="}}
      />

      <Text style = {styles.titleStyle} >Welcome to Veggie Racer 2.0!</Text>
      <Text style = {styles.subTitleStyle} >Login to race</Text>
      
      <TextInput 
        style = {styles.inputStyle}              
        value={name}
        onChangeText={setName}
        placeholder='Enter your username'
        keyboardType='default'
        autoCapitalize='none'
        maxLength={50}
      />

      <TextInput 
        style = {styles.inputStyle}
        value={points}
        onChangeText={setPoints}
        placeholder='Enter your current points'
        keyboardType='number-pad'
        maxLength={8}
      />

      <Button 
        title='Enter!'
        onPress={showAlert}
        color="#333333"
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BBCE8A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleStyle: {
    fontFamily: 'monospace',
    fontSize: 35,
    fontWeight: 'bold',
    color: '#D16014',
    padding: 15,
    textAlign: 'center'
  },

  subTitleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D16014',
    padding: 10,
  },

  inputStyle: {
    fontSize: 20,
    color: '#313715',
    borderColor: '#939F5C',
    borderRadius: 15,
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    height: 40,
  },

  imgStyle: {
    width: 200,
    height: 100,
  }
});
