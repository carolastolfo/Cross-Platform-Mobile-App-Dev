import { useState } from "react"
import { View, Text, FlatList, Pressable, Alert } from "react-native"
import * as Progress from 'react-native-progress'


const OddOneOutScreen = ({navigation}) => {

    const [round, setRound] = useState(0)
    const [wins, setWins] = useState(0)
    const [counter, setCounter] = useState(0)

    const wordSets = [
        { options: ["Dog", "Cat", "Parrot", "Car"], oddOne: "Car" },
        { options: ["Milk", "Juice", "Water", "Laptop"], oddOne: "Laptop" },
        { options: ["Car", "Bike", "Bus", "Giraffe"], oddOne: "Giraffe" },
        { options: ["Sun", "Moon", "Star", "Boat"], oddOne: "Boat" },
        { options: ["Blue", "Red", "Green", "Table"], oddOne: "Table" }
        ];

    const handleGuess = (selected) => {
        if (round < 3){ //should be less than 3
            if (selected === wordSets[round].oddOne) {
                setWins(wins + 1)
                setCounter(counter + 1)
                Alert.alert('Correct', `{wordSets[round.oddOne]} is the Odd one Out!`,
                    [{
                        text: 'Next Round',
                        style: 'default',
                        onPress: () => {setRound(round+1)}
                    },]
                )
            }else {
                setCounter(counter + 1)
                Alert.alert('Wrong', `{wordSets[round].oddOne} is the Odd one Out.`,
                    [{                    
                        text: 'Next Round',
                        style: 'default',
                        onPress: () => {setRound(round+1)}
                    }]
                )
            }
        } else if (round == 3){
            if (selected === wordSets[round].oddOne) {
                setWins(wins + 1)
                setCounter(counter + 1)
                Alert.alert('Correct', `{wordSets[round.oddOne]} is the Odd one Out! \n You have completed all rounds`,
                    [{
                        text: 'Play Again',
                        style: 'default',
                        onPress: () => {setRound(0)}
                    },]
                )
            }else {
                setCounter(counter + 1)
                Alert.alert('Wrong', `{wordSets[round].oddOne} is the Odd one Out. \n You have completed all rounds`,
                    [{                    
                        text: 'Play Again',
                        style: 'default',
                        onPress: () => {setRound(0)}
                    }]
                )
            }
        }



        }

    const handleScoreboard = () => {
        navigation.navigate('Scoreboard', {
            counter: counter,
            wins: wins
        })
    }
    


    return (
        <View>
            <Text>Carolina Astolfo - n01651294</Text>
            <Text>Find the Odd one Out!</Text>
            <Progress.Bar 
                width={200}
                height={20}
                progress={((round + 1)/5)}
                thickness={5}
                borderRadius={10}
            />
            <Text>Round: {(round + 1)}/5</Text>
            <FlatList 
                data={wordSets[round].options}
                keyExtractor={(item, index) => index.toString()}
                renderItem={ ({item}) => (
                    <Pressable
                    onPress = {() => handleGuess(item)}
                    style = {{padding: 15}}
                    >
                        <Text>{item}</Text>
                    </Pressable>
                )}
            
            />
            <Text>Rounds won: {wins}</Text>

            <Pressable
            onPress={handleScoreboard}
            >
                <Text>Scoreboard</Text>
            </Pressable>
        </View>
    )
}

export default OddOneOutScreen