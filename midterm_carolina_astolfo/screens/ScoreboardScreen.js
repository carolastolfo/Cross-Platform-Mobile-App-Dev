import { View, Text } from "react-native"


const ScoreboardScreen = ( {navigation, route}) => {

    const {wins, counter} = route.params

    return (
        <View>

         <Text>You won {wins} rounds out of {counter} games</Text>

        </View>
    )
}

export default ScoreboardScreen