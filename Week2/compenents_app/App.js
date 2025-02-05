import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TextInput } from 'react-native';

export default function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [age, setAge] = useState(0)

  
  const showAlert = () => {
    Alert.alert("Alert!", "This message is from a button click")
  }
  
  return (
    <View style={styles.container}>
      <Text style = {styles.titleStyle} >
        Week 2 - Core Components examples
      </Text>
      <Text style = {styles.titleStyle}>
        Winter 2025
      </Text>

      <Image 
        style = {styles.imgStyle}
        source={ {uri: "https://images.freeimages.com/images/large-previews/9f7/sleeping-cat-1359219.jpg"} }
      />

      <Button 
        title='Press me!'
        onPress={showAlert}
      />

      <TextInput 
        style = {styles.inputStyle}
        value={name}
        onChangeText={setName}
        placeholder='Enter your name'
        autoCapitalize='words'
        autoComplete='name'
        keyboardType='name-phone-pad'
        maxLength={50}
      />

      <TextInput 
        style = {styles.inputStyle}
        value={email}
        onChangeText={setEmail}
        placeholder='Enter your email'
        keyboardType='email-address'
      />

      <TextInput 
        style = {styles.inputStyle}
        value={password}
        onChangeText={setPassword}
        placeholder='Enter your password'
        keyboardType='default'
        maxLength={10}
        secureTextEntry={true}
      />

      <TextInput 
        style = {styles.inputStyle}
        value={age}
        onChangeText={setAge}
        placeholder='Enter your age'
        keyboardType='number-pad'
        maxLength={3}
      />

      <Text>Name: {name}</Text>
      <Text>Email: {email}</Text>
      <Text>Password: {password} </Text>
      <Text>Age: {age}</Text>
      

      <StatusBar style="auto" />
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgStyle: {
    width: 300,
    height: 200,
  },
  titleStyle: {
    fontSize: 32,
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  inputStyle: {
    fontSize: 24,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginVertical: 10,
    height: 40,
  },
});
