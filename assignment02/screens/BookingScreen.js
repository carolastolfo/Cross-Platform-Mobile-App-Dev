import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from 'react-redux';
import { addBooking } from "../redux/actions";

const BookingScreen = ({ route, navigation }) => {
  const { selectedRoom, numOfPeople } = route.params;
  const dispatch = useDispatch();
  
  // use state so i can change room availability after it's booked
  const [roomInfo, setRoomInfo] = useState([
    { roomNumber: "A101", capacity: 5, available: true },
    { roomNumber: "A102", capacity: 10, available: false },
    { roomNumber: "A103", capacity: 8, available: false },
    { roomNumber: "A104", capacity: 10, available: true },
    { roomNumber: "A105", capacity: 7, available: true },
  ]);

  const isAvailable = (selectedRoom) => {
    const room = roomInfo.find((room) => room.roomNumber === selectedRoom);
    return room ? room.available : false;
  };

  const isCapable = (selectedRoom, numOfPeople) => {
    const room = roomInfo.find((room) => room.roomNumber === selectedRoom);
    return room ? numOfPeople <= room.capacity : false;
  };

  const handleBookRoom = () => {
    const room = roomInfo.find((room) => room.roomNumber === selectedRoom);
    
    // create booking info to add to redux
    const bookingInfo = {
      roomNumber: selectedRoom,
      capacity: room.capacity,
      numOfPeople: numOfPeople,
      bookingDate: new Date().toISOString(),
    };
    
    // dispatch the action to add to bookedRooms in redux
    dispatch(addBooking(bookingInfo));
    
    // update room availability 
    setRoomInfo(roomInfo.map(room => 
      room.roomNumber === selectedRoom 
        ? { ...room, available: false } 
        : room
    ));
    
    alert(`Room ${selectedRoom} successfully booked for ${numOfPeople} people!`);

  };

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.viewBookingsButton} 
        onPress={() => navigation.navigate('My Bookings')}
      >
        <Text style={styles.viewBookingsText}>View Booked Rooms</Text>
      </TouchableOpacity>
      
      {isAvailable(selectedRoom) ? (
        <View style={styles.textContainer}>
          <Text style={styles.text}>The room you selected is available: {selectedRoom}</Text>
          {isCapable(selectedRoom, numOfPeople) ? (
            <>
              <Text style={styles.text}>It can fit {numOfPeople} people</Text>
              <TouchableOpacity 
                style={styles.bookButton} 
                onPress={handleBookRoom}
              >
                <Text style={styles.buttonText}>Book Room</Text>
              </TouchableOpacity>
            </>
          ) : (
            <Text style={styles.text}>The room cannot fit {numOfPeople} people</Text>
          )}
        </View>
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.text}>The room you selected is not available: {selectedRoom}</Text>
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
    marginTop: 16,
  },
  text: {
    fontSize: 18,
    marginVertical: 8,
    color: "#DBC2CF",
    textAlign: 'center',
  },
  bookButton: {
    backgroundColor: "#9B6A6C",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 16,
    alignSelf: 'center',
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: 'center',
  },
  viewBookingsButton: {
    backgroundColor: "#506D7A",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 20,
    alignSelf: 'flex-end',
  },
  viewBookingsText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "bold",
  },
});

export default BookingScreen;