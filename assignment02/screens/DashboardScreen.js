import { View, Text, Alert, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

const DashboardScreen = ({ navigation }) => {
    const [studentId, setStudentId] = useState('');
    const [name, setName] = useState('');
    const [numOfPeople, setNumOfPeople] = useState('');
    const [selectedRoom, setSelectedRoom] = useState('');
  
    const roomNumbers = ['A101', 'A102', 'A103', 'A104', 'A105'];
  
    const handleClick = () => {
      if (studentId === '' || name === '' || numOfPeople === '') {
        Alert.alert('Invalid input', 'Please enter the required information');
      } else if (selectedRoom === '') {
        Alert.alert("Select a room", 'You have not selected a room');
      } else {
        navigation.navigate("Booking", {
          selectedRoom: selectedRoom,
          numOfPeople: parseInt(numOfPeople)
        });
      }
    };
  
    return (
      <View style = {styles.container}>
        <Text style = {styles.title}>Please enter your name, student id, and the number of people:</Text>
        <TextInput 
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          placeholderTextColor="#9FA2B2"
        />
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={studentId}
          onChangeText={setStudentId}
          placeholder="Enter your student id"
          placeholderTextColor="#9FA2B2"
        />
        <TextInput 
          style={styles.input}
          keyboardType="numeric"
          value={numOfPeople}
          onChangeText={setNumOfPeople}
          placeholder="Enter number of people"
          placeholderTextColor="#9FA2B2"
        />
        <Text style = {styles.title}>Select a room number</Text>
        <Picker
            style = {styles.picker}
            itemStyle = {{color: "#9FA2B2"}}
            selectedValue={selectedRoom}
            onValueChange={(itemValue) => setSelectedRoom(itemValue)}
        >
          {roomNumbers.map((element) => (
            <Picker.Item label={element} value={element} key={element} />
          ))}
        </Picker>
        <TouchableOpacity 
            style = {styles.button}
            onPress={handleClick}>
          <Text style = {styles.buttonText}>Check Availability</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: "#2E4756",
    },
    input: {
      height: 40,
      borderColor: '#DBC2CF',
      borderWidth: 2,
      marginBottom: 12,
      paddingHorizontal: 8,
      borderRadius: 4,
      backgroundColor: "#2E4756",
      color: "#DBC2CF"
    },
    picker: {
        height: 110,
      borderColor: '#9FA2B2',
      marginBottom: 15,
      justifyContent: 'center',
      backgroundColor: "#2E4756"
    },
    button: {
      backgroundColor: '#3C7A89',
      padding: 10,
      alignItems: 'center',
      borderRadius: 4
    },
    buttonText: {
      color: '#DBC2CF',
      fontWeight: 'bold'
    },
    title: {
      color: "#9FA2B2",
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 16,
      textAlign: 'center'
    }
  });
  

  export default DashboardScreen
  