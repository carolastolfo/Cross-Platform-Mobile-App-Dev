//define actions
//must return a js object
//that consists of two properties
//type: indicates the actiontypes
//payload: indicates any parameters needed to perform the action

import { SET_CELSIUS } from './actionTypes';

export const setCelsius = (value) => {

  return {
    type: SET_CELSIUS,
    payload: {
      celsius: value,
    },
  };
};

