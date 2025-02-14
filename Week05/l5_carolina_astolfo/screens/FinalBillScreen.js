import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FinalBillScreen = ({ route, navigation }) => {
  const { price } = route.params;
  const taxRate = 0.13;
  const tax = price * taxRate;
  const finalBill = price + tax;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Price: ${price.toFixed(2)}</Text>
      <Text style={styles.text}>Tax (13%): ${tax.toFixed(2)}</Text>
      <Text style={styles.total}>Final Bill: ${finalBill.toFixed(2)}</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => navigation.popToTop()}>
        <Text style={styles.buttonText}>Go back to Input</Text>
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
  total: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#A5C882',
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

export default FinalBillScreen;
