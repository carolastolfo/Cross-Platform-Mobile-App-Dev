import { useState } from "react";
import { 
    StyleSheet, 
    View, 
    Text, 
    FlatList, 
    ActivityIndicator, 
    Pressable, 
    TouchableOpacity, 
    Alert } from "react-native";
import globalStyles from "../shared/GlobalStyles";

/*

npm install react-native-progress

*/

// modal window presents content above an enclosing view.

const ProgressExample = () => {
    const [progress, setProgress] = useState(0.5); //50%

    const handleProgressChange = () => {
        //perform progress change calculation
    };

    const showAlert = () => {
        Alert.alert("Progress Control")
    }

    const progressItems = [
        { 
            key: "ActivityIndicator", 
            component: <ActivityIndicator size="large" color="magenta" /> 
        },
        { 
            key: "Circle", 
            component: <Text>Circle</Text>
        },
        { 
            key: "CircleSnail", 
            component: <Text>Circle Snail</Text>
        },
        { 
            key: "Pie", 
            component: <Text>Pie</Text>
        },
        { 
            key: "Progress Bar", 
            component: <Text>Bar</Text> 
        },
    ];

    return (
        <View style={globalStyles.safeArea}>
            <Text style={globalStyles.headerStyle}>Progress Example</Text>

            <FlatList
                data={progressItems}
                numColumns={2}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => (
                    <View style={styles.gridItem}>
                        <Text style={styles.label}>{item.key}</Text>
                        {item.component}
                    </View>
                )}
            />

            <View style={styles.stepperContainer}>
                <Pressable style={styles.button} onPress={() => handleProgressChange(-0.1)}>
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>

                <Text style={styles.progressText}>{(progress * 100).toFixed(0)}%</Text>

                <Pressable style={styles.button} onPress={() => handleProgressChange(0.1)}>
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>
            </View>

            <Pressable style={globalStyles.button} onPress={showAlert}>
                <Text style={globalStyles.buttonText}>Show Alert</Text>
            </Pressable>

            <Text style={globalStyles.headerStyle}> Modal Example </Text>

            <TouchableOpacity
                style = {globalStyles.button}
                onPress={() => {
                    //set the showModal to true to show modal window
                }}
            >
                <Text style = {globalStyles.buttonText}>Show Modal Window</Text>
            </TouchableOpacity>

            <View style={ globalStyles.container}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>This is modal window</Text>

                    <TouchableOpacity
                        style = {globalStyles.button}
                        onPress={() => {
                            //set the showModal to true to close modal window
                        }}
                    >
                        <Text style = {globalStyles.buttonText}>Close the popup</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

export default ProgressExample;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        margin: 5,
        backgroundColor: "#f0f0f0",
        borderRadius: 10,
        elevation: 3
    },
    label: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 5,
    },
    controls: {
        alignItems: "center",
        marginTop: 20,
    },
    stepperContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 10,
    },
    button: {
        backgroundColor: "magenta",
        padding: 10,
        borderRadius: 5,
        marginHorizontal: 10,
    },
    buttonText: {
        fontSize: 18,
        color: "white",
        fontWeight: "bold",
    },
    progressText: {
        fontSize: 16,
        fontWeight: "bold",
    },
    modalView: {
        width:"60%",
        height:'60%',
        margin: 5,
        backgroundColor: "white",
        borderColor:"black", 
        borderWidth:1,
        borderRadius: 5,
        padding: 15,
        alignItems: "center", 
        justifyContent: "space-between"
    }

});
