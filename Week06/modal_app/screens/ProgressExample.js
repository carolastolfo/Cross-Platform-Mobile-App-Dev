import { useState } from "react";
import { 
    StyleSheet, 
    View, 
    Text, 
    FlatList, 
    ActivityIndicator, 
    Pressable, 
    TouchableOpacity, 
    Alert,
    Modal } from "react-native";
import globalStyles from "../shared/GlobalStyles";
import * as Progress from 'react-native-progress';

/*

npm install react-native-progress

*/

// modal window presents content above an enclosing view.

const ProgressExample = () => {

    /* 
        0 = 0%
        0.4 = 40%
        0.7 = 70%
        1.0 = 100%
    */

    const [progress, setProgress] = useState(0.5); //50%

    //variable to manually set visibility of modal window
    const [showModal, setShowModal] = useState(false)

    const handleProgressChange = (changeValue) => {
        //perform progress change calculation
        const newValue = progress + changeValue

        if (newValue >= 0 && newValue <=1){
            setProgress(newValue)
        }
    };

    const showAlert = () => {
        Alert.alert(
            "Progress Control",
            "This alert shows three diff button",
            //array of buttons in the alert
            [
                {
                    text: 'Increase',
                    style: 'default',
                    onPress: () => {handleProgressChange(0.1)}
                },
                {
                    text: "Decrease",
                    style: 'destructive',
                    onPress: () => {handleProgressChange(-0.1)}
                },
                {
                    text: 'Cancel',
                    style: 'cancel',
                    onPress: () => console.log(`user cancelled`)
                }
            ]
        )
    }

    const progressItems = [
        { 
            key: "ActivityIndicator", 
            component: <ActivityIndicator size="large" color="magenta" /> 
        },
        { 
            key: "Circle", 
            component: <Progress.Circle 
                            size={80}
                            progress={progress}
                            thickness={6}
                            unfilledColor="grey"
                            color="magenta"
                            borderColor="green"
                            showsText={true}
                            textStyle={
                                {
                                    fontSize:20,
                                    color: 'blue',
                                    fontWeight: 'bold'
                                }
                            }
                        />
        },
        { 
            key: "CircleSnail", 
            component: <Progress.CircleSnail 
                            size={80}
                            thickness={5}
                            color={['magenta', 'yellow', 'green', 'blue']}
                            spinDuration={3000} // 3 seconds // default is 5seconds
                        />
        },
        { 
            key: "Pie", 
            component: <Progress.Pie 
                            size={80}
                            progress={progress}
                            thickness={5}
                            color={'magenta'}
                            unfilledColor="yellow"
                        />
        },
        { 
            key: "Progress Bar", 
            component: <Progress.Bar 
                            width={300}
                            height={20}
                            progress={progress}
                            thickness={5}
                            color="magenta"
                            //indeterminate={true}
                            borderRadius={10}
                        /> 
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
                    //or set it up like below to toggle
                    setShowModal(!showModal)
                }}
            >
                <Text style = {globalStyles.buttonText}>Show Modal Window</Text>
            </TouchableOpacity>

        <Modal 
            visible={showModal}
            transparent={true}
            onRequestClose={() => {
                //for android. callback function called when user taps hardware back button on android
                //on ios its called using drag gesture only if presentations style is pageSheet or formSheet
                setShowModal(!showModal)
            }}
        >
                
                  
            <View style={ globalStyles.container}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>This is modal window</Text>
                    <Text style={styles.modalText}>You can design your modal window as needed</Text>

                    <TouchableOpacity
                        style = {globalStyles.button}
                        onPress={() => {
                            //set the showModal to true to close modal window
                            setShowModal(!showModal)
                        }}
                    >
                        <Text style = {globalStyles.buttonText}>Close the popup</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </Modal> 
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
        color: 'magenta'
    },
    modalView: {
        width:"60%",
        height:'30%',
        margin: 5,
        backgroundColor: "white",
        borderColor:"black", 
        borderWidth:1,
        borderRadius: 5,
        padding: 15,
        alignItems: "center", 
        justifyContent: "space-evenly"
    }

});
