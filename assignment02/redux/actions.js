import { ADD_BOOKING, DELETE_BOOKING } from "./actionTypes";

export const addBooking = (bookingInfo) => {
  return {
    type: ADD_BOOKING,
    payload: bookingInfo
  };
};

export const deleteBooking = (roomNumber) => {
  return {
    type: DELETE_BOOKING,
    payload: roomNumber
  };
};