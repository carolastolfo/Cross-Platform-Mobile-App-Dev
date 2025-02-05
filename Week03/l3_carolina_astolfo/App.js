import { StyleSheet, Text, View, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style = {styles.container}>
        <View style={styles.container}>
          <Image
            style = {styles.img} 
            source={{uri: "https://images.pexels.com/photos/7260262/pexels-photo-7260262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}}/>
          <View style={styles.progressContainer}>
            <Text style={styles.progressText}>0:00</Text>
            <Text style={styles.progressText}>15:47</Text>
          </View>
          <View style = {styles.progressContainer}>
            <Text style = {styles.titleText}>Cozy Candlelight Chat</Text>
            <Image style={styles.likeIcon} source = {require('./assets/like.png')}/>
          </View>
          <View style = {styles.buttonsContainer}>
          <Image style = {styles.icon} source={require('./assets/rewind-ten.png')} />
          <Image style = {styles.icon} source={require('./assets/play-button.png')} />
            <Image style = {styles.icon} source={require('./assets/forward-ten.png')} />
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3a1e13',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20
  },
  progressContainer: {
    width: '90%',
    margin: 10,
    marginTop: 5,
    padding: 15,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
  },
  buttonsContainer: {
    width: '80%',
    margin: 30,
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between'
  },
  img: {
    width: 320,
    height: 400
  },
  progressText: {
    color: 'ghostwhite',
  },
  titleText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'ghostwhite'
  },
  icon: {
    width: 40,
    height: 40
  },
  likeIcon: {
    width: 18,
    height:18
  }
});
