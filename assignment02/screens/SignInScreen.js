import { useState } from "react";
import { TextInput, View, Text, Alert, StyleSheet, TouchableOpacity } from "react-native";

const SignInScreen = ( { navigation } ) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSignIn = () => {
        if (username !== 'admin' || password !== 'admin'){
            Alert.alert("Invalid credentials", "Please enter valid username and password");
        } else {
            navigation.navigate('Dashboard');
        }
    };

    return(
        <View style={styles.container}>
            <Text style = {styles.title}>Please sign in to book a study room 📚</Text>
            <TextInput 
                style={styles.input}
                placeholder="Enter username"
                placeholderTextColor="#9FA2B2"
                value={username}
                onChangeText={setUsername}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter password"
                placeholderTextColor="#9FA2B2"
                secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={handleSignIn}
            >
                <Text style = {styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2E4756",
    padding: 16,
    justifyContent: "center"
    },
  input: {
    height: 40,
    borderColor: '#DBC2CF',
    borderWidth: 3,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: "#2E4756",
    color: "#DBC2CF"
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


export default SignInScreen;
