/**
 * 
 * reducer is responsible for storing the states
 * and updating the states based on the action
 * 
 */

import { SET_CELSIUS } from '../actionTypes';

const initialState = {
  celsius: 0,
  fahrenheit: 0,
};

const temperatureReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CELSIUS:

        console.log(`Trying to convert ${action.payload.celsius}`)
        // parse payload to float then convert to fahrenheit
        const c = parseFloat(action.payload.celsius);
        const f = ((c * 9) / 5 + 32).toFixed(1) + ' F';

        console.log(`Converted value is ${f}`)
      return {
        //update states values with new conversion
        ...state,
        celsius : c, fahrenheit : f
      };
    default:
      return state;
  }
};

export default temperatureReducer;
