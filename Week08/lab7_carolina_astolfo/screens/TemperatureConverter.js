import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { setCelsius } from "../redux/actions";

export default TemperatureConverter = () => {
  const dispatch = useDispatch();
  const fahrenheit = useSelector((state) => state.temperatureRoot.fahrenheit);
  const [input, setInput] = React.useState("");

  const handleConvert = () => {
    //check if input is a number
    if (isNaN(input)) {
      Alert.alert("Invalid input", "Please enter a number.");
    } else {
      // if yes, redux action
      dispatch(setCelsius(input));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Temperature Converter! 🌡️ </Text>
      <Text style={styles.subtitle}>Celsius → Fahrenheit </Text>

      <TextInput
        placeholder="Enter Celsius"
        style={styles.input}
        keyboardType="numbers-and-punctuation"
        value={input}
        onChangeText={setInput}
        placeholderTextColor= "#151E3F"
      />

      <TouchableOpacity style={styles.button} onPress={handleConvert}>
        <Text style={styles.buttonText}>Convert</Text>
      </TouchableOpacity>

      <Text style={styles.result}>{fahrenheit}</Text>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C16E70",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "#F2F3D9",
    marginBottom: 20,
  },
  subtitle: {
        fontSize: 18,
        textAlign: "center",
        color: "#F2F3D9",
        marginBottom: 20,
  }, 
  input: {
    width: "80%",
    fontSize: 18,
    padding: 10,
    color: "#151E3F",
    borderWidth: 1,
    borderColor: "#F2F3D9",
    borderRadius: 8,
    backgroundColor: "#C16E70",
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    marginVertical: 10,
    backgroundColor: "#24336B",
    width: "60%",
    borderRadius: 8,
    padding: 10,
    textAlign: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#F2F3D9",
    textAlign:"center"
  },
  result: {
    fontSize: 18,
    width: "80%",
    textAlign: "center",
    color: "#151E3F",
    borderWidth: 1,
    borderColor: "#F2F3D9",
    borderRadius: 8,
    padding: 10,
    marginTop: 20,
  },
});
