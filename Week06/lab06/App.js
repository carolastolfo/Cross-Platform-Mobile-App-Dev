import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import * as Progress from "react-native-progress";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [text, setText] = useState("");

  const progress = text.length / 100;
  const progressColor = progress === 1 ? "#C1666B" : "#4281A4";

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <View style={styles.progressContainer}>
        <Progress.Pie
          size={80}
          progress={progress}
          thickness={5}
          color={progressColor}
        />
        </View>

        <Text style={styles.title}>
          Hey, let me know something about your day. Only 100 characters though!
        </Text>
        <TextInput
          style={styles.textInput}
          multiline
          keyboardType="default"
          placeholder="Type here"
          placeholderTextColor="#D4B483"
          value={text}
          onChangeText={setText}
          maxLength={100}
        />

        <Text style={styles.counterText}>You typed {text.length} characters out of a 100</Text>

        <View style={styles.progressBarContainer}>
          <Progress.Bar
            width={200}
            progress={progress}
            color={progressColor}
            borderRadius={10}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#48A9A6",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
  },
  progressContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#D4B483",
    marginBottom: 10,
  },
  textInput: {
    width: 300,
    height: 100,
    borderWidth: 1,
    borderColor: "#C1666B",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#48A9A6",
    color: "#E4DFDA",
    fontSize: 16,
    textAlignVertical: "top",
    marginBottom: 10,
  },
  counterText: {
    fontSize: 14,
    color: "#D4B483",
    marginBottom: 10,
  },
  progressBarContainer: {
    width: "100%",
    alignItems: "center",
  },
});
