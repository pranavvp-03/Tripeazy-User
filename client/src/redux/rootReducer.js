import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";

// Combine all reducers here
const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
