import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PriceCalculationScreen = ({ route, navigation }) => {
  const { quantity } = route.params;
  const pricePerProduct = 5;
  const totalPrice = quantity * pricePerProduct;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Quantity: {quantity}</Text>
      <Text style={styles.text}>Price per Product: ${pricePerProduct}</Text>
      <Text style={styles.text}>Total Price: ${totalPrice}</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.navigate('Final Bill', { price: totalPrice })}
      >
        <Text style={styles.buttonText}>Final Bill</Text>
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
  text: {
    fontSize: 20,
    marginBottom: 10,
    color: '#F7DD72',
    },
  button: {
    backgroundColor: '#5AB1BB',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    },
  buttonText: {
    color: '#1E152A',
    fontSize: 18,
    fontWeight: 'bold',
    },
});

export default PriceCalculationScreen;
