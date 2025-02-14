import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';

const QuantityInputScreen = ({ navigation }) => {
  const [quantity, setQuantity] = useState('');
  const pricePerProduct = 5;

  const handleClick = () => {
    const num = parseInt(quantity);
    if (isNaN(num) || num <= 0) {
      Alert.alert('Invalid Input', 'Please enter a positive number.');
    } else {
      navigation.navigate('Price Calculation', { quantity: num });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter Quantity:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
        placeholder="enter a number"
        placeholderTextColor="#A5C882"
      />
      <Text style={styles.priceText}>Price per Product: ${pricePerProduct}</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={handleClick}>
        <Text style={styles.buttonText}>Calculate Price</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#312244',
    },
  label: {
    fontSize: 20,
    marginBottom: 10,
    color: '#F7DD72',
    },
  input: {
    borderWidth: 1,
    borderColor: '#4E6766',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
    color: '#FFFFFF',
    },
  priceText: {
    fontSize: 18,
    marginBottom: 20,
    color: '#A5C882',
    },
  button: {
    backgroundColor: '#5AB1BB',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    },
  buttonText: {
    color: '#1E152A',
    fontSize: 18,
    fontWeight: 'bold',
    },
});

export default QuantityInputScreen;
