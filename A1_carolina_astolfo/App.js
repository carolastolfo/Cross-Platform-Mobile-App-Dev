import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');

  const calculateBMI = () => {
    //convert String input into float
    const weightFloat = parseFloat(weight);
    const heightFloat = parseFloat(height);

    //data validation
    if (weightFloat <= 0 || heightFloat <= 0 || heightFloat > 3) {
      Alert.alert('Invalid Input', 'Please enter a valid weight (>0) and height (0-3 meters).');
      return; //return to not show bmi calculation
    }
    //validate if a number because i clicked calculate without input and got NaN obesity results
    if (isNaN(heightFloat) || isNaN(heightFloat)) {
      Alert.alert('Invalid Input', 'Hey, this is not a number!');
      return; //return to not show bmi calculation
    }

    //perform calculation
    const bmi = (weightFloat / (heightFloat * heightFloat)).toFixed(2); //limit to 2 decimals
    let result = '';

    if (bmi < 18.5) {
      result = 'Underweight';
    } else if (bmi < 25) {
      result = 'Normal weight';
    } else if (bmi < 30) {
      result = 'Overweight';
    } else {
      result = 'Obesity';
    }

    Alert.alert('Your BMI results are in!', `Your BMI is ${bmi} (${result}).`);
  };

  //reset filters
  const resetInputs = () => {
    setWeight('');
    setHeight('');
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>Your BMI Calculator 🏥</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter weight (in kg)"
            placeholderTextColor="#f3de8a"
            keyboardType="numeric"
            value={weight}
            onChangeText={setWeight}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter height (in meters)"
            placeholderTextColor="#f3de8a"
            keyboardType="numeric"
            value={height}
            onChangeText={setHeight}
          />
          <Button title="Calculate" onPress={calculateBMI} color="#F3DE8A"/>
          <Button title="Reset" onPress={resetInputs} color="#97A7B3" />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#7e7f9a',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: "#cae7b9",
    marginBottom: 20,
  },
  input: {
    color: "#f3de8a",
    width: '80%',
    height: 40,
    borderColor: '#eb9486',
    borderWidth: 3,
    borderRadius: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#7e7f9a',
  },
});

