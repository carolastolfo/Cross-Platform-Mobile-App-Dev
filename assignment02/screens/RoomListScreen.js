import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from 'react-redux';
import { deleteBooking } from "../redux/actions";

const RoomListScreen = ({ navigation }) => {
  const bookedRooms = useSelector(state => state.bookingRoot.bookedRooms);
  const dispatch = useDispatch();

  const handleDeleteBooking = (roomNumber) => {
    dispatch(deleteBooking(roomNumber));
  };

  const renderBookingItem = ({ item }) => {
    return (
      <View style={styles.bookingItem}>
        <View style={styles.bookingDetails}>
          <Text style={styles.roomNumber}>Room: {item.roomNumber}</Text>
          <Text style={styles.bookingInfo}>
            People: {item.numOfPeople} / {item.capacity}
          </Text>
          <Text style={styles.bookingInfo}>
            Booked on: {new Date(item.bookingDate).toLocaleDateString()}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteBooking(item.roomNumber)}
        >
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Your Booked Rooms</Text>
      
      {bookedRooms.length > 0 ? (
        <FlatList
          data={bookedRooms}
          renderItem={renderBookingItem}
          keyExtractor={item => item.roomNumber}
          style={styles.list}
        />
      ) : (
        <View style={styles.emptyState}>
          <Text style={styles.emptyText}>You haven't booked any rooms yet.</Text>
          <TouchableOpacity 
            style={styles.goBackButton}
            onPress={() => navigation.navigate('Dashboard')}
          >
            <Text style={styles.goBackText}>Book a Room</Text>
          </TouchableOpacity>
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
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#DBC2CF",
    marginBottom: 16,
    textAlign: "center",
  },
  list: {
    flex: 1,
  },
  bookingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#3D5866",
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#9B6A6C",
  },
  bookingDetails: {
    flex: 1,
  },
  roomNumber: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#DBC2CF",
    marginBottom: 4,
  },
  bookingInfo: {
    fontSize: 14,
    color: "#DBC2CF",
    marginBottom: 2,
  },
  deleteButton: {
    backgroundColor: "#9B6A6C",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginLeft: 16,
  },
  deleteText: {
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  emptyState: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#DBC2CF",
    textAlign: "center",
    marginBottom: 20,
  },
  goBackButton: {
    backgroundColor: "#9B6A6C",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  goBackText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default RoomListScreen;