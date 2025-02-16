import { View, Text, StyleSheet } from "react-native";

const BookingScreen = ({ route }) => {
  const { selectedRoom, numOfPeople } = route.params;

  const roomInfo = [
    { roomNumber: "A101", capacity: 5, available: true },
    { roomNumber: "A102", capacity: 10, available: false },
    { roomNumber: "A103", capacity: 8, available: false },
    { roomNumber: "A104", capacity: 10, available: true },
    { roomNumber: "A105", capacity: 7, available: true },
  ];

  const isAvailable = (selectedRoom) => {
    const room = roomInfo.find((room) => room.roomNumber === selectedRoom);
    return room ? room.available : false;
  };

  const isCapable = (selectedRoom, numOfPeople) => {
    const room = roomInfo.find((room) => room.roomNumber === selectedRoom);
    return room ? numOfPeople <= room.capacity : false;
  };

  return (
    <View style = {styles.container}>
      {isAvailable(selectedRoom) ? (
        <View style = {styles.textContainer}>
          <Text style = {styles.text}>The room you selected is available</Text>
          {isCapable(selectedRoom, numOfPeople) ? (
            <Text style = {styles.text}>It can fit {numOfPeople} people</Text>
          ) : (
            <Text style = {styles.text}>The room cannot fit {numOfPeople} people</Text>
          )}
        </View>
      ) : (
        <View style = {styles.textContainer}>
        <Text style = {styles.text}>The room you selected is not available</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#2E4756",
    justifyContent: 'flex-start',
    alignItems: "center",
  },
  textContainer: {
    borderWidth: 3,
    borderColor: "#DBC2CF",
    borderRadius: 8,
    padding: 10,
    marginTop: 30,
  },
  text: {
    fontSize: 18,
    marginVertical: 8,
    color: "#DBC2CF",
    textAlign: 'center',
  },
});

export default BookingScreen;
