//root reducer

import { combineReducers } from "redux";
import temperatureReducer from './temperatureReducer';

export const rootReducer = combineReducers({temperatureRoot: temperatureReducer})