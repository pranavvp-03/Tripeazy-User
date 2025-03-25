import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = {
        ...action.payload.user,
        _id: action.payload.user._id,
        profilePhoto: action.payload.user.profilePhoto,
      };
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    updateProfilePhoto: (state,action) =>{
      if(state.user){
        state.user.profilePhoto = action.payload
      }
    }
  },
});

export const { loginSuccess, logout, updateProfilePhoto } = authSlice.actions;
export default authSlice.reducer;
